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
        return {
            ...defaultProg,
            ...parsed,
            mastery: parsed.mastery || {},
            solveQuality: parsed.solveQuality || {},
            savedCode: parsed.savedCode || {},
            attempts: parsed.attempts || {},
            hintsUsed: parsed.hintsUsed || {},
            completedProblems: parsed.completedProblems || [],
            solutionsViewed: parsed.solutionsViewed || [],
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
    }
    
    saveProgress(current, language);
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
}
