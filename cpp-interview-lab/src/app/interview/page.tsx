"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getProgress, getGlobalLanguage, setGlobalLanguage } from '@/lib/progress';
import { getAllProblems } from '@/data/levels';
import { Clock, ShieldAlert, Code2, ArrowLeft, Terminal } from 'lucide-react';

export default function InterviewLauncher() {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const [availableProblems, setAvailableProblems] = useState<string[]>([]);
    const [language, setLanguage] = useState<'cpp' | 'python'>('cpp');

    const updatePool = (lang: 'cpp' | 'python') => {
        const activeProblems = getAllProblems(lang);
        const eligible = activeProblems.filter(p => 
            (p.difficulty === 'medium' || p.difficulty === 'hard') && 
            p.type === 'coding'
        );
        setAvailableProblems(eligible.map(p => p.id));
    };

    useEffect(() => {
        setIsClient(true);
        const lang = getGlobalLanguage();
        setLanguage(lang);
        updatePool(lang);
    }, []);

    const handleLanguageChange = (newLang: 'cpp' | 'python') => {
        setLanguage(newLang);
        setGlobalLanguage(newLang);
        updatePool(newLang);
    };

    const startInterview = () => {
        if (availableProblems.length === 0) {
            alert("No eligible problems found for a mock interview in this track.");
            return;
        }
        
        // Pick a random problem
        const randomIndex = Math.floor(Math.random() * availableProblems.length);
        const selectedId = availableProblems[randomIndex];
        
        router.push(`/interview/workspace?problemId=${selectedId}`);
    };

    if (!isClient) return <div className="min-h-screen bg-gray-950 p-8">Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-950 text-gray-200 p-8 font-sans">
            <div className="max-w-4xl mx-auto space-y-8">
                <header className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-800 pb-6 gap-4">
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => router.push('/')}
                            className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-900"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <div>
                            <h1 className="text-3xl font-extrabold text-white flex items-center gap-3">
                                <ShieldAlert className="w-8 h-8 text-red-500" />
                                Mock Interview Mode
                            </h1>
                            <p className="text-gray-400">Simulate a real HackerRank/LeetCode technical assessment.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 bg-gray-900 border border-gray-700 rounded-lg px-3 py-1.5 self-start sm:self-auto">
                        <span className="text-xs uppercase font-bold text-gray-400">Track:</span>
                        <select 
                            value={language}
                            onChange={(e) => handleLanguageChange(e.target.value as 'cpp' | 'python')}
                            className="bg-transparent text-gray-100 text-sm font-semibold outline-none cursor-pointer"
                        >
                            <option value="cpp" className="bg-gray-900 text-white">C++ ({getAllProblems('cpp').filter(p => (p.difficulty === 'medium' || p.difficulty === 'hard') && p.type === 'coding').length} problems)</option>
                            <option value="python" className="bg-gray-900 text-white">Python 3 ({getAllProblems('python').filter(p => (p.difficulty === 'medium' || p.difficulty === 'hard') && p.type === 'coding').length} problems)</option>
                        </select>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 space-y-6">
                        <h2 className="text-xl font-bold text-white">Assessment Rules ({language === 'python' ? 'Python 3' : 'C++'})</h2>
                        
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <Clock className="w-6 h-6 text-red-400 flex-shrink-0" />
                                <div>
                                    <div className="font-semibold text-gray-200">30 Minute Time Limit</div>
                                    <div className="text-sm text-gray-500">The session will automatically end when time expires.</div>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <ShieldAlert className="w-6 h-6 text-red-400 flex-shrink-0" />
                                <div>
                                    <div className="font-semibold text-gray-200">Strict Mode Testing</div>
                                    <div className="text-sm text-gray-500">Hidden test cases will NOT reveal their inputs or expected outputs if you fail them.</div>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Code2 className="w-6 h-6 text-red-400 flex-shrink-0" />
                                <div>
                                    <div className="font-semibold text-gray-200">No Assistance</div>
                                    <div className="text-sm text-gray-500">Hints, solutions, and pedagogical explanations are completely disabled.</div>
                                </div>
                            </li>
                        </ul>

                        <div className="pt-6 border-t border-gray-800">
                            <button 
                                onClick={startInterview}
                                disabled={availableProblems.length === 0}
                                className="w-full py-4 bg-red-600 hover:bg-red-500 disabled:bg-gray-800 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] text-lg"
                            >
                                Start Assessment ({language === 'python' ? 'Python 3' : 'C++'})
                            </button>
                        </div>
                    </div>

                    <div className="bg-gray-900/30 border border-gray-800/80 rounded-2xl p-8 flex flex-col justify-between">
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <Terminal className="w-5 h-5 text-blue-400" />
                                What to Expect
                            </h2>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                A randomly selected Medium or Hard question from your active <strong>{language === 'python' ? 'Python 3' : 'C++'}</strong> curriculum will be loaded into the strict sandbox environment.
                            </p>
                            <div className="bg-gray-950 p-4 rounded-xl border border-gray-800 text-xs text-gray-400 space-y-2">
                                <div className="flex justify-between">
                                    <span>Curriculum Track:</span>
                                    <span className="font-semibold text-gray-200">{language === 'python' ? 'Python 3' : 'Modern C++'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Available Problem Pool:</span>
                                    <span className="font-semibold text-emerald-400">{availableProblems.length} challenges</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Time Allocation:</span>
                                    <span className="font-semibold text-gray-200">30 minutes</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 text-xs text-gray-500 italic">
                            Tip: Passing the assessment records problem completion and strengthens your green dot daily streak.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
