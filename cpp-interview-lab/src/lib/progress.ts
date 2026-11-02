import { UserProgress } from '@/data/types';
import { getProblem } from '@/data/levels';

const BASE_STORAGE_KEY = 'cpp_interview_lab_progress_v2';

export function getGlobalLanguage(): 'cpp' | 'python' {
    if (typeof window === 'undefined') return 'cpp';
    return (localStorage.getItem('cpp_interview_language') as 'cpp' | 'python') || 'cpp';
}

export function setGlobalLanguage(lang: 'cpp' | 'python'): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem('cpp_interview_language', lang);
    // trigger a custom event so UI can re-render if needed
    window.dispatchEvent(new Event('languageChange'));
}

export function getLocalDateString(date: Date = new Date()): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export function calculateStreak(dailyActivity: Record<string, number>): {
    currentStreak: number;
    longestStreak: number;
    totalActiveDays: number;
    totalContributions: number;
    lastActiveDate: string;
} {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = getLocalDateString(today);
    
    const activeDates = Object.entries(dailyActivity || {})
        .filter(([_, count]) => count > 0)
        .map(([date, _]) => date)
        .sort();

    const totalActiveDays = activeDates.length;
    const totalContributions = Object.values(dailyActivity || {}).reduce((acc, c) => acc + (c > 0 ? c : 0), 0);
    const lastActiveDate = activeDates.length > 0 ? activeDates[activeDates.length - 1] : '';

    if (activeDates.length === 0) {
        return { currentStreak: 0, longestStreak: 0, totalActiveDays: 0, totalContributions: 0, lastActiveDate: '' };
    }

    // Longest streak calculation
    let longestStreak = 0;
    let tempStreak = 0;
    let prevDate: Date | null = null;

    for (const dateStr of activeDates) {
        const currDate = new Date(dateStr + 'T00:00:00');
        if (!prevDate) {
            tempStreak = 1;
        } else {
            const diffDays = Math.round((currDate.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24));
            if (diffDays === 1) {
                tempStreak++;
            } else if (diffDays > 1) {
                tempStreak = 1;
            }
        }
        if (tempStreak > longestStreak) {
            longestStreak = tempStreak;
        }
        prevDate = currDate;
    }

    // Current streak calculation
    let currentStreak = 0;
    const checkDate = new Date(today);
    
    // If today has activity, start from today
    if ((dailyActivity[todayStr] || 0) > 0) {
        currentStreak = 1;
        checkDate.setDate(checkDate.getDate() - 1);
    } else {
        // If today has no activity, check yesterday
        checkDate.setDate(checkDate.getDate() - 1);
        const yestStr = getLocalDateString(checkDate);
        if ((dailyActivity[yestStr] || 0) > 0) {
            currentStreak = 1;
            checkDate.setDate(checkDate.getDate() - 1);
        } else {
            currentStreak = 0;
        }
    }

    if (currentStreak > 0) {
        while (true) {
            const dStr = getLocalDateString(checkDate);
            if ((dailyActivity[dStr] || 0) > 0) {
                currentStreak++;
                checkDate.setDate(checkDate.getDate() - 1);
            } else {
                break;
            }
        }
    }

    return {
        currentStreak,
        longestStreak: Math.max(longestStreak, currentStreak),
        totalActiveDays,
        totalContributions,
        lastActiveDate
    };
}

export function getDefaultProgress(lang?: 'cpp' | 'python'): UserProgress {
    const language = lang || getGlobalLanguage();
    return {
        currentLevel: 'level-01',
        currentProblem: language === 'python' ? 'py-prob-01-01' : 'prob-01-01',
        completedProblems: [],
        attempts: {},
        hintsUsed: {},
        solutionsViewed: [],
        savedCode: {},
        mastery: {},
        solveQuality: {},
        dailyActivity: {},
        streak: {
            currentStreak: 0,
            longestStreak: 0,
            lastActiveDate: ''
        },
        lastOpenedAt: new Date().toISOString()
    };
}

function getStorageKey(lang?: 'cpp' | 'python'): string {
    const language = lang || getGlobalLanguage();
    return `${BASE_STORAGE_KEY}_${language}`;
}

export function getProgress(lang?: 'cpp' | 'python'): UserProgress {
    const language = lang || getGlobalLanguage();
    const defaultProg = getDefaultProgress(language);
    if (typeof window === 'undefined') return defaultProg;
    
    const stored = localStorage.getItem(getStorageKey(language));
    if (!stored) return defaultProg;
    
    try {
        const parsed = JSON.parse(stored);
        const completed = parsed.completedProblems || [];
        const dailyAct = parsed.dailyActivity || {};
        
        // Auto-seed today's activity if completedProblems exists but dailyActivity was empty
        if (completed.length > 0 && Object.keys(dailyAct).length === 0) {
            const todayStr = getLocalDateString();
            dailyAct[todayStr] = completed.length;
        }

        const streak = parsed.streak || calculateStreak(dailyAct);

        return {
            ...defaultProg,
            ...parsed,
            mastery: parsed.mastery || {},
            solveQuality: parsed.solveQuality || {},
            savedCode: parsed.savedCode || {},
            attempts: parsed.attempts || {},
            hintsUsed: parsed.hintsUsed || {},
            completedProblems: completed,
            solutionsViewed: parsed.solutionsViewed || [],
            dailyActivity: dailyAct,
            streak
        };
    } catch (e) {
        console.error('Failed to parse progress', e);
        return defaultProg;
    }
}

export function saveProgress(progress: UserProgress, lang?: 'cpp' | 'python'): void {
    if (typeof window === 'undefined') return;
    const language = lang || getGlobalLanguage();
    progress.lastOpenedAt = new Date().toISOString();
    localStorage.setItem(getStorageKey(language), JSON.stringify(progress));
}

export function updateProgress(updates: Partial<UserProgress>, lang?: 'cpp' | 'python'): UserProgress {
    const language = lang || getGlobalLanguage();
    const current = getProgress(language);
    const updated = { ...current, ...updates };
    saveProgress(updated, language);
    return updated;
}

export function saveCode(problemId: string, code: string, lang?: 'cpp' | 'python'): void {
    const language = lang || (problemId.startsWith('py-') ? 'python' : getGlobalLanguage());
    const current = getProgress(language);
    current.savedCode[problemId] = code;
    saveProgress(current, language);
}

export function updateMastery(progress: UserProgress, problemId: string, concepts: string[], quality: 'independent' | 'hint_assisted' | 'solution_assisted') {
    let delta = 0;
    if (quality === 'independent') {
        delta = 15;
    } else if (quality === 'solution_assisted') {
        delta = 2;
    } else if (quality === 'hint_assisted') {
        const hintsUsed = progress.hintsUsed[problemId] || 1;
        delta = hintsUsed === 1 ? 8 : 4;
    }

    for (const concept of concepts) {
        const currentScore = progress.mastery[concept] || 0;
        let newScore = currentScore + delta;
        if (newScore > 100) newScore = 100;
        if (newScore < 0) newScore = 0;
        progress.mastery[concept] = newScore;
    }
}

export function markProblemComplete(problemId: string, lang?: 'cpp' | 'python'): void {
    const language = lang || (problemId.startsWith('py-') ? 'python' : getGlobalLanguage());
    const current = getProgress(language);
    const problem = getProblem(problemId);
    
    if (!current.completedProblems.includes(problemId)) {
        current.completedProblems.push(problemId);
        
        let quality: 'independent' | 'hint_assisted' | 'solution_assisted' = 'independent';
        if (current.solutionsViewed.includes(problemId)) {
            quality = 'solution_assisted';
        } else if ((current.hintsUsed[problemId] || 0) > 0) {
            quality = 'hint_assisted';
        }
        
        current.solveQuality[problemId] = quality;
        
        if (problem && problem.concepts) {
            updateMastery(current, problemId, problem.concepts, quality);
        }

        // Record Daily Activity for GitHub-style green dot system
        const todayStr = getLocalDateString();
        current.dailyActivity = current.dailyActivity || {};
        current.dailyActivity[todayStr] = (current.dailyActivity[todayStr] || 0) + 1;
        current.streak = calculateStreak(current.dailyActivity);
    }
    
    saveProgress(current, language);
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('progressUpdated'));
    }
}

export function recordAttempt(problemId: string, isFailure: boolean, lang?: 'cpp' | 'python'): void {
    const language = lang || (problemId.startsWith('py-') ? 'python' : getGlobalLanguage());
    const current = getProgress(language);
    current.attempts[problemId] = (current.attempts[problemId] || 0) + 1;
    
    if (isFailure && current.attempts[problemId] > 3) {
        const problem = getProblem(problemId);
        if (problem && problem.concepts) {
            for (const concept of problem.concepts) {
                const score = current.mastery[concept] || 0;
                current.mastery[concept] = Math.max(0, score - 1);
            }
        }
    }
    
    saveProgress(current, language);
}

export function recordHint(problemId: string, hintIndex: number, lang?: 'cpp' | 'python'): void {
    const language = lang || (problemId.startsWith('py-') ? 'python' : getGlobalLanguage());
    const current = getProgress(language);
    current.hintsUsed[problemId] = Math.max(current.hintsUsed[problemId] || 0, hintIndex + 1);
    saveProgress(current, language);
}

export function recordSolutionView(problemId: string, lang?: 'cpp' | 'python'): void {
    const language = lang || (problemId.startsWith('py-') ? 'python' : getGlobalLanguage());
    const current = getProgress(language);
    if (!current.solutionsViewed.includes(problemId)) {
        current.solutionsViewed.push(problemId);
    }
    saveProgress(current, language);
}

export function getWeakConcepts(lang?: 'cpp' | 'python'): string[] {
    const current = getProgress(lang);
    const concepts = Object.entries(current.mastery);
    return concepts
        .filter(([_, score]) => score < 70)
        .sort((a, b) => a[1] - b[1])
        .map(([concept, _]) => concept);
}

export function isLevelUnlocked(levelId: string): boolean {
    if (levelId === 'level-01') return true;
    return true; 
}

export function resetProgress(lang?: 'cpp' | 'python'): void {
    if (typeof window === 'undefined') return;
    const language = lang || getGlobalLanguage();
    localStorage.removeItem(getStorageKey(language));
    window.dispatchEvent(new Event('languageChange'));
    window.dispatchEvent(new Event('progressUpdated'));
}

export function getCombinedDailyActivity(): Record<string, number> {
    if (typeof window === 'undefined') return {};
    const cppProg = getProgress('cpp');
    const pyProg = getProgress('python');
    const merged: Record<string, number> = { ...(cppProg.dailyActivity || {}) };
    for (const [date, count] of Object.entries(pyProg.dailyActivity || {})) {
        merged[date] = (merged[date] || 0) + count;
    }
    return merged;
}

export interface CalendarDay {
    date: string;
    dayOfWeek: number;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
    label: string;
    isFuture: boolean;
}

export interface CalendarWeek {
    days: CalendarDay[];
}

export interface MonthLabel {
    name: string;
    weekIndex: number;
}

export interface CalendarData {
    weeks: CalendarWeek[];
    months: MonthLabel[];
    totalActiveDays: number;
    totalContributions: number;
    currentStreak: number;
    longestStreak: number;
    todayCount: number;
}

export function getCalendarData(dailyActivity: Record<string, number>, weeksCount: number = 52): CalendarData {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = getLocalDateString(today);
    
    // We want the grid to end on the current week's Saturday
    const currentDayOfWeek = today.getDay(); // 0 (Sun) - 6 (Sat)
    const endOfWeek = new Date(today);
    endOfWeek.setDate(today.getDate() + (6 - currentDayOfWeek));
    endOfWeek.setHours(0, 0, 0, 0);
    
    // Total days: weeksCount * 7
    const totalDays = weeksCount * 7;
    const startDate = new Date(endOfWeek);
    startDate.setDate(endOfWeek.getDate() - (totalDays - 1));
    startDate.setHours(0, 0, 0, 0);

    const weeks: CalendarWeek[] = [];
    const months: MonthLabel[] = [];
    let currentWeek: CalendarDay[] = [];
    let prevMonth = -1;

    const curr = new Date(startDate);
    for (let i = 0; i < totalDays; i++) {
        const dateStr = getLocalDateString(curr);
        const isFuture = curr.getTime() > today.getTime();
        const count = isFuture ? 0 : (dailyActivity[dateStr] || 0);
        
        let level: 0 | 1 | 2 | 3 | 4 = 0;
        if (count >= 6) level = 4;
        else if (count >= 4) level = 3;
        else if (count >= 2) level = 2;
        else if (count === 1) level = 1;

        const dateFormatted = curr.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });

        const label = isFuture 
            ? 'Upcoming' 
            : count === 0 
                ? `No submissions on ${dateFormatted}`
                : `${count} problem${count === 1 ? '' : 's'} completed on ${dateFormatted}`;

        currentWeek.push({
            date: dateStr,
            dayOfWeek: curr.getDay(),
            count,
            level,
            label,
            isFuture
        });

        if (currentWeek.length === 7) {
            const weekIdx = weeks.length;
            const weekMonth = new Date(currentWeek[0].date + 'T00:00:00').getMonth();
            const firstOfMonth = currentWeek.find(d => d.date.endsWith('-01'));

            if (firstOfMonth) {
                const mDate = new Date(firstOfMonth.date + 'T00:00:00');
                months.push({
                    name: mDate.toLocaleDateString('en-US', { month: 'short' }),
                    weekIndex: weekIdx
                });
                prevMonth = mDate.getMonth();
            } else if (weekMonth !== prevMonth && (weeks.length === 0 || weeks.length - (months[months.length - 1]?.weekIndex ?? -10) >= 3)) {
                months.push({
                    name: new Date(currentWeek[0].date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short' }),
                    weekIndex: weekIdx
                });
                prevMonth = weekMonth;
            }

            weeks.push({ days: currentWeek });
            currentWeek = [];
        }

        curr.setDate(curr.getDate() + 1);
    }

    const streakMetrics = calculateStreak(dailyActivity);

    return {
        weeks,
        months,
        totalActiveDays: streakMetrics.totalActiveDays,
        totalContributions: streakMetrics.totalContributions,
        currentStreak: streakMetrics.currentStreak,
        longestStreak: streakMetrics.longestStreak,
        todayCount: dailyActivity[todayStr] || 0
    };
}
