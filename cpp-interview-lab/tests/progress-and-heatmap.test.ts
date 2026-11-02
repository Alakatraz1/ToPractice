import { describe, it } from 'node:test';
import assert from 'node:assert';
import { 
    getLocalDateString, 
    calculateStreak, 
    getCalendarData 
} from '../src/lib/progress';

describe('Progress and Daily Activity Heatmap Tests', () => {
    it('getLocalDateString returns valid YYYY-MM-DD string', () => {
        const testDate = new Date(2026, 10, 2); // Nov 2, 2026
        const dateStr = getLocalDateString(testDate);
        assert.strictEqual(dateStr, '2026-11-02');
    });

    it('calculateStreak handles empty activity correctly', () => {
        const streak = calculateStreak({});
        assert.strictEqual(streak.currentStreak, 0);
        assert.strictEqual(streak.longestStreak, 0);
        assert.strictEqual(streak.totalActiveDays, 0);
        assert.strictEqual(streak.totalContributions, 0);
    });

    it('calculateStreak handles active streak today', () => {
        const today = new Date();
        const todayStr = getLocalDateString(today);
        
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        const yestStr = getLocalDateString(yesterday);

        const activity = {
            [yestStr]: 2,
            [todayStr]: 3
        };

        const streak = calculateStreak(activity);
        assert.strictEqual(streak.currentStreak, 2);
        assert.strictEqual(streak.longestStreak, 2);
        assert.strictEqual(streak.totalActiveDays, 2);
        assert.strictEqual(streak.totalContributions, 5);
    });

    it('calculateStreak preserves active streak from yesterday when today has not yet been practiced', () => {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        const yestStr = getLocalDateString(yesterday);

        const dayBefore = new Date(today);
        dayBefore.setDate(today.getDate() - 2);
        const dayBeforeStr = getLocalDateString(dayBefore);

        const activity = {
            [dayBeforeStr]: 1,
            [yestStr]: 4
        };

        const streak = calculateStreak(activity);
        // Yesterday was active, so streak is still alive!
        assert.strictEqual(streak.currentStreak, 2);
        assert.strictEqual(streak.longestStreak, 2);
    });

    it('calculateStreak resets current streak when gap is more than 1 day', () => {
        const today = new Date();
        const threeDaysAgo = new Date(today);
        threeDaysAgo.setDate(today.getDate() - 3);
        const threeDaysAgoStr = getLocalDateString(threeDaysAgo);

        const activity = {
            [threeDaysAgoStr]: 5
        };

        const streak = calculateStreak(activity);
        assert.strictEqual(streak.currentStreak, 0);
        assert.strictEqual(streak.longestStreak, 1);
        assert.strictEqual(streak.totalActiveDays, 1);
    });

    it('getCalendarData generates full 52 weeks grid with accurate levels', () => {
        const today = new Date();
        const todayStr = getLocalDateString(today);
        const activity = {
            [todayStr]: 7 // Level 4
        };

        const data = getCalendarData(activity, 52);
        assert.strictEqual(data.weeks.length, 52);
        
        // Every week must have 7 days
        for (const week of data.weeks) {
            assert.strictEqual(week.days.length, 7);
        }

        // Today must be found and have level 4
        const allDays = data.weeks.flatMap(w => w.days);
        const todayCell = allDays.find(d => d.date === todayStr);
        assert(todayCell !== undefined, 'Today cell must exist in calendar');
        assert.strictEqual(todayCell.level, 4);
        assert.strictEqual(todayCell.count, 7);
        assert.strictEqual(data.todayCount, 7);
    });
});
