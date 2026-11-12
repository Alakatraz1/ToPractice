import { describe, it } from 'node:test';
import assert from 'node:assert';
import { spawnSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import {
    getAmazonPrepLevels,
    getAmazonPrepProblems,
    amazonPatternPrimers,
    amazonBasicsSpecs,
    amazonChallengesSpecs
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
    it('has 2 phases (Basics & Challenging OA) with 56 Zero-to-Hero Basics and 12 Challenges in both C++ and Python', () => {
        const cppLevels = getAmazonPrepLevels('cpp');
        const pyLevels = getAmazonPrepLevels('python');
        assert.strictEqual(cppLevels.length, 2);
        assert.strictEqual(pyLevels.length, 2);

        const cppBasics = getAmazonPrepProblems('cpp', 'basics');
        const cppChallenges = getAmazonPrepProblems('cpp', 'challenges');
        const pyBasics = getAmazonPrepProblems('python', 'basics');
        const pyChallenges = getAmazonPrepProblems('python', 'challenges');

        assert.strictEqual(cppBasics.length, 56);
        assert.strictEqual(cppChallenges.length, 12);
        assert.strictEqual(pyBasics.length, 56);
        assert.strictEqual(pyChallenges.length, 12);
        assert.strictEqual(amazonPatternPrimers.length, 4);
    });

    it('contains zero raw $ LaTeX math delimiters or LaTeX commands in any problem description or teaching text', () => {
        const allSpecs = [...amazonBasicsSpecs, ...amazonChallengesSpecs];
        assert.strictEqual(allSpecs.length, 68);

        for (const spec of allSpecs) {
            const textFields = [
                spec.description,
                spec.whyThisMatters,
                spec.explanation,
                spec.approach,
                ...spec.hints,
                ...spec.howToThink,
                ...spec.commonMistakes
            ];
            for (const text of textFields) {
                assert(
                    !text.includes('$'),
                    `Found raw $ delimiter in ${spec.baseId}: ${text}`
                );
                assert(
                    !/\\(le|ge|times|sqrt|lceil|rceil|text|sum|max|min|log)/.test(text),
                    `Found raw LaTeX command in ${spec.baseId}: ${text}`
                );
            }
        }

        for (const basic of amazonBasicsSpecs) {
            assert(
                basic.description.includes('### Mini-Lesson:'),
                `Basic problem ${basic.baseId} is missing a Mini-Lesson header`
            );
            assert(
                basic.description.includes('**C++17 Idiom:**') && basic.description.includes('**Python 3 Idiom:**'),
                `Basic problem ${basic.baseId} is missing C++17 / Python 3 Idiom blocks`
            );
        }
    });

    it('resolves all 68 Amazon Prep problems per language via getProblem, getLevelForProblem, and getNavigationInfo', () => {
        for (const lang of ['cpp', 'python'] as const) {
            const problems = getAmazonPrepProblems(lang);
            assert.strictEqual(problems.length, 68);

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

    it('all 68 Python 3 Amazon Prep solutions (56 Basics + 12 OA Challenges) pass all test cases', { timeout: 120000 }, () => {
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

    it('all 68 C++17 Amazon Prep solutions (56 Basics + 12 OA Challenges) compile and pass all test cases', { timeout: 240000 }, () => {
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
