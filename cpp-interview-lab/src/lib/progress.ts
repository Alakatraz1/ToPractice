import { UserProgress } from '@/data/types';
import { getProblem } from '@/data/levels';

const STORAGE_KEY = 'cpp_interview_lab_progress_v2'; // Bumped version for new schema

const DEFAULT_PROGRESS: UserProgress = {
    currentLevel: 'level-01',
    currentProblem: 'prob-01-01',
    completedProblems: [],
    attempts: {},
    hintsUsed: {},
    solutionsViewed: [],
    savedCode: {},
    mastery: {},
    solveQuality: {},
    lastOpenedAt: new Date().toISOString()
};

export function getProgress(): UserProgress {
    if (typeof window === 'undefined') return DEFAULT_PROGRESS;
    
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return DEFAULT_PROGRESS;
    
    try {
        const parsed = JSON.parse(stored);
        return { ...DEFAULT_PROGRESS, ...parsed, mastery: parsed.mastery || {}, solveQuality: parsed.solveQuality || {} };
    } catch (e) {
        console.error('Failed to parse progress', e);
        return DEFAULT_PROGRESS;
    }
}

export function saveProgress(progress: UserProgress): void {
    if (typeof window === 'undefined') return;
    
    progress.lastOpenedAt = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function updateProgress(updates: Partial<UserProgress>): UserProgress {
    const current = getProgress();
    const updated = { ...current, ...updates };
    saveProgress(updated);
    return updated;
}

export function saveCode(problemId: string, code: string): void {
    const current = getProgress();
    current.savedCode[problemId] = code;
    saveProgress(current);
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

export function markProblemComplete(problemId: string): void {
    const current = getProgress();
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
        
        if (problem) {
            updateMastery(current, problemId, problem.concepts, quality);
        }
    }
    
    saveProgress(current);
}

export function recordAttempt(problemId: string, isFailure: boolean): void {
    const current = getProgress();
    current.attempts[problemId] = (current.attempts[problemId] || 0) + 1;
    
    // Penalize mastery slightly on repeated failures if we want
    if (isFailure && current.attempts[problemId] > 3) {
        const problem = getProblem(problemId);
        if (problem) {
            for (const concept of problem.concepts) {
                const score = current.mastery[concept] || 0;
                current.mastery[concept] = Math.max(0, score - 1); // Very small decrease
            }
        }
    }
    
    saveProgress(current);
}

export function recordHint(problemId: string, hintIndex: number): void {
    const current = getProgress();
    current.hintsUsed[problemId] = Math.max(current.hintsUsed[problemId] || 0, hintIndex + 1);
    saveProgress(current);
}

export function recordSolutionView(problemId: string): void {
    const current = getProgress();
    if (!current.solutionsViewed.includes(problemId)) {
        current.solutionsViewed.push(problemId);
    }
    saveProgress(current);
}

export function getWeakConcepts(): string[] {
    const current = getProgress();
    const concepts = Object.entries(current.mastery);
    // Sort by lowest mastery first, only return those < 70
    return concepts
        .filter(([_, score]) => score < 70)
        .sort((a, b) => a[1] - b[1])
        .map(([concept, _]) => concept);
}

export function isLevelUnlocked(levelId: string): boolean {
    const current = getProgress();
    // Level 1 is always unlocked
    if (levelId === 'level-01') return true;
    
    // Simplistic logic: to unlock level N, level N-1 must be complete (e.g. 70% problems solved)
    // We'll refine this inside the dashboard/curriculum logic using `levels.ts`
    // Returning true for now to avoid accidental hard-locking during dev.
    return true; 
}
