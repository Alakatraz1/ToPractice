import { spawn } from 'child_process';
import { promises as fs } from 'fs';
import * as path from 'path';
import * as os from 'os';
import * as crypto from 'crypto';

export interface TestCase {
  id: string;
  input: string;
  expectedOutput: string;
  hidden?: boolean;
}

export interface TestCaseResult {
  id: string;
  passed: boolean;
  input: string;
  expectedOutput: string;
  actualOutput: string;
  error?: string;
  hidden?: boolean;
}

export interface CompileAndRunResult {
  status: 'success' | 'compile_error' | 'system_error';
  message?: string;
  compilerOutput?: string;
  results?: TestCaseResult[];
}

// Ensure unique temp directory
const tempDir = os.tmpdir();

function normalizeOutput(output: string): string {
  // Normalize whitespace: trim end, reduce multiple newlines, trim lines
  return output.replace(/\r\n/g, '\n')
               .split('\n')
               .map(line => line.trimEnd())
               .join('\n')
               .trim();
}

export async function checkCompilerStatus(): Promise<{available: boolean, version: string}> {
    return new Promise((resolve) => {
        const proc = spawn('g++', ['--version']);
        let stdout = '';
        proc.stdout.on('data', data => stdout += data.toString());
        
        proc.on('close', (code) => {
            if (code === 0) {
                const versionMatch = stdout.match(/g\+\+\s+\(.*\)\s+([0-9\.]+)/);
                resolve({
                    available: true, 
                    version: versionMatch ? versionMatch[1] : 'Unknown'
                });
            } else {
                resolve({available: false, version: ''});
            }
        });
        proc.on('error', () => {
            resolve({available: false, version: ''});
        });
    });
}

export async function compileAndRunCpp(code: string, testCases: TestCase[], timeoutMs: number = 2000): Promise<CompileAndRunResult> {
    const sessionId = crypto.randomUUID();
    const cppFile = path.join(tempDir, `code_${sessionId}.cpp`);
    // Need .exe on windows, but we're on Linux
    const exeFile = path.join(tempDir, `exe_${sessionId}`);
    
    try {
        await fs.writeFile(cppFile, code);
        
        // Compile
        const compileResult = await new Promise<{code: number | null, stderr: string}>((resolve) => {
            const proc = spawn('g++', ['-std=c++17', '-O2', cppFile, '-o', exeFile]);
            let stderr = '';
            proc.stderr.on('data', (data) => stderr += data.toString());
            
            // Protect against hung compiler
            const timeout = setTimeout(() => {
                proc.kill();
                resolve({ code: -1, stderr: 'Compilation timed out' });
            }, 10000);
            
            proc.on('close', (code) => {
                clearTimeout(timeout);
                resolve({ code, stderr });
            });
        });
        
        if (compileResult.code !== 0) {
            return {
                status: 'compile_error',
                message: 'Compilation failed',
                compilerOutput: compileResult.stderr
            };
        }
        
        // Run test cases
        const results: TestCaseResult[] = [];
        
        for (const tc of testCases) {
            const tcResult = await new Promise<TestCaseResult>((resolve) => {
                const proc = spawn(exeFile);
                let stdout = '';
                let stderr = '';
                let isKilled = false;
                
                const timer = setTimeout(() => {
                    isKilled = true;
                    proc.kill();
                    resolve({
                        id: tc.id,
                        passed: false,
                        input: tc.input,
                        expectedOutput: tc.expectedOutput,
                        actualOutput: stdout,
                        error: 'Time Limit Exceeded'
                    });
                }, timeoutMs);
                
                // Set limits on output to prevent memory issues
                let outputSize = 0;
                const MAX_OUTPUT = 1024 * 1024; // 1MB
                
                proc.stdout.on('data', (data) => {
                    if (outputSize > MAX_OUTPUT) return;
                    stdout += data.toString();
                    outputSize += data.length;
                    if (outputSize > MAX_OUTPUT) {
                        isKilled = true;
                        proc.kill();
                        resolve({
                            id: tc.id,
                            passed: false,
                            input: tc.input,
                            expectedOutput: tc.expectedOutput,
                            actualOutput: stdout.substring(0, 1024) + '... (Output Limit Exceeded)',
                            error: 'Output Limit Exceeded',
                            hidden: tc.hidden
                        });
                    }
                });
                proc.stderr.on('data', (data) => stderr += data.toString());
                
                proc.on('close', (code) => {
                    clearTimeout(timer);
                    if (isKilled) return;
                    
                    if (code !== 0) {
                        resolve({
                            id: tc.id,
                            passed: false,
                            input: tc.input,
                            expectedOutput: tc.expectedOutput,
                            actualOutput: stdout,
                            error: `Runtime Error (code ${code})\n${stderr}`,
                            hidden: tc.hidden
                        });
                        return;
                    }
                    
                    const actualNormalized = normalizeOutput(stdout);
                    const expectedNormalized = normalizeOutput(tc.expectedOutput);
                    
                    resolve({
                        id: tc.id,
                        passed: actualNormalized === expectedNormalized,
                        input: tc.input,
                        expectedOutput: tc.expectedOutput,
                        actualOutput: stdout,
                        hidden: tc.hidden
                    });
                });
                
                if (tc.input) {
                    proc.stdin.write(tc.input);
                }
                proc.stdin.end();
            });
            results.push(tcResult);
        }
        
        return {
            status: 'success',
            results
        };
        
    } catch (e: any) {
        return {
            status: 'system_error',
            message: e.message || 'System error occurred'
        };
    } finally {
        // Cleanup
        try { await fs.unlink(cppFile).catch(()=>null); } catch (e) {}
        try { await fs.unlink(exeFile).catch(()=>null); } catch (e) {}
    }
}
