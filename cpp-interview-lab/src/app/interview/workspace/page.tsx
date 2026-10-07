"use client";

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getProblem } from '@/data/levels';
import { CodeEditor } from '@/components/CodeEditor';
import { CompileAndRunResult } from '@/lib/compiler';
import { Clock, ShieldAlert, Play, Check, XCircle, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

function Workspace() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const problemId = searchParams.get('problemId');
    
    const problem = problemId ? getProblem(problemId) : null;
    
    const [code, setCode] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const [runResult, setRunResult] = useState<CompileAndRunResult | null>(null);
    const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
    const [interviewState, setInterviewState] = useState<'in_progress' | 'passed' | 'failed' | 'timeout'>('in_progress');

    useEffect(() => {
        if (problem && code === '') {
            setCode(problem.starterCode);
        }
    }, [problem]);

    useEffect(() => {
        if (interviewState !== 'in_progress') return;
        
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setInterviewState('timeout');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        
        return () => clearInterval(timer);
    }, [interviewState]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    if (!problem) return <div className="p-8 text-white">Problem not found.</div>;

    const handleRun = async (isSubmit: boolean = false) => {
        if (interviewState !== 'in_progress' || isRunning) return;
        
        setIsRunning(true);
        setRunResult(null);
        
        try {
            // In interview mode, Run Code only runs visible test cases.
            // Submit runs all test cases, but we heavily mask the output if it fails.
            const testCasesToRun = isSubmit ? problem.testCases : problem.testCases.filter(tc => !tc.hidden);
            
            const res = await fetch('/api/run', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    code,
                    testCases: testCasesToRun,
                    timeoutMs: 2000
                })
            });
            
            const data: CompileAndRunResult = await res.json();
            
            if (isSubmit) {
                const allPassed = data.status === 'success' && data.results?.every(r => r.passed);
                if (allPassed) {
                    setInterviewState('passed');
                } else {
                    // MASK THE RESULTS! Strict mode.
                    if (data.results) {
                        data.results = data.results.map(r => {
                            if (r.hidden && !r.passed) {
                                return {
                                    ...r,
                                    actualOutput: 'HIDDEN (Strict Mode)',
                                    error: 'Hidden Test Case Failed.'
                                };
                            }
                            return r;
                        });
                    }
                }
            }
            
            setRunResult(data);
        } catch (e) {
            console.error(e);
        } finally {
            setIsRunning(false);
        }
    };

    return (
        <div className="h-screen flex flex-col bg-gray-950 font-sans text-gray-300 overflow-hidden">
            {/* Header */}
            <header className="h-14 border-b border-gray-800 bg-gray-900 flex items-center justify-between px-4 flex-shrink-0">
                <div className="flex items-center gap-4">
                    <button onClick={() => router.push('/interview')} className="text-gray-400 hover:text-white">
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div className="font-bold text-white flex items-center gap-2">
                        <ShieldAlert className="w-5 h-5 text-red-500" />
                        ASSESSMENT MODE
                    </div>
                </div>
                
                <div className={`flex items-center gap-2 font-mono text-xl font-bold ${timeLeft < 300 ? 'text-red-500 animate-pulse' : 'text-gray-200'}`}>
                    <Clock className="w-5 h-5" />
                    {formatTime(timeLeft)}
                </div>
                
                <div className="flex items-center gap-3">
                    <button 
                        onClick={() => handleRun(false)}
                        disabled={isRunning || interviewState !== 'in_progress'}
                        className="px-4 py-1.5 rounded bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold text-sm transition-colors flex items-center gap-2 disabled:opacity-50"
                    >
                        <Play className="w-4 h-4" /> Run Code
                    </button>
                    <button 
                        onClick={() => handleRun(true)}
                        disabled={isRunning || interviewState !== 'in_progress'}
                        className="px-4 py-1.5 rounded bg-red-600 hover:bg-red-500 text-white font-bold text-sm transition-colors flex items-center gap-2 shadow-[0_0_10px_rgba(220,38,38,0.3)] disabled:opacity-50"
                    >
                        <Check className="w-4 h-4" /> Submit Assessment
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex-1 flex overflow-hidden">
                {/* Left Panel: Description & Results */}
                <div className="w-1/2 flex flex-col border-r border-gray-800">
                    <div className="flex-1 overflow-y-auto p-6 bg-gray-900/50 prose prose-invert max-w-none">
                        <h1 className="text-2xl font-bold text-white mb-4">{problem.title}</h1>
                        <ReactMarkdown>{problem.description}</ReactMarkdown>
                        
                        <div className="mt-8 mb-4 font-bold text-white">Examples</div>
                        {problem.examples.map((ex, i) => (
                            <div key={i} className="mb-4 bg-gray-950 p-4 rounded-lg border border-gray-800 font-mono text-sm">
                                <div><span className="text-gray-500">Input:</span><br/>{ex.input}</div>
                                <div className="mt-2"><span className="text-gray-500">Output:</span><br/>{ex.output}</div>
                                {ex.explanation && <div className="mt-2 text-gray-400 font-sans text-xs">Note: {ex.explanation}</div>}
                            </div>
                        ))}
                    </div>

                    {/* Results Panel */}
                    <div className="h-1/3 border-t border-gray-800 bg-gray-900 overflow-y-auto">
                        <div className="p-2 border-b border-gray-800 bg-gray-950/50 font-semibold text-sm text-gray-400 sticky top-0 z-10 flex justify-between">
                            <span>Execution Results</span>
                            {interviewState === 'passed' && <span className="text-emerald-400">ASSESSMENT PASSED</span>}
                            {interviewState === 'timeout' && <span className="text-red-400">TIME EXPIRED</span>}
                        </div>
                        
                        <div className="p-4">
                            {isRunning ? (
                                <div className="text-gray-400 animate-pulse">Running code...</div>
                            ) : !runResult ? (
                                <div className="text-gray-600 italic">Run or Submit your code to see results here.</div>
                            ) : runResult.status === 'compile_error' ? (
                                <div>
                                    <div className="text-red-400 font-bold mb-2 flex items-center gap-2"><XCircle className="w-5 h-5"/> Compilation Error</div>
                                    <pre className="bg-gray-950 text-red-300 p-4 rounded text-sm overflow-x-auto border border-red-900/30">{runResult.message}</pre>
                                </div>
                            ) : runResult.status === 'success' && runResult.results ? (
                                <div className="space-y-4">
                                    {runResult.results.map((r, i) => (
                                        <div key={i} className={`p-4 rounded-lg border ${r.passed ? 'bg-emerald-950/20 border-emerald-900/30' : 'bg-red-950/20 border-red-900/30'}`}>
                                            <div className="font-bold flex items-center gap-2 mb-2">
                                                {r.passed ? <Check className="text-emerald-500 w-4 h-4"/> : <XCircle className="text-red-500 w-4 h-4"/>}
                                                <span className={r.passed ? 'text-emerald-400' : 'text-red-400'}>
                                                    Test Case {i + 1} {r.hidden ? '(Hidden)' : ''}
                                                </span>
                                            </div>
                                            
                                            {!r.passed && r.hidden ? (
                                                <div className="text-red-400/80 text-sm mt-2">
                                                    You failed a hidden test case. In strict mode, the inputs and outputs are hidden. Think about edge cases!
                                                </div>
                                            ) : (
                                                <div className="grid grid-cols-2 gap-4 mt-2">
                                                    <div>
                                                        <div className="text-xs text-gray-500 mb-1">Input</div>
                                                        <pre className="bg-gray-950 p-2 rounded text-xs text-gray-300 overflow-x-auto border border-gray-800">{r.input}</pre>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div>
                                                            <div className="text-xs text-gray-500 mb-1">Expected Output</div>
                                                            <pre className="bg-gray-950 p-2 rounded text-xs text-gray-300 overflow-x-auto border border-gray-800">{r.expectedOutput}</pre>
                                                        </div>
                                                        {!r.passed && (
                                                            <div>
                                                                <div className="text-xs text-gray-500 mb-1">Your Output</div>
                                                                <pre className="bg-red-950/30 p-2 rounded text-xs text-red-300 overflow-x-auto border border-red-900/30">{r.actualOutput}</pre>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>

                {/* Right Panel: Editor */}
                <div className="w-1/2 relative">
                    <CodeEditor 
                        code={code}
                        onChange={setCode}
                        readOnly={interviewState !== 'in_progress'}
                    />
                    
                    {/* Overlay if finished */}
                    {interviewState !== 'in_progress' && (
                        <div className="absolute inset-0 bg-gray-950/80 backdrop-blur-sm flex items-center justify-center z-50">
                            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 shadow-2xl text-center max-w-md w-full">
                                {interviewState === 'passed' && (
                                    <>
                                        <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                                            <Check className="w-10 h-10 text-emerald-400" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-white mb-2">Assessment Passed!</h2>
                                        <p className="text-gray-400 mb-6">You successfully solved this problem under interview conditions.</p>
                                    </>
                                )}
                                {interviewState === 'timeout' && (
                                    <>
                                        <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/30">
                                            <Clock className="w-10 h-10 text-red-400" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-white mb-2">Time Expired</h2>
                                        <p className="text-gray-400 mb-6">You ran out of time. Keep practicing to improve your speed!</p>
                                    </>
                                )}
                                
                                <button 
                                    onClick={() => router.push('/interview')}
                                    className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-xl transition-colors"
                                >
                                    Return to Dashboard
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function WorkspacePage() {
    return (
        <Suspense fallback={<div className="p-8 text-white">Loading Workspace...</div>}>
            <Workspace />
        </Suspense>
    );
}
