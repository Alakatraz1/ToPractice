import { describe, it } from 'node:test';
import assert from 'node:assert';
import { 
    getLevels, 
    getAllProblems, 
    getLevel, 
    getLevelForProblem, 
    getNavigationInfo 
} from '../src/data/levels';

describe('Python Curriculum, Levels, and Navigation Tests', () => {
    it('python track has exactly 27 levels', () => {
        const levels = getLevels('python');
        assert.strictEqual(levels.length, 27);
        for (let i = 0; i < 27; i++) {
            const expectedNumber = i + 1;
            const expectedId = `level-${String(expectedNumber).padStart(2, '0')}`;
            assert.strictEqual(levels[i].number, expectedNumber);
            assert.strictEqual(levels[i].id, expectedId);
            assert(levels[i].title.length > 0, `Level ${expectedNumber} title is missing`);
            assert(levels[i].description.length > 0, `Level ${expectedNumber} description is missing`);
            assert.strictEqual(levels[i].problems.length, 10, `Level ${expectedNumber} should have 10 problems`);
        }
    });

    it('python track has exactly 270 problems with valid levelId', () => {
        const problems = getAllProblems('python');
        assert.strictEqual(problems.length, 270);

        for (const p of problems) {
            assert(p.id.startsWith('py-prob-'), `Invalid problem ID: ${p.id}`);
            assert(p.levelId.startsWith('level-'), `Problem ${p.id} has invalid levelId: ${p.levelId}`);
            assert(p.title.length > 0, `Problem ${p.id} has empty title`);
            assert(p.description.length > 0, `Problem ${p.id} has empty description`);
            assert(p.concepts.length > 0, `Problem ${p.id} has empty concepts`);
            assert(p.hints.length > 0, `Problem ${p.id} has empty hints`);
            assert(p.howToThink.length > 0, `Problem ${p.id} has empty howToThink`);
            assert(p.testCases.length > 0, `Problem ${p.id} has no testCases`);
            assert(p.starterCode.length > 0, `Problem ${p.id} has empty starterCode`);
            assert(p.solution.length > 0, `Problem ${p.id} has empty solution`);
        }
    });

    it('getLevelForProblem correctly resolves every Python problem', () => {
        const problems = getAllProblems('python');
        for (const p of problems) {
            const level = getLevelForProblem(p.id);
            assert(level !== null, `getLevelForProblem returned null for ${p.id}`);
            assert.strictEqual(level!.id, p.levelId, `Level mismatch for ${p.id}: expected ${p.levelId}, got ${level!.id}`);
            assert(level!.problems.includes(p.id), `Level ${level!.id} does not list problem ${p.id}`);
        }
    });

    it('getNavigationInfo seamlessly chains all 270 Python problems', () => {
        const problems = getAllProblems('python');
        
        // Test first problem (Q1 Level 1)
        const firstNav = getNavigationInfo(problems[0].id, 'python');
        assert.strictEqual(firstNav.isFirstInLevel, true);
        assert.strictEqual(firstNav.prevProblem, null, 'First problem should have no prevProblem');
        assert.strictEqual(firstNav.nextProblem?.id, problems[1].id);
        assert.strictEqual(firstNav.currentIndexInLevel, 0);
        assert.strictEqual(firstNav.totalInLevel, 10);

        // Test sequential forward navigation through all 270 problems
        for (let i = 0; i < problems.length - 1; i++) {
            const curr = problems[i];
            const nextExpected = problems[i + 1];
            const nav = getNavigationInfo(curr.id, 'python');
            assert(nav.nextProblem !== null, `Problem ${curr.id} should have a nextProblem`);
            assert.strictEqual(
                nav.nextProblem!.id, 
                nextExpected.id, 
                `Navigation forward error at ${curr.id}: expected ${nextExpected.id}, got ${nav.nextProblem!.id}`
            );
        }

        // Test last problem (Q10 Level 27)
        const lastNav = getNavigationInfo(problems[problems.length - 1].id, 'python');
        assert.strictEqual(lastNav.isLastInLevel, true);
        assert.strictEqual(lastNav.nextProblem, null, 'Last problem should have no nextProblem');
    });
});
