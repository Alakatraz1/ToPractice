"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getProblem, getLevelForProblem } from '@/data/levels';
import { CodeEditor } from '@/components/CodeEditor';
import { getProgress, saveCode, markProblemComplete, updateProgress, recordAttempt, recordSolutionView, recordHint } from '@/lib/progress';
import { Play, Check, ChevronLeft, ChevronRight, Lightbulb, CheckCircle2, XCircle, AlertCircle, RotateCcw, BrainCircuit } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { CompileAndRunResult } from '@/lib/compiler';

export default function ProblemClient({ problemId }: { problemId: string }) {
    const router = useRouter();
    const problem = getProblem(problemId);
    const level = problem ? getLevelForProblem(problemId) : null;
    
    const [code, setCode] = useState('');
    const [isClient, setIsClient] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const [runResult, setRunResult] = useState<CompileAndRunResult | null>(null);
    const [activeTab, setActiveTab] = useState<'problem' | 'hints' | 'solution'>('problem');
    const [hintIndex, setHintIndex] = useState(-1);
    const [howToThinkExpanded, setHowToThinkExpanded] = useState(false);
    const [solutionUnlocked, setSolutionUnlocked] = useState(false);

    useEffect(() => {
        setIsClient(true);
        if (problem) {
            const progress = getProgress();
            setCode(progress.savedCode[problem.id] || problem.starterCode);
            updateProgress({ currentProblem: problem.id });
            
            if (progress.solutionsViewed.includes(problem.id)) {
                setSolutionUnlocked(true);
            }
            if (progress.hintsUsed[problem.id] !== undefined) {
                setHintIndex(progress.hintsUsed[problem.id] - 1);
            }
        }
    }, [problem]);

    const handleCodeChange = (newCode: string) => {
        setCode(newCode);
        saveCode(problemId, newCode);
    };

    const handleRun = async (isSubmit: boolean = false) => {
        if (!problem || isRunning) return;
        
        setIsRunning(true);
        setRunResult(null);
        
        try {
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
            setRunResult(data);
            
            if (isSubmit) {
                const allPassed = data.status === 'success' && data.results?.every(r => r.passed);
                recordAttempt(problemId, !allPassed);
                if (allPassed) {
                    markProblemComplete(problemId);
                }
            }
            
        } catch (e) {
            console.error("Run error", e);
            setRunResult({ status: 'system_error', message: 'Failed to connect to execution engine' });
        } finally {
            setIsRunning(false);
        }
    };

    const revealHint = (index: number) => {
        setHintIndex(index);
        recordHint(problemId, index);
    };

    const unlockSolution = () => {
        setSolutionUnlocked(true);
        recordSolutionView(problemId);
    };

    const resetCode = () => {
        if (problem && confirm("Reset your code to the starter template?")) {
            setCode(problem.starterCode);
            saveCode(problemId, problem.starterCode);
        }
    };

    if (!isClient) return <div className="min-h-screen bg-gray-950 text-white p-8">Loading...</div>;
    if (!problem) return <div className="min-h-screen bg-gray-950 text-white p-8">Problem not found.</div>;

    const allPassed = runResult?.status === 'success' && runResult.results?.every(r => r.passed);

    return (
        <div className="flex flex-col h-screen bg-gray-950 text-gray-200 overflow-hidden font-sans">
            {/* Header */}
            <header className="h-14 border-b border-gray-800 bg-gray-900 flex items-center justify-between px-4 shrink-0">
                <div className="flex items-center gap-4">
                    <button onClick={() => router.push('/')} className="text-gray-400 hover:text-white flex items-center gap-1 text-sm font-medium">
                        <ChevronLeft className="w-4 h-4" /> Dashboard
                    </button>
                    <div className="h-4 w-px bg-gray-700"></div>
                    <span className="font-semibold text-gray-200">
                        <span className="text-gray-500 mr-2">{level?.title} •</span> 
                        {problem.title}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full uppercase tracking-wider font-bold ${
                        problem.difficulty === 'beginner' ? 'bg-emerald-500/10 text-emerald-400' :
                        problem.difficulty === 'easy' ? 'bg-green-500/10 text-green-400' :
                        problem.difficulty === 'medium' ? 'bg-yellow-500/10 text-yellow-400' :
                        'bg-red-500/10 text-red-400'
                    }`}>
                        {problem.difficulty}
                    </span>
                </div>
                
                <div className="flex items-center gap-3">
                    <button 
                        onClick={() => handleRun(false)}
                        disabled={isRunning}
                        className="flex items-center gap-2 px-4 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-md font-medium text-sm transition-colors disabled:opacity-50"
                    >
                        <Play className="w-4 h-4" /> {isRunning ? 'Running...' : 'Run Code'}
                    </button>
                    <button 
                        onClick={() => handleRun(true)}
                        disabled={isRunning}
                        className="flex items-center gap-2 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md font-medium text-sm transition-colors disabled:opacity-50"
                    >
                        <Check className="w-4 h-4" /> Submit
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex flex-1 overflow-hidden">
                
                {/* Left Panel - Description & Results */}
                <div className="w-1/2 flex flex-col border-r border-gray-800 bg-gray-900/50 min-w-[300px]">
                    
                    {/* Tabs */}
                    <div className="flex border-b border-gray-800 px-2 pt-2 bg-gray-900 shrink-0">
                        <button 
                            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === 'problem' ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-400 hover:text-gray-200'}`}
                            onClick={() => setActiveTab('problem')}
                        >
                            Problem
                        </button>
                        <button 
                            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === 'hints' ? 'border-amber-500 text-amber-400' : 'border-transparent text-gray-400 hover:text-gray-200'}`}
                            onClick={() => setActiveTab('hints')}
                        >
                            Hints
                        </button>
                        <button 
                            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === 'solution' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-gray-400 hover:text-gray-200'}`}
                            onClick={() => setActiveTab('solution')}
                        >
                            Solution
                        </button>
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto p-6 max-w-none">
                        {activeTab === 'problem' && (
                            <div className="space-y-8">
                                <div>
                                    <h1 className="text-2xl font-bold mb-4">{problem.title}</h1>
                                    
                                    <div className="flex gap-2 mb-6 flex-wrap">
                                        {problem.concepts.map(c => (
                                            <span key={c} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md">
                                                {c}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <div className="prose prose-invert prose-sm max-w-none text-gray-300 leading-relaxed text-base">
                                        <ReactMarkdown>{problem.description}</ReactMarkdown>
                                    </div>
                                </div>
                                
                                {problem.howToThink && problem.howToThink.length > 0 && (
                                    <div className="border border-gray-700 bg-gray-800/30 rounded-lg overflow-hidden">
                                        <button 
                                            onClick={() => setHowToThinkExpanded(!howToThinkExpanded)}
                                            className="w-full flex items-center justify-between p-4 bg-gray-800 hover:bg-gray-700 transition-colors"
                                        >
                                            <div className="font-semibold flex items-center gap-2">
                                                <BrainCircuit className="w-5 h-5 text-purple-400" />
                                                How to Think About It
                                            </div>
                                            <ChevronRight className={`w-5 h-5 transition-transform ${howToThinkExpanded ? 'rotate-90' : ''}`} />
                                        </button>
                                        {howToThinkExpanded && (
                                            <div className="p-4 text-sm text-gray-300 space-y-2">
                                                <p className="text-xs text-gray-400 mb-4 uppercase tracking-wider font-semibold">Guided Thinking Framework</p>
                                                <ol className="list-decimal pl-4 space-y-2">
                                                    {problem.howToThink.map((step, i) => (
                                                        <li key={i}>{step}</li>
                                                    ))}
                                                </ol>
                                            </div>
                                        )}
                                    </div>
                                )}
                                
                                <div>
                                    {problem.examples.map((ex, i) => (
                                        <div key={i} className="mb-6">
                                            <h3 className="font-semibold text-gray-200 mb-2">Example {i + 1}:</h3>
                                            <div className="bg-gray-950 p-4 rounded-lg border border-gray-800 font-mono text-sm space-y-3">
                                                {ex.input && <div><span className="text-gray-500 select-none">Input: </span><br/>{ex.input}</div>}
                                                <div><span className="text-gray-500 select-none">Output: </span><br/>{ex.output}</div>
                                                {ex.explanation && <div className="text-gray-400 font-sans mt-2">{ex.explanation}</div>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="bg-blue-900/10 border border-blue-900/30 rounded-lg p-4">
                                    <h3 className="font-semibold text-blue-400 mb-2 text-sm uppercase tracking-wider">Why this matters</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">{problem.whyThisMatters}</p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'hints' && (
                            <div className="space-y-4">
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Lightbulb className="w-5 h-5 text-amber-400" /> Need Help?
                                </h2>
                                {problem.hints.map((hint, i) => (
                                    <div key={i} className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
                                        {i <= hintIndex ? (
                                            <div>
                                                <div className="font-semibold text-amber-400 mb-2">Hint {i + 1}</div>
                                                <div className="text-gray-300 prose prose-invert prose-sm"><ReactMarkdown>{hint}</ReactMarkdown></div>
                                            </div>
                                        ) : (
                                            <button 
                                                onClick={() => revealHint(i)}
                                                disabled={i > hintIndex + 1}
                                                className={`px-4 py-2 rounded-md font-medium text-sm transition-colors ${i === hintIndex + 1 ? 'bg-gray-800 hover:bg-gray-700 text-gray-200' : 'bg-gray-900 text-gray-600 cursor-not-allowed'}`}
                                            >
                                                Reveal Hint {i + 1}
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'solution' && (
                            <div className="space-y-6">
                                {!solutionUnlocked ? (
                                    <div className="text-center py-12 px-4 border border-gray-800 rounded-xl bg-gray-900/50">
                                        <div className="w-16 h-16 bg-amber-500/10 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Lightbulb className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Are you sure?</h3>
                                        <p className="text-gray-400 mb-8 max-w-sm mx-auto text-sm">
                                            Try using hints first. Viewing the solution will affect your mastery score slightly, but learning is always the priority!
                                        </p>
                                        <div className="flex gap-4 justify-center">
                                            <button 
                                                onClick={() => setActiveTab('hints')}
                                                className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors"
                                            >
                                                Use Hints Instead
                                            </button>
                                            <button 
                                                onClick={unlockSolution}
                                                className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-colors"
                                            >
                                                Show Answer
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-8 animate-in fade-in duration-500">
                                        <div className="bg-emerald-900/10 border border-emerald-900/30 rounded-lg p-6">
                                            <h3 className="text-lg font-semibold text-emerald-400 mb-3">Approach</h3>
                                            <div className="text-gray-300 prose prose-invert prose-sm"><ReactMarkdown>{problem.approach}</ReactMarkdown></div>
                                        </div>
                                        
                                        {problem.pseudocode && (
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-200 mb-3">Pseudocode</h3>
                                                <pre className="bg-gray-950 p-4 rounded-lg border border-gray-800 text-sm font-mono text-gray-400 whitespace-pre-wrap">
                                                    {problem.pseudocode}
                                                </pre>
                                            </div>
                                        )}
                                        
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-200 mb-3">C++ Solution</h3>
                                            <pre className="bg-gray-950 p-4 rounded-lg border border-gray-800 overflow-x-auto text-sm font-mono text-gray-300">
                                                <code>{problem.solution}</code>
                                            </pre>
                                            
                                            <div className="mt-4 flex justify-between items-center bg-gray-900 p-4 rounded-lg border border-gray-800">
                                                <span className="text-sm text-gray-400">Now try writing it yourself!</span>
                                                <button 
                                                    onClick={resetCode}
                                                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors"
                                                >
                                                    <RotateCcw className="w-4 h-4" /> Reset Editor
                                                </button>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-200 mb-3">Why this works</h3>
                                            <div className="text-gray-300 prose prose-invert prose-sm"><ReactMarkdown>{problem.explanation}</ReactMarkdown></div>
                                        </div>
                                        
                                        <div className="flex gap-4">
                                            <div className="flex-1 bg-gray-900 border border-gray-800 p-4 rounded-lg">
                                                <div className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-1">Time Complexity</div>
                                                <div className="font-mono text-blue-400">{problem.timeComplexity}</div>
                                            </div>
                                            <div className="flex-1 bg-gray-900 border border-gray-800 p-4 rounded-lg">
                                                <div className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-1">Space Complexity</div>
                                                <div className="font-mono text-purple-400">{problem.spaceComplexity}</div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Results Panel */}
                    {runResult && (
                        <div className="h-[35%] min-h-[250px] border-t border-gray-800 bg-gray-950 flex flex-col shadow-[0_-10px_30px_rgba(0,0,0,0.5)] z-10 shrink-0">
                            <div className="sticky top-0 bg-gray-900 px-4 py-2 text-sm font-medium border-b border-gray-800 flex justify-between items-center z-20">
                                <span className={
                                    runResult.status === 'success' && allPassed ? 'text-emerald-400 flex items-center gap-2' :
                                    runResult.status === 'success' ? 'text-red-400 flex items-center gap-2' :
                                    'text-yellow-400 flex items-center gap-2'
                                }>
                                    {runResult.status === 'success' && allPassed && <CheckCircle2 className="w-4 h-4" />}
                                    {runResult.status === 'success' && !allPassed && <XCircle className="w-4 h-4" />}
                                    {runResult.status !== 'success' && <AlertCircle className="w-4 h-4" />}
                                    
                                    {runResult.status === 'success' && allPassed ? 'Accepted' :
                                     runResult.status === 'success' ? 'Wrong Answer' : 
                                     runResult.status === 'compile_error' ? 'Compilation Error' : 'System Error'}
                                </span>
                                
                                {runResult.status === 'success' && (
                                    <span className="text-gray-400">
                                        {runResult.results?.filter(r => r.passed).length} / {runResult.results?.length} tests passed
                                    </span>
                                )}
                            </div>
                            
                            <div className="p-4 text-sm font-mono flex-1 overflow-y-auto">
                                {runResult.status === 'compile_error' && (
                                    <div>
                                        <div className="bg-red-950/30 border border-red-900/50 p-4 rounded-lg mb-4 font-sans text-red-200">
                                            <h4 className="font-bold flex items-center gap-2 mb-2">
                                                <AlertCircle className="w-4 h-4" /> Compilation Error
                                            </h4>
                                            <p className="text-sm opacity-90">
                                                The C++ compiler could not understand your code. Check for missing semicolons, unmatched brackets, or misspelled keywords.
                                            </p>
                                        </div>
                                        <div className="text-gray-400 text-xs mb-1 uppercase tracking-wider font-sans font-bold">Raw Compiler Output</div>
                                        <div className="text-red-400 whitespace-pre-wrap bg-gray-900 p-3 rounded">{runResult.compilerOutput}</div>
                                    </div>
                                )}
                                {runResult.status === 'success' && allPassed && (
                                    <div className="mb-6 bg-emerald-950/20 border border-emerald-900/50 p-5 rounded-xl font-sans">
                                        <h3 className="text-lg font-bold text-emerald-400 mb-3 flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5" /> What You Learned
                                        </h3>
                                        <ul className="space-y-2 mb-4">
                                            {problem.learningObjectives.map((obj, i) => (
                                                <li key={i} className="flex items-start gap-2 text-emerald-200/90 text-sm">
                                                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                                    <span>{obj}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        
                                        {problem.howToThink && problem.howToThink.length > 0 && (
                                            <div className="mt-4 pt-4 border-t border-emerald-900/50">
                                                <h4 className="text-sm uppercase tracking-wider font-bold text-emerald-500/70 mb-2">Reusable Pattern</h4>
                                                <p className="text-sm text-emerald-100/70 leading-relaxed italic">
                                                    "{problem.approach}"
                                                </p>
                                            </div>
                                        )}
                                        
                                        <div className="mt-6 flex justify-end">
                                            <button 
                                                onClick={() => router.push('/')}
                                                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg text-sm transition-colors flex items-center gap-2"
                                            >
                                                Return to Dashboard <ChevronRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                )}
                                
                                {runResult.status === 'success' && runResult.results?.map((tc, idx) => (
                                    <div key={tc.id} className="mb-4 last:mb-0 bg-gray-900/50 p-3 rounded-lg border border-gray-800/50">
                                        <div className={`font-bold mb-2 flex items-center gap-2 ${tc.passed ? 'text-emerald-500' : 'text-red-500'}`}>
                                            {tc.hidden ? 'Hidden Test Case' : `Test Case ${idx + 1}`} {tc.passed ? 'Passed' : 'Failed'}
                                        </div>
                                        
                                        {!tc.passed && !tc.hidden && (
                                            <div className="space-y-3 mt-3">
                                                {tc.input && (
                                                    <div>
                                                        <div className="text-gray-500 text-xs uppercase mb-1 font-sans font-semibold tracking-wider">Input</div>
                                                        <div className="bg-gray-950 p-2 rounded text-gray-300">{tc.input}</div>
                                                    </div>
                                                )}
                                                
                                                <div className="flex gap-4">
                                                    <div className="flex-1">
                                                        <div className="text-gray-500 text-xs uppercase mb-1 font-sans font-semibold tracking-wider">Expected</div>
                                                        <div className="bg-emerald-950/30 p-2 rounded text-emerald-400 border border-emerald-900/30 whitespace-pre-wrap">{tc.expectedOutput}</div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="text-gray-500 text-xs uppercase mb-1 font-sans font-semibold tracking-wider">Actual Output</div>
                                                        <div className="bg-red-950/30 p-2 rounded text-red-400 border border-red-900/30 whitespace-pre-wrap">{tc.actualOutput || '<empty>'}</div>
                                                    </div>
                                                </div>
                                                
                                                {tc.error && (
                                                    <div className="mt-2 text-red-400 text-xs bg-red-950/50 p-2 rounded font-sans">
                                                        <strong>Runtime Error:</strong> {tc.error.includes('Time Limit') ? 'Your code took too long to execute. Check for infinite loops.' : tc.error}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                        {!tc.passed && tc.hidden && (
                                            <div className="mt-3 text-red-400/80 text-sm font-sans">
                                                This test case is hidden to ensure your solution handles edge cases and doesn't just hardcode answers.
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                
                {/* Right Panel - Code Editor */}
                <div className="w-1/2 flex flex-col bg-gray-950 relative min-w-[300px]">
                    <CodeEditor 
                        code={code} 
                        onChange={handleCodeChange} 
                        onRun={() => handleRun(false)}
                    />
                </div>
                
            </div>
        </div>
    );
}
