"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProgress, getWeakConcepts, isLevelUnlocked, getGlobalLanguage, setGlobalLanguage, resetProgress } from '@/lib/progress';
import { getLevels, getAllProblems, getProblem } from '@/data/levels';
import { UserProgress } from '@/data/types';
import { Code2, Trophy, Brain, Target, Lock, Play, ArrowRight, Activity, BookOpen, AlertCircle, CheckCircle2, ShieldAlert, Zap, Terminal } from 'lucide-react';

export default function Home() {
    const router = useRouter();
    const [progress, setProgress] = useState<UserProgress | null>(null);
    const [isClient, setIsClient] = useState(false);
    const [language, setLanguage] = useState<'cpp' | 'python'>('cpp');

    useEffect(() => {
        setIsClient(true);
        const currentLang = getGlobalLanguage();
        setLanguage(currentLang);
        setProgress(getProgress(currentLang));
        
        const handleLangChange = () => {
            const updatedLang = getGlobalLanguage();
            setLanguage(updatedLang);
            setProgress(getProgress(updatedLang));
        };
        window.addEventListener('languageChange', handleLangChange);
        return () => window.removeEventListener('languageChange', handleLangChange);
    }, []);

    const handleLanguageSwitch = (newLang: 'cpp' | 'python') => {
        setLanguage(newLang);
        setGlobalLanguage(newLang);
        setProgress(getProgress(newLang));
    };

    if (!isClient || !progress) {
        return <div className="min-h-screen bg-gray-950 text-white p-8">Loading...</div>;
    }

    const activeLevels = getLevels(language);
    const activeProblems = getAllProblems(language);

    const totalProblems = activeProblems.length;
    // Filter completed problems to only count ones matching current language
    const currentCompleted = progress.completedProblems.filter(id => 
        language === 'python' ? id.startsWith('py-') : !id.startsWith('py-')
    );
    const completedCount = currentCompleted.length;
    const completionPercentage = totalProblems > 0 ? Math.round((completedCount / totalProblems) * 100) : 0;
    
    // Find next problem to solve in the active curriculum
    let nextProblemId = progress.currentProblem;
    // Verify nextProblemId belongs to current language
    const isProblemInCurrentLang = activeProblems.some(p => p.id === nextProblemId);
    if (!isProblemInCurrentLang) {
        nextProblemId = activeProblems[0]?.id || (language === 'python' ? 'py-prob-01-01' : 'prob-01-01');
    }
    // If current is completed, find first uncompleted problem in current curriculum
    if (progress.completedProblems.includes(nextProblemId)) {
        const next = activeProblems.find(p => !progress.completedProblems.includes(p.id));
        if (next) {
            nextProblemId = next.id;
        }
    }
    const nextProblemObj = activeProblems.find(p => p.id === nextProblemId) || activeProblems[0];
    const nextLevelObj = nextProblemObj ? activeLevels.find(l => l.id === nextProblemObj.levelId) : activeLevels[0];

    const weakConcepts = getWeakConcepts(language).slice(0, 3);
    const allMasteredConcepts = Object.entries(progress.mastery).sort((a, b) => b[1] - a[1]);

    return (
        <div className="min-h-screen bg-gray-950 text-gray-200 p-8 font-sans">
            <div className="max-w-6xl mx-auto space-y-12">
                
                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between md:items-end border-b border-gray-800 pb-6 gap-4">
                    <div>
                        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-2 flex items-center gap-3">
                            Interview Lab
                            <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700 flex items-center gap-2">
                                <Terminal className="w-3 h-3 text-emerald-400" />
                                {language === 'cpp' ? 'C++ Curriculum' : 'Python 3 Curriculum'}
                            </span>
                        </h1>
                        <p className="text-gray-400">
                            {language === 'cpp' 
                                ? 'Dedicated 27-level C++ curriculum covering STL, memory, pointers, and interview algorithms.'
                                : 'Dedicated 27-level Python curriculum covering idiomatic data structures, collections, and algorithms.'}
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-2 bg-gray-900 border border-gray-700 rounded-lg px-3 py-1.5 shadow-sm">
                            <span className="text-xs uppercase font-bold text-gray-400">Track:</span>
                            <select 
                                value={language}
                                onChange={(e) => handleLanguageSwitch(e.target.value as 'cpp' | 'python')}
                                className="bg-transparent text-gray-100 text-sm font-semibold outline-none cursor-pointer"
                            >
                                <option value="cpp" className="bg-gray-900 text-white">C++ (27 Levels)</option>
                                <option value="python" className="bg-gray-900 text-white">Python 3 (27 Levels)</option>
                            </select>
                        </div>
                        
                        <div className="flex items-center gap-2 text-emerald-400 bg-emerald-950/30 px-4 py-2 rounded-lg border border-emerald-900/50">
                            <Activity className="w-4 h-4" />
                            <span className="font-semibold text-sm">{completedCount} of {totalProblems} solved</span>
                        </div>
                        <button 
                            onClick={() => {
                                if (confirm(`This will permanently reset your ${language === 'cpp' ? 'C++' : 'Python'} progress.\n\nAre you sure you want to proceed?`)) {
                                    resetProgress(language);
                                }
                            }}
                            className="text-xs px-3 py-2 bg-red-950/30 text-red-400 hover:bg-red-900/40 border border-red-900/40 rounded-lg transition-colors font-medium"
                        >
                            Reset {language === 'cpp' ? 'C++' : 'Python'}
                        </button>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left Column: Continue Learning & Mastery */}
                    <div className="lg:col-span-1 space-y-8">
                        
                        {/* Last-Minute Prep CTA */}
                        <div className="bg-gradient-to-br from-amber-900/40 to-red-900/40 border border-amber-900/50 rounded-2xl p-6 shadow-[0_0_30px_rgba(217,119,6,0.15)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                            
                            <h2 className="text-xl font-bold flex items-center gap-2 mb-2 text-white">
                                <Zap className="w-5 h-5 text-amber-400" />
                                Interview Tomorrow?
                            </h2>
                            <p className="text-sm text-amber-200/70 mb-6">Access high-yield cheat sheets, must-solve problems, and common mistakes.</p>
                            
                            <button 
                                onClick={() => router.push('/last-minute')}
                                className="w-full flex items-center justify-center gap-2 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.5)]"
                            >
                                Start Last-Minute Prep <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Continue Learning */}
                        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-900/50 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                            
                            <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
                                <Target className="w-5 h-5 text-blue-400" />
                                Continue Learning ({language === 'cpp' ? 'C++' : 'Python'})
                            </h2>
                            
                            {nextProblemObj && nextLevelObj ? (
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-1">
                                            Level {nextLevelObj.number} • {nextLevelObj.title}
                                        </div>
                                        <div className="text-2xl font-bold text-white mb-2">{nextProblemObj.title}</div>
                                        <div className="flex gap-2 mb-6 flex-wrap">
                                            {nextProblemObj.concepts.slice(0, 3).map(c => (
                                                <span key={c} className="text-xs bg-gray-900/80 text-gray-400 px-2 py-1 rounded border border-gray-800">
                                                    {c}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => router.push(`/problems/${nextProblemObj.id}`)}
                                        className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                                    >
                                        <Play className="w-5 h-5 fill-current" /> Continue to Problem
                                    </button>
                                </div>
                            ) : (
                                <div className="text-emerald-400 font-semibold">You have completed all available problems in this track!</div>
                            )}
                        </div>

                        {/* Overall Progress */}
                        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                            <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
                                <Trophy className="w-5 h-5 text-amber-400" />
                                Track Progress ({language === 'cpp' ? 'C++' : 'Python'})
                            </h2>
                            <div className="flex justify-between text-sm mb-2 font-medium">
                                <span className="text-gray-400">Curriculum Completion</span>
                                <span className="text-emerald-400">{completionPercentage}% ({completedCount}/{totalProblems})</span>
                            </div>
                            <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                                <div 
                                    className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-3 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all duration-1000" 
                                    style={{ width: `${Math.max(completionPercentage, 2)}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Concept Mastery */}
                        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                            <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
                                <Brain className="w-5 h-5 text-purple-400" />
                                Concept Mastery
                            </h2>
                            
                            {allMasteredConcepts.length === 0 ? (
                                <div className="text-gray-500 text-sm italic">Solve problems in this track to build your skill profile.</div>
                            ) : (
                                <div className="space-y-4">
                                    {allMasteredConcepts.slice(0, 5).map(([concept, score]) => (
                                        <div key={concept}>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-gray-300 capitalize">{concept}</span>
                                                <span className={score >= 80 ? 'text-emerald-400' : score >= 50 ? 'text-amber-400' : 'text-red-400'}>
                                                    {score}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-gray-800 rounded-full h-2">
                                                <div 
                                                    className={`h-2 rounded-full ${score >= 80 ? 'bg-emerald-500' : score >= 50 ? 'bg-amber-500' : 'bg-red-500'}`}
                                                    style={{ width: `${Math.max(score, 5)}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Recommended Review */}
                        {weakConcepts.length > 0 && (
                            <div className="bg-amber-950/20 border border-amber-900/50 rounded-2xl p-6">
                                <h2 className="text-xl font-bold flex items-center gap-2 mb-4 text-amber-500">
                                    <AlertCircle className="w-5 h-5" />
                                    Recommended Review
                                </h2>
                                <p className="text-sm text-amber-200/70 mb-4">You have low mastery in the following concepts. Consider reviewing them.</p>
                                <div className="flex flex-wrap gap-2">
                                    {weakConcepts.map(c => (
                                        <span key={c} className="bg-amber-900/40 text-amber-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-amber-800/50">
                                            {c}
                                        </span>
                                    ))}
                                </div>
                                <button 
                                    onClick={() => router.push('/review')}
                                    className="mt-6 w-full py-2 bg-amber-600/20 hover:bg-amber-600/30 text-amber-400 rounded-lg font-semibold text-sm transition-colors border border-amber-500/20"
                                >
                                    Start Review Session
                                </button>
                            </div>
                        )}

                    </div>

                    {/* Right Column: Curriculum Roadmap */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* Mock Interview Callout */}
                        <div className="bg-red-950/20 border border-red-900/50 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                            <div>
                                <h2 className="text-xl font-bold flex items-center gap-2 mb-2 text-red-400">
                                    <ShieldAlert className="w-5 h-5" />
                                    Mock Assessment Mode
                                </h2>
                                <p className="text-gray-400 text-sm max-w-lg">
                                    Solve real technical interview problems under a strict 30-minute timer with hidden test evaluation.
                                </p>
                            </div>
                            <button 
                                onClick={() => router.push('/interview')}
                                className="whitespace-nowrap px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(220,38,38,0.2)]"
                            >
                                Start Assessment
                            </button>
                        </div>

                        <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 h-full">
                            <div className="flex items-center justify-between mb-8 border-b border-gray-800 pb-4">
                                <h2 className="text-2xl font-bold flex items-center gap-3">
                                    <BookOpen className="w-6 h-6 text-blue-400" />
                                    {language === 'cpp' ? 'C++ Curriculum Roadmap' : 'Python Curriculum Roadmap'}
                                </h2>
                                <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
                                    {activeLevels.length} Levels • {totalProblems} Problems
                                </span>
                            </div>

                            <div className="space-y-6">
                                {activeLevels.map((level) => {
                                    const unlocked = isLevelUnlocked(level.id);
                                    const levelProblems = activeProblems.filter(p => p.levelId === level.id);
                                    const completedInLevel = levelProblems.filter(p => progress.completedProblems.includes(p.id)).length;
                                    const isCompleted = levelProblems.length > 0 && completedInLevel === levelProblems.length;

                                    return (
                                        <div 
                                            key={level.id} 
                                            className={`p-6 rounded-xl border transition-all ${
                                                !unlocked ? 'bg-gray-950/50 border-gray-800 opacity-60' : 
                                                isCompleted ? 'bg-emerald-950/20 border-emerald-900/50 shadow-[0_0_15px_rgba(16,185,129,0.05)]' : 
                                                'bg-gray-800/40 border-blue-900/50 hover:bg-gray-800/60'
                                            }`}
                                        >
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className={`text-sm font-bold uppercase tracking-widest ${isCompleted ? 'text-emerald-500' : 'text-blue-500'}`}>
                                                            Level {level.number}
                                                        </span>
                                                        {isCompleted && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                                                        {!unlocked && <Lock className="w-4 h-4 text-gray-500" />}
                                                    </div>
                                                    <h3 className={`text-xl font-bold mb-2 ${!unlocked ? 'text-gray-400' : 'text-gray-100'}`}>
                                                        {level.title}
                                                    </h3>
                                                    <p className="text-gray-400 text-sm mb-4 max-w-2xl">{level.description}</p>
                                                    
                                                    {unlocked && (
                                                        <div className="flex items-center gap-4 text-sm font-medium">
                                                            <div className="text-gray-400">
                                                                <span className={completedInLevel > 0 ? 'text-emerald-400 font-bold' : ''}>{completedInLevel}</span> / {levelProblems.length} Problems
                                                            </div>
                                                            <div className="w-48 bg-gray-900 rounded-full h-2 overflow-hidden border border-gray-800">
                                                                <div 
                                                                    className="bg-emerald-500 h-2 rounded-full transition-all" 
                                                                    style={{ width: `${(completedInLevel / Math.max(levelProblems.length, 1)) * 100}%` }}
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                
                                                {unlocked && (
                                                    <button 
                                                        onClick={() => {
                                                            const firstUncompleted = levelProblems.find(p => !progress.completedProblems.includes(p.id));
                                                            const target = firstUncompleted || levelProblems[0];
                                                            if (target) router.push(`/problems/${target.id}`);
                                                        }}
                                                        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 mt-2"
                                                    >
                                                        {isCompleted ? 'Review' : 'Start'} <ArrowRight className="w-4 h-4" />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
