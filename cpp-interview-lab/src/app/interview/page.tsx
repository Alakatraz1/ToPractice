"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getProgress } from '@/lib/progress';
import { allProblems, levels } from '@/data/levels';
import { Clock, ShieldAlert, Code2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function InterviewLauncher() {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const [availableProblems, setAvailableProblems] = useState<string[]>([]);

    useEffect(() => {
        setIsClient(true);
        const progress = getProgress();
        
        // Find problems in levels the user has reached
        // We'll approximate this by finding the max level ID in their completed problems,
        // or just use all problems if they have unlocked everything.
        // For simplicity, let's just pick any problem from Level 3 to Level 8 that is medium/hard.
        
        const eligible = allProblems.filter(p => 
            (p.difficulty === 'medium' || p.difficulty === 'hard') && 
            p.type === 'coding' &&
            ['level-03', 'level-04', 'level-05', 'level-06', 'level-07', 'level-08'].includes(p.levelId)
        );
        
        setAvailableProblems(eligible.map(p => p.id));
    }, []);

    const startInterview = () => {
        if (availableProblems.length === 0) {
            alert("No eligible problems found for a mock interview.");
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
                <header className="flex items-center gap-4 border-b border-gray-800 pb-6">
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
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 space-y-6">
                        <h2 className="text-xl font-bold text-white">Interview Rules</h2>
                        
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
                                Start Assessment
                            </button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-blue-950/20 border border-blue-900/50 rounded-2xl p-6">
                            <h3 className="font-bold text-blue-400 mb-2">Why practice this way?</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                In real technical interviews at companies like IBM, you will face an environment similar to HackerRank. You will not receive helpful hints, and you will not see the hidden test cases that evaluate your code's edge cases and performance.
                            </p>
                            <p className="text-sm text-gray-400 leading-relaxed mt-4">
                                This mode trains your ability to mentally test edge cases and write robust code on the first try under time pressure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
