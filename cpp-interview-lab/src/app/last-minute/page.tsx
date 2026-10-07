"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, BookOpen, AlertTriangle, ListChecks, Zap, Terminal } from 'lucide-react';
import Link from 'next/link';
import { allProblems } from '@/data/levels';

export default function LastMinutePrep() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'revision' | 'cheatsheet' | 'mistakes' | 'bigo' | 'mustsolve'>('revision');

    const mustSolveIds = [
        'prob-09-04', 'prob-09-05', 'prob-09-07', // Arrays
        'prob-14-01', 'prob-14-03', // Hash Map
        'prob-10-02', 'prob-20-01', // Binary Search
        'prob-11-04', // Sorting
        'prob-15-02', // Stack
        'prob-16-02', // Linked List
        'prob-21-01', // Trees
        'prob-22-01', // Graphs
        'prob-24-01'  // DP
    ];
    
    const mustSolve = allProblems.filter(p => mustSolveIds.includes(p.id));

    return (
        <div className="min-h-screen bg-gray-950 text-gray-200 p-8 font-sans">
            <div className="max-w-5xl mx-auto space-y-8">
                
                <header className="flex items-center gap-4 border-b border-gray-800 pb-6">
                    <button 
                        onClick={() => router.push('/')}
                        className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-900"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <div>
                        <h1 className="text-3xl font-extrabold text-white flex items-center gap-3">
                            <Zap className="w-8 h-8 text-yellow-400" />
                            Last-Minute Interview Prep
                        </h1>
                        <p className="text-gray-400">High-yield revision for your technical interview tomorrow.</p>
                    </div>
                </header>

                <div className="flex flex-wrap gap-2 mb-8">
                    <button onClick={() => setActiveTab('revision')} className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${activeTab === 'revision' ? 'bg-blue-600 text-white' : 'bg-gray-900 text-gray-400 hover:bg-gray-800'}`}>
                        Quick Revision
                    </button>
                    <button onClick={() => setActiveTab('cheatsheet')} className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${activeTab === 'cheatsheet' ? 'bg-blue-600 text-white' : 'bg-gray-900 text-gray-400 hover:bg-gray-800'}`}>
                        C++ Cheat Sheet
                    </button>
                    <button onClick={() => setActiveTab('mistakes')} className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${activeTab === 'mistakes' ? 'bg-blue-600 text-white' : 'bg-gray-900 text-gray-400 hover:bg-gray-800'}`}>
                        Common Mistakes
                    </button>
                    <button onClick={() => setActiveTab('bigo')} className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${activeTab === 'bigo' ? 'bg-blue-600 text-white' : 'bg-gray-900 text-gray-400 hover:bg-gray-800'}`}>
                        Big-O & Patterns
                    </button>
                    <button onClick={() => setActiveTab('mustsolve')} className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${activeTab === 'mustsolve' ? 'bg-amber-600 text-white' : 'bg-gray-900 text-gray-400 hover:bg-gray-800'}`}>
                        Must-Solve (Top 13)
                    </button>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                    
                    {activeTab === 'revision' && (
                        <div className="prose prose-invert max-w-none space-y-6">
                            <h2 className="text-2xl font-bold text-white border-b border-gray-800 pb-2">C++ Essentials</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-blue-400 font-bold">1. Vectors over Arrays</h3>
                                    <p className="text-sm text-gray-400">Always use `std::vector{"<int>"}` instead of `int arr[n]`. Vectors track their own size, can be returned from functions, and dynamically resize.</p>
                                </div>
                                <div>
                                    <h3 className="text-blue-400 font-bold">2. Pass by Reference</h3>
                                    <p className="text-sm text-gray-400">When passing large vectors or strings to helper functions, use `const vector{"<int>"}& nums` to avoid O(N) copying on every call!</p>
                                </div>
                                <div>
                                    <h3 className="text-blue-400 font-bold">3. Hash Maps vs Sets</h3>
                                    <p className="text-sm text-gray-400">Use `unordered_set` if you only need to know "Does X exist?". Use `unordered_map` if you need to know "How many times did X appear?" or "What index was X at?".</p>
                                </div>
                                <div>
                                    <h3 className="text-blue-400 font-bold">4. String Traversal</h3>
                                    <p className="text-sm text-gray-400">To scan characters: `for(char c : s)`. To modify characters: `for(char& c : s)` or `for(int i=0; i{"<"}s.length(); i++)`.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'cheatsheet' && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-white border-b border-gray-800 pb-2 flex items-center gap-2"><Terminal className="w-5 h-5"/> C++ Snippets</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gray-950 p-4 rounded-xl border border-gray-800">
                                    <h3 className="text-sm font-bold text-gray-400 mb-2">Sorting</h3>
                                    <pre className="text-emerald-400 text-sm overflow-x-auto">sort(v.begin(), v.end());{"\n"}sort(v.begin(), v.end(), greater{"<int>"}());</pre>
                                </div>
                                <div className="bg-gray-950 p-4 rounded-xl border border-gray-800">
                                    <h3 className="text-sm font-bold text-gray-400 mb-2">Hash Map (Frequency)</h3>
                                    <pre className="text-emerald-400 text-sm overflow-x-auto">unordered_map{"<int, int>"} freq;{"\n"}freq[x]++;</pre>
                                </div>
                                <div className="bg-gray-950 p-4 rounded-xl border border-gray-800">
                                    <h3 className="text-sm font-bold text-gray-400 mb-2">Binary Search Template</h3>
                                    <pre className="text-emerald-400 text-sm overflow-x-auto">int left = 0, right = n - 1;{"\n"}while(left {"<="} right) {"{"}{"\n"}  int mid = left + (right - left) / 2;{"\n"}  // ...{"\n"}{"}"}</pre>
                                </div>
                                <div className="bg-gray-950 p-4 rounded-xl border border-gray-800">
                                    <h3 className="text-sm font-bold text-gray-400 mb-2">String Input (Spaces)</h3>
                                    <pre className="text-emerald-400 text-sm overflow-x-auto">string s;{"\n"}getline(cin, s);</pre>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'mistakes' && (
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-red-400 border-b border-red-900/30 pb-2 flex items-center gap-2"><AlertTriangle className="w-5 h-5"/> Common Interview Fatal Errors</h2>
                            <ul className="space-y-4 mt-4">
                                <li className="bg-red-950/20 p-4 rounded-lg border border-red-900/30">
                                    <strong className="text-red-300">= vs ==</strong>
                                    <p className="text-sm text-gray-400 mt-1">Typing `if (x = 5)` instead of `if (x == 5)`. The first one ASSIGNS 5 to x and is always true!</p>
                                </li>
                                <li className="bg-red-950/20 p-4 rounded-lg border border-red-900/30">
                                    <strong className="text-red-300">Uninitialized Variables</strong>
                                    <p className="text-sm text-gray-400 mt-1">`int max_val;` in C++ does NOT default to 0. It holds garbage memory. ALWAYS do `int max_val = 0;`.</p>
                                </li>
                                <li className="bg-red-950/20 p-4 rounded-lg border border-red-900/30">
                                    <strong className="text-red-300">Empty Stack/Queue Access</strong>
                                    <p className="text-sm text-gray-400 mt-1">Calling `st.top()` or `st.pop()` on an empty stack will instantly crash your program (Segfault). Always check `!st.empty()`.</p>
                                </li>
                                <li className="bg-red-950/20 p-4 rounded-lg border border-red-900/30">
                                    <strong className="text-red-300">Integer Division</strong>
                                    <p className="text-sm text-gray-400 mt-1">`5 / 2` is `2`, not `2.5`. If you need a decimal, cast to double: `(double)5 / 2`.</p>
                                </li>
                            </ul>
                        </div>
                    )}

                    {activeTab === 'bigo' && (
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-white border-b border-gray-800 pb-2">Big-O Cheat Sheet</h2>
                                <table className="w-full text-left mt-4 text-sm">
                                    <thead>
                                        <tr className="text-gray-500 border-b border-gray-800">
                                            <th className="pb-2">Complexity</th>
                                            <th className="pb-2">Means</th>
                                            <th className="pb-2">Example</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-300">
                                        <tr className="border-b border-gray-800/50">
                                            <td className="py-3 font-mono text-blue-400">O(1)</td>
                                            <td className="py-3">Instant / Constant</td>
                                            <td className="py-3">Hash map lookup, array index</td>
                                        </tr>
                                        <tr className="border-b border-gray-800/50">
                                            <td className="py-3 font-mono text-blue-400">O(log n)</td>
                                            <td className="py-3">Divide in half</td>
                                            <td className="py-3">Binary search</td>
                                        </tr>
                                        <tr className="border-b border-gray-800/50">
                                            <td className="py-3 font-mono text-amber-400">O(n)</td>
                                            <td className="py-3">Scan everything once</td>
                                            <td className="py-3">Single loop, two pointers</td>
                                        </tr>
                                        <tr className="border-b border-gray-800/50">
                                            <td className="py-3 font-mono text-amber-400">O(n log n)</td>
                                            <td className="py-3">Scan and split</td>
                                            <td className="py-3">Sorting (`std::sort`)</td>
                                        </tr>
                                        <tr className="border-b border-gray-800/50">
                                            <td className="py-3 font-mono text-red-400">O(n^2)</td>
                                            <td className="py-3">Check every pair</td>
                                            <td className="py-3">Nested loops</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white border-b border-gray-800 pb-2 mt-8">Pattern Recognition</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-gray-950 p-4 rounded-xl"><div className="text-gray-500 text-sm">Need to count frequencies?</div><div className="font-bold text-blue-400">→ Hash Map</div></div>
                                    <div className="bg-gray-950 p-4 rounded-xl"><div className="text-gray-500 text-sm">Need fast lookup / uniqueness?</div><div className="font-bold text-blue-400">→ Hash Set</div></div>
                                    <div className="bg-gray-950 p-4 rounded-xl"><div className="text-gray-500 text-sm">Sorted array + searching?</div><div className="font-bold text-blue-400">→ Binary Search</div></div>
                                    <div className="bg-gray-950 p-4 rounded-xl"><div className="text-gray-500 text-sm">Sorted array + finding pairs?</div><div className="font-bold text-blue-400">→ Two Pointers</div></div>
                                    <div className="bg-gray-950 p-4 rounded-xl"><div className="text-gray-500 text-sm">Contiguous subarray condition?</div><div className="font-bold text-blue-400">→ Sliding Window</div></div>
                                    <div className="bg-gray-950 p-4 rounded-xl"><div className="text-gray-500 text-sm">Matching brackets / nesting?</div><div className="font-bold text-blue-400">→ Stack</div></div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'mustsolve' && (
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-amber-400 border-b border-amber-900/30 pb-2 flex items-center gap-2"><ListChecks className="w-6 h-6"/> Must Solve Before Interview</h2>
                            <p className="text-gray-400 text-sm mb-6">If you only have time to solve a few problems, do these. They cover the most common patterns asked in technical interviews.</p>
                            
                            <div className="grid grid-cols-1 gap-3">
                                {mustSolve.map(p => (
                                    <Link 
                                        key={p.id} 
                                        href={`/problems/${p.id}`}
                                        className="bg-gray-950 hover:bg-gray-900 border border-gray-800 hover:border-gray-600 rounded-xl p-4 flex justify-between items-center transition-colors group"
                                    >
                                        <div>
                                            <div className="font-bold text-gray-200 group-hover:text-amber-400 transition-colors">{p.title}</div>
                                            <div className="text-xs text-gray-500 mt-1 capitalize">{p.tags?.[0] || 'algorithm'} • {p.difficulty}</div>
                                        </div>
                                        <div className="bg-gray-800 text-gray-400 px-3 py-1 rounded-md text-sm group-hover:bg-amber-900/30 group-hover:text-amber-400 transition-colors">
                                            Solve
                                        </div>
                                    </Link>
                                ))}
                                {mustSolve.length === 0 && <div className="text-gray-500 italic">Problems are currently loading...</div>}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
