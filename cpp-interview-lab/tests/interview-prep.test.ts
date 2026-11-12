import { describe, it } from 'node:test';
import assert from 'node:assert';
import { spawnSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import {
    getAmazonPrepLevels,
    getAmazonPrepProblems,
    amazonPatternPrimers
} from '../src/data/interviewPrep';
import {
    getProblem,
    getLevelForProblem,
    getNavigationInfo
} from '../src/data/levels';

function normalizeOutput(output: string): string {
    return output
        .replace(/\r\n/g, '\n')
        .split('\n')
        .map(line => line.trimEnd())
        .join('\n')
        .trim();
}

describe('Amazon SDE 1 Intern Interview Preparation Track Tests', () => {
    it('has 2 phases (Basics & Challenging OA) with 8 Basics and 12 Challenges in both C++ and Python', () => {
        const cppLevels = getAmazonPrepLevels('cpp');
        const pyLevels = getAmazonPrepLevels('python');
        assert.strictEqual(cppLevels.length, 2);
        assert.strictEqual(pyLevels.length, 2);

        const cppBasics = getAmazonPrepProblems('cpp', 'basics');
        const cppChallenges = getAmazonPrepProblems('cpp', 'challenges');
        const pyBasics = getAmazonPrepProblems('python', 'basics');
        const pyChallenges = getAmazonPrepProblems('python', 'challenges');

        assert.strictEqual(cppBasics.length, 8);
        assert.strictEqual(cppChallenges.length, 12);
        assert.strictEqual(pyBasics.length, 8);
        assert.strictEqual(pyChallenges.length, 12);
        assert.strictEqual(amazonPatternPrimers.length, 4);
    });

    it('resolves all Amazon Prep problems via getProblem, getLevelForProblem, and getNavigationInfo', () => {
        for (const lang of ['cpp', 'python'] as const) {
            const problems = getAmazonPrepProblems(lang);
            assert.strictEqual(problems.length, 20);

            for (let i = 0; i < problems.length; i++) {
                const p = problems[i];
                const lookedUp = getProblem(p.id);
                assert(lookedUp !== undefined, `getProblem(${p.id}) returned undefined`);

                const level = getLevelForProblem(p.id);
                assert(level !== null, `getLevelForProblem(${p.id}) returned null`);
                assert.strictEqual(level!.id, p.levelId);

                const nav = getNavigationInfo(p.id, lang);
                if (i < problems.length - 1) {
                    assert.strictEqual(nav.nextProblem?.id, problems[i + 1].id);
                } else {
                    assert.strictEqual(nav.nextProblem, null);
                }
            }
        }
    });

    it('all 20 Python 3 Amazon Prep solutions (8 Basics + 12 OA Challenges) pass all test cases', { timeout: 60000 }, () => {
        const pyProblems = getAmazonPrepProblems('python');
        for (const prob of pyProblems) {
            for (const tc of prob.testCases) {
                const res = spawnSync('python3', ['-c', prob.solution], {
                    input: tc.input,
                    encoding: 'utf8',
                    timeout: 4000
                });
                assert.strictEqual(res.status, 0, `Python runtime error on ${prob.id} (${tc.id}): ${res.stderr}`);
                assert.strictEqual(
                    normalizeOutput(res.stdout),
                    normalizeOutput(tc.expectedOutput),
                    `Python output mismatch on ${prob.id} (${tc.id})`
                );
            }
        }
    });

    it('all 20 C++17 Amazon Prep solutions (8 Basics + 12 OA Challenges) compile and pass all test cases', { timeout: 120000 }, () => {
        const cppProblems = getAmazonPrepProblems('cpp');
        const tmpDir = os.tmpdir();

        for (const prob of cppProblems) {
            const srcFile = path.join(tmpDir, `${prob.id}.cpp`);
            const binFile = path.join(tmpDir, `${prob.id}.out`);
            fs.writeFileSync(srcFile, prob.solution, 'utf8');

            try {
                const compileRes = spawnSync('g++', ['-std=c++17', '-O2', srcFile, '-o', binFile], {
                    encoding: 'utf8',
                    timeout: 10000
                });
                assert.strictEqual(
                    compileRes.status,
                    0,
                    `C++ compile error on ${prob.id}: ${compileRes.stderr}`
                );

                for (const tc of prob.testCases) {
                    const runRes = spawnSync(binFile, [], {
                        input: tc.input,
                        encoding: 'utf8',
                        timeout: 4000
                    });
                    assert.strictEqual(runRes.status, 0, `C++ runtime error on ${prob.id} (${tc.id}): ${runRes.stderr}`);
                    assert.strictEqual(
                        normalizeOutput(runRes.stdout),
                        normalizeOutput(tc.expectedOutput),
                        `C++ output mismatch on ${prob.id} (${tc.id})`
                    );
                }
            } finally {
                try { fs.unlinkSync(srcFile); } catch {}
                try { fs.unlinkSync(binFile); } catch {}
            }
        }
    });
});
