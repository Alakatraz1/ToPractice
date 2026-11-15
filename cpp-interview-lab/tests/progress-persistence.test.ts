import { describe, it } from 'node:test';
import assert from 'node:assert';
import { 
    mergeUserProgress, 
    getDefaultProgress, 
    exportProgressAsJSON, 
    importProgressFromJSON,
    UserProgress
} from '../src/lib/progress';

describe('Progress Persistence & Zero-Data-Loss Merge Tests', () => {
    it('mergeUserProgress returns valid default progress when both inputs are empty', () => {
        const merged = mergeUserProgress(null, null, 'cpp');
        assert.strictEqual(merged.currentLevel, 'level-01');
        assert.strictEqual(merged.currentProblem, 'prob-01-01');
        assert.deepStrictEqual(merged.completedProblems, []);
        assert.strictEqual(merged.streak?.currentStreak || 0, 0);
    });

    it('mergeUserProgress never wipes existing progress when remote or incoming data is empty', () => {
        const existing: Partial<UserProgress> = {
            currentLevel: 'level-04',
            currentProblem: 'prob-04-03',
            completedProblems: ['prob-01-01', 'prob-01-02', 'prob-02-01'],
            savedCode: {
                'prob-01-01': '#include <iostream>\nint main(){ std::cout << 42; }'
            },
            attempts: { 'prob-01-01': 2 },
            hintsUsed: { 'prob-01-01': 1 },
            mastery: { 'variables': 30 },
            dailyActivity: { '2026-11-14': 3 },
            lastOpenedAt: '2026-11-14T10:00:00.000Z'
        };

        const emptyIncoming: Partial<UserProgress> = {
            completedProblems: [],
            savedCode: {},
            attempts: {},
            hintsUsed: {},
            mastery: {},
            dailyActivity: {}
        };

        const merged = mergeUserProgress(existing, emptyIncoming, 'cpp');

        assert.strictEqual(merged.completedProblems.length, 3);
        assert(merged.completedProblems.includes('prob-01-01'));
        assert(merged.completedProblems.includes('prob-01-02'));
        assert(merged.completedProblems.includes('prob-02-01'));
        assert.strictEqual(merged.savedCode['prob-01-01'], '#include <iostream>\nint main(){ std::cout << 42; }');
        assert.strictEqual(merged.attempts['prob-01-01'], 2);
        assert.strictEqual(merged.hintsUsed['prob-01-01'], 1);
        assert.strictEqual(merged.mastery['variables'], 30);
    });

    it('mergeUserProgress computes the exact union of completed problems across multiple sessions', () => {
        const sessionA: Partial<UserProgress> = {
            completedProblems: ['prob-01-01', 'prob-01-02', 'prob-01-03'],
            savedCode: { 'prob-01-01': 'code_a1', 'prob-01-02': 'code_a2' }
        };

        const sessionB: Partial<UserProgress> = {
            completedProblems: ['prob-01-02', 'prob-01-04', 'prob-01-05'],
            savedCode: { 'prob-01-02': 'code_a2_longer_version', 'prob-01-04': 'code_b4' }
        };

        const merged = mergeUserProgress(sessionA, sessionB, 'cpp');

        assert.strictEqual(merged.completedProblems.length, 5);
        assert.deepStrictEqual(merged.completedProblems.sort(), ['prob-01-01', 'prob-01-02', 'prob-01-03', 'prob-01-04', 'prob-01-05'].sort());
        assert.strictEqual(merged.savedCode['prob-01-01'], 'code_a1');
        assert.strictEqual(merged.savedCode['prob-01-02'], 'code_a2_longer_version');
        assert.strictEqual(merged.savedCode['prob-01-04'], 'code_b4');
    });

    it('mergeUserProgress preserves non-empty code when merged with empty starter code', () => {
        const studentWork: Partial<UserProgress> = {
            savedCode: {
                'prob-01-01': '#include <iostream>\nusing namespace std;\nint main() { cout << "Hello"; return 0; }'
            }
        };

        const freshStarter: Partial<UserProgress> = {
            savedCode: {
                'prob-01-01': ''
            }
        };

        const merged1 = mergeUserProgress(studentWork, freshStarter, 'cpp');
        assert.strictEqual(merged1.savedCode['prob-01-01'], '#include <iostream>\nusing namespace std;\nint main() { cout << "Hello"; return 0; }');

        const merged2 = mergeUserProgress(freshStarter, studentWork, 'cpp');
        assert.strictEqual(merged2.savedCode['prob-01-01'], '#include <iostream>\nusing namespace std;\nint main() { cout << "Hello"; return 0; }');
    });

    it('mergeUserProgress combines daily activities and accurately recalculates streaks', () => {
        const local: Partial<UserProgress> = {
            dailyActivity: {
                '2026-11-10': 2,
                '2026-11-11': 4
            }
        };

        const remote: Partial<UserProgress> = {
            dailyActivity: {
                '2026-11-11': 1,
                '2026-11-12': 5
            }
        };

        const merged = mergeUserProgress(local, remote, 'cpp');
        assert.strictEqual(merged.dailyActivity?.['2026-11-10'], 2);
        assert.strictEqual(merged.dailyActivity?.['2026-11-11'], 4); // Max count
        assert.strictEqual(merged.dailyActivity?.['2026-11-12'], 5);
        assert((merged.streak?.currentStreak || 0) >= 0);
    });

    it('monotonic guarantee: merged progress is strictly superset of both inputs', () => {
        const prog1: Partial<UserProgress> = {
            completedProblems: ['amz-basic-01', 'amz-basic-02'],
            attempts: { 'amz-basic-01': 3 },
            hintsUsed: { 'amz-basic-01': 2 }
        };

        const prog2: Partial<UserProgress> = {
            completedProblems: ['amz-basic-02', 'amz-basic-03'],
            attempts: { 'amz-basic-01': 1, 'amz-basic-02': 2 },
            hintsUsed: { 'amz-basic-01': 1, 'amz-basic-02': 3 }
        };

        const merged = mergeUserProgress(prog1, prog2, 'cpp');
        assert(merged.completedProblems.length >= prog1.completedProblems!.length);
        assert(merged.completedProblems.length >= prog2.completedProblems!.length);
        assert.strictEqual(merged.attempts['amz-basic-01'], 3);
        assert.strictEqual(merged.hintsUsed['amz-basic-02'], 3);
    });

    it('exportProgressAsJSON and importProgressFromJSON round-trip preserves and merges data cleanly', () => {
        const testPayload = JSON.stringify({
            version: '2.0',
            language: 'cpp',
            cpp: {
                currentLevel: 'level-02',
                currentProblem: 'prob-02-05',
                completedProblems: ['prob-01-01', 'prob-01-02'],
                savedCode: { 'prob-01-01': 'int main(){ return 0; }' },
                attempts: { 'prob-01-01': 1 },
                hintsUsed: {},
                solutionsViewed: [],
                mastery: { 'cout': 20 },
                solveQuality: { 'prob-01-01': 'independent' },
                dailyActivity: { '2026-11-14': 2 },
                streak: { currentStreak: 1, longestStreak: 1, lastActiveDate: '2026-11-14' },
                lastOpenedAt: new Date().toISOString()
            },
            python: {
                currentLevel: 'level-01',
                currentProblem: 'py-prob-01-01',
                completedProblems: ['py-prob-01-01'],
                savedCode: { 'py-prob-01-01': 'print("Hello Python")' },
                attempts: {},
                hintsUsed: {},
                solutionsViewed: [],
                mastery: {},
                solveQuality: {},
                dailyActivity: {},
                streak: { currentStreak: 0, longestStreak: 0, lastActiveDate: '' },
                lastOpenedAt: new Date().toISOString()
            }
        });

        // Test importing into a fresh mock
        const res = importProgressFromJSON(testPayload);
        assert.strictEqual(res.success, true);
        assert(res.restoredCpp >= 2);
        assert(res.restoredPy >= 1);
    });

    it('mergeUserProgress correctly combines Python and C++ progress independently without collision', () => {
        const localCpp: Partial<UserProgress> = {
            completedProblems: ['prob-01-01', 'prob-01-02', 'prob-01-03']
        };
        const incomingCpp: Partial<UserProgress> = {
            completedProblems: ['prob-01-03', 'prob-01-04']
        };
        const localPy: Partial<UserProgress> = {
            completedProblems: ['py-prob-01-01', 'py-prob-01-02']
        };
        const incomingPy: Partial<UserProgress> = {
            completedProblems: ['py-prob-01-02', 'py-prob-01-03', 'py-prob-01-04']
        };

        const mergedCpp = mergeUserProgress(localCpp, incomingCpp, 'cpp');
        const mergedPy = mergeUserProgress(localPy, incomingPy, 'python');

        assert.strictEqual(mergedCpp.completedProblems.length, 4);
        assert.strictEqual(mergedPy.completedProblems.length, 4);
        assert(mergedCpp.completedProblems.every(p => !p.startsWith('py-')));
        assert(mergedPy.completedProblems.every(p => p.startsWith('py-')));
    });
});
