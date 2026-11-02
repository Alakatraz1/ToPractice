import { describe, it } from 'node:test';
import assert from 'node:assert';
import { 
    getLocalDateString, 
    calculateStreak, 
    getCalendarData,
    getYearCalendarData
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

    it('getYearCalendarData creates calendar boxes exactly matching calendar days in 2026', () => {
        const data = getYearCalendarData(2026, { '2026-11-02': 5 });
        
        // Count active target year days per month
        const daysByMonth: Record<number, number> = {};
        for (const week of data.weeks) {
            for (const day of week.days) {
                if (day.isTargetYear) {
                    daysByMonth[day.month] = (daysByMonth[day.month] || 0) + 1;
                }
            }
        }

        const expectedDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        for (let m = 0; m < 12; m++) {
            assert.strictEqual(
                daysByMonth[m], 
                expectedDays[m], 
                `Month ${m} day count mismatch: expected ${expectedDays[m]}, got ${daysByMonth[m]}`
            );
        }

        const totalYearDays = Object.values(daysByMonth).reduce((a, b) => a + b, 0);
        assert.strictEqual(totalYearDays, 365, 'Total days in 2026 must be 365');

        // Month labels must cover all 12 months in chronological order
        assert.strictEqual(data.monthLabels.length, 12);
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        for (let i = 0; i < 12; i++) {
            assert.strictEqual(data.monthLabels[i].name, monthNames[i]);
            assert.strictEqual(data.monthLabels[i].month, i);
        }
    });

    it('getCalendarData generates rolling 12 months with accurate contributions', () => {
        const today = new Date();
        const todayStr = getLocalDateString(today);
        const activity = {
            [todayStr]: 7
        };

        const data = getCalendarData(activity, 52);
        assert.strictEqual(data.weeks.length, 52);
        for (const week of data.weeks) {
            assert.strictEqual(week.days.length, 7);
        }
    });
});
