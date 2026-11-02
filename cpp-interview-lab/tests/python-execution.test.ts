import { describe, it } from 'node:test';
import assert from 'node:assert';
import { spawnSync } from 'child_process';
import { getAllProblems } from '../src/data/levels';

function normalizeOutput(output: string): string {
    return output.replace(/\r\n/g, '\n')
                 .split('\n')
                 .map(line => line.trimEnd())
                 .join('\n')
                 .trim();
}

describe('Python 3 Solutions Execution & Test Case Validation', () => {
    const problems = getAllProblems('python');

    it(`all ${problems.length} Python solutions pass all test cases on Python 3`, { timeout: 120000 }, () => {
        let passedCount = 0;
        const failures: Array<{ id: string; title: string; tcId: string; expected: string; actual: string; error?: string }> = [];

        for (const prob of problems) {
            const solution = prob.pythonSolution || prob.solution;
            assert(solution, `Problem ${prob.id} is missing a solution`);

            let problemPassed = true;
            for (const tc of prob.testCases) {
                const res = spawnSync('python3', ['-c', solution], {
                    input: tc.input || '',
                    encoding: 'utf8',
                    timeout: 4000
                });

                if (res.error) {
                    problemPassed = false;
                    failures.push({
                        id: prob.id,
                        title: prob.title,
                        tcId: tc.id,
                        expected: tc.expectedOutput,
                        actual: '',
                        error: res.error.message
                    });
                    break;
                }

                if (res.status !== 0) {
                    problemPassed = false;
                    failures.push({
                        id: prob.id,
                        title: prob.title,
                        tcId: tc.id,
                        expected: tc.expectedOutput,
                        actual: res.stdout || '',
                        error: `Exit code ${res.status}: ${res.stderr}`
                    });
                    break;
                }

                const actual = normalizeOutput(res.stdout || '');
                const expected = normalizeOutput(tc.expectedOutput || '');

                if (actual !== expected) {
                    problemPassed = false;
                    failures.push({
                        id: prob.id,
                        title: prob.title,
                        tcId: tc.id,
                        expected,
                        actual,
                        error: `Output mismatch for input: "${tc.input}"`
                    });
                    break;
                }
            }

            if (problemPassed) {
                passedCount++;
            }
        }

        if (failures.length > 0) {
            console.error('Failed problems:', failures);
        }

        assert.strictEqual(
            failures.length, 
            0, 
            `${failures.length} Python problems failed their test cases: ${JSON.stringify(failures, null, 2)}`
        );
        assert.strictEqual(passedCount, problems.length, 'All problems should pass');
    });
});
