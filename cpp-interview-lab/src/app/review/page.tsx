"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getWeakConcepts, getProgress, getGlobalLanguage, setGlobalLanguage } from '@/lib/progress';
import { getAllProblems } from '@/data/levels';
import { Problem } from '@/data/types';
import { ArrowLeft, Brain, Code2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function ReviewPage() {
    const router = useRouter();
    const [reviewSession, setReviewSession] = useState<Problem[]>([]);
    const [isClient, setIsClient] = useState(false);
    const [lang, setLang] = useState<'cpp' | 'python'>('cpp');

    const generateSession = (language: 'cpp' | 'python') => {
        const weakConcepts = getWeakConcepts(language);
        const progress = getProgress(language);
        const pool = getAllProblems(language);
        
        const session: Problem[] = [];
        
        // Priority 1: Completed problems targeting weak concepts (true review)
        if (weakConcepts.length > 0) {
            for (const p of pool) {
                if (progress.completedProblems.includes(p.id) && p.concepts.some(c => weakConcepts.includes(c))) {
                    if (!session.find(s => s.id === p.id)) {
                        session.push(p);
                    }
                }
            }
        }

        // Priority 2: Problems the user has attempted a lot but hasn't completed
        for (const p of pool) {
            if (!progress.completedProblems.includes(p.id) && (progress.attempts[p.id] || 0) > 2) {
                if (!session.find(s => s.id === p.id)) {
                    session.push(p);
                }
            }
        }
        
        // Priority 3: Random completed problems to maintain skills
        if (session.length < 5) {
            const completed = pool.filter(p => progress.completedProblems.includes(p.id) && !session.find(s => s.id === p.id));
            completed.sort(() => Math.random() - 0.5);
            session.push(...completed.slice(0, 5 - session.length));
        }

        // Fallback: If not enough completed, show some fundamental problems from this track
        if (session.length < 3) {
            const remaining = pool.filter(p => !session.find(s => s.id === p.id)).slice(0, 5 - session.length);
            session.push(...remaining);
        }
        
        setReviewSession(session.slice(0, 5));
    };

    useEffect(() => {
        setIsClient(true);
        const currentLang = getGlobalLanguage();
        setLang(currentLang);
        generateSession(currentLang);
    }, []);

    const handleLanguageChange = (newLang: 'cpp' | 'python') => {
        setLang(newLang);
        setGlobalLanguage(newLang);
        generateSession(newLang);
    };

    if (!isClient) return <div className="min-h-screen bg-gray-950 p-8 text-white">Loading review session...</div>;

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
                                <Brain className="w-8 h-8 text-amber-500" />
                                Targeted Review Session
                            </h1>
                            <p className="text-gray-400">Custom practice based on your weak concepts and recent attempts.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 bg-gray-900 border border-gray-700 rounded-lg px-3 py-1.5 self-start sm:self-auto">
                        <span className="text-xs uppercase font-bold text-gray-400">Track:</span>
                        <select 
                            value={lang}
                            onChange={(e) => handleLanguageChange(e.target.value as 'cpp' | 'python')}
                            className="bg-transparent text-gray-100 text-sm font-semibold outline-none cursor-pointer"
                        >
                            <option value="cpp" className="bg-gray-900 text-white">C++</option>
                            <option value="python" className="bg-gray-900 text-white">Python 3</option>
                        </select>
                    </div>
                </header>
                
                {reviewSession.length === 0 ? (
                    <div className="text-center py-20 bg-gray-900/50 rounded-2xl border border-gray-800">
                        <AlertCircle className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                        <h2 className="text-xl font-bold text-gray-300">Not enough data</h2>
                        <p className="text-gray-500 mt-2">Solve more problems in the {lang === 'python' ? 'Python' : 'C++'} track to generate a review session.</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-6 flex items-center justify-between">
                            <span>{reviewSession.length} Review Problems for {lang === 'python' ? 'Python 3' : 'C++'}</span>
                            <span className="text-xs font-normal text-gray-400 lowercase">targeted reinforcement</span>
                        </div>
                        
                        {reviewSession.map((p, index) => (
                            <Link 
                                href={`/problems/${p.id}`} 
                                key={p.id}
                                className="block bg-gray-900/50 hover:bg-gray-800 border border-gray-800 hover:border-gray-600 rounded-xl p-6 transition-all group"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">Question {index + 1}</div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                                            {p.title}
                                        </h3>
                                        <div className="flex gap-2 flex-wrap">
                                            <span className={`text-xs px-2 py-0.5 rounded font-semibold uppercase ${
                                                p.difficulty === 'beginner' || p.difficulty === 'easy' ? 'bg-emerald-500/10 text-emerald-400' :
                                                p.difficulty === 'medium' ? 'bg-amber-500/10 text-amber-400' : 'bg-red-500/10 text-red-400'
                                            }`}>
                                                {p.difficulty}
                                            </span>
                                            {p.concepts.map(c => (
                                                <span key={c} className="text-xs bg-gray-800 text-gray-300 px-2 py-0.5 rounded border border-gray-700">
                                                    {c}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-gray-800 p-3 rounded-lg text-gray-400 group-hover:bg-amber-900/30 group-hover:text-amber-400 transition-colors">
                                        <Code2 className="w-5 h-5" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
