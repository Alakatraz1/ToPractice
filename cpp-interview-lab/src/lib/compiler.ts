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

const tempDir = os.tmpdir();

function normalizeOutput(output: string): string {
  return output.replace(/\r\n/g, '\n')
               .split('\n')
               .map(line => line.trimEnd())
               .join('\n')
               .trim();
}

const pythonCmd = os.platform() === 'win32' ? 'python' : 'python3';

export async function checkCompilerStatus(): Promise<{available: boolean, version: string, pythonAvailable: boolean, pythonVersion: string}> {
    return new Promise(async (resolve) => {
        let gccVersion = 'Unknown';
        let gccAvailable = false;
        let pyVersion = 'Unknown';
        let pyAvailable = false;
        
        try {
            const gcc = spawn('g++', ['--version']);
            let stdout = '';
            gcc.stdout.on('data', d => stdout+=d);
            await new Promise(r => gcc.on('close', r));
            const m = stdout.match(/g\+\+\s+\(.*\)\s+([0-9\.]+)/);
            if (m) { gccAvailable = true; gccVersion = m[1]; }
        } catch(e) {}
        
        try {
            const py = spawn(pythonCmd, ['--version']);
            let stdout = '';
            py.stdout.on('data', d => stdout+=d);
            await new Promise(r => py.on('close', r));
            const m = stdout.match(/Python\s+([0-9\.]+)/);
            if (m) { pyAvailable = true; pyVersion = m[1]; }
        } catch(e) {}

        resolve({
            available: gccAvailable,
            version: gccVersion,
            pythonAvailable: pyAvailable,
            pythonVersion: pyVersion
        });
    });
}

export async function compileAndRunCode(code: string, language: string, testCases: TestCase[], timeoutMs: number = 2000): Promise<CompileAndRunResult> {
    const sessionId = crypto.randomUUID();
    const isPython = language === 'python';
    
    const sourceFile = path.join(tempDir, `code_${sessionId}.${isPython ? 'py' : 'cpp'}`);
    const exeFile = path.join(tempDir, `exe_${sessionId}`);
    
    try {
        await fs.writeFile(sourceFile, code);
        
        if (!isPython) {
            const compileResult = await new Promise<{code: number | null, stderr: string}>((resolve) => {
                const proc = spawn('g++', ['-std=c++17', '-O2', sourceFile, '-o', exeFile]);
                let stderr = '';
                proc.stderr.on('data', (data) => stderr += data.toString());
                
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
        }
        
        const results: TestCaseResult[] = [];
        
        for (const tc of testCases) {
            const tcResult = await new Promise<TestCaseResult>((resolve) => {
                const proc = isPython ? spawn(pythonCmd, [sourceFile]) : spawn(exeFile);
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
                
                let outputSize = 0;
                const MAX_OUTPUT = 1024 * 1024;
                
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
        try { await fs.unlink(sourceFile).catch(()=>null); } catch (e) {}
        try { await fs.unlink(exeFile).catch(()=>null); } catch (e) {}
    }
}
