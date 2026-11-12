"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    getProgress,
    getGlobalLanguage,
    setGlobalLanguage,
    restoreProgressFromServer
} from '@/lib/progress';
import {
    getAmazonPrepProblems,
    amazonPatternPrimers,
    amazonBasicsSpecs,
    amazonBasicsStages,
    amazonChallengesSpecs
} from '@/data/interviewPrep';
import { UserProgress } from '@/data/types';
import {
    ArrowLeft,
    ArrowRight,
    Award,
    BookOpen,
    BrainCircuit,
    CheckCircle2,
    Clock,
    Code2,
    Flame,
    Layers,
    Play,
    ShieldAlert,
    Sparkles,
    Target,
    Terminal,
    Trophy,
    Zap
} from 'lucide-react';

type ActiveSection = 'all' | 'basics' | 'challenges' | 'primers' | 'blueprint';

export default function InterviewPreparationPage() {
    const router = useRouter();
    const [language, setLanguage] = useState<'cpp' | 'python'>('cpp');
    const [progress, setProgress] = useState<UserProgress | null>(null);
    const [isClient, setIsClient] = useState(false);
    const [activeSection, setActiveSection] = useState<ActiveSection>('all');
    const [activeStageFilter, setActiveStageFilter] = useState<number | 'all'>('all');

    useEffect(() => {
        setIsClient(true);
        const currentLang = getGlobalLanguage();
        setLanguage(currentLang);
        const initialProg = getProgress(currentLang);
        setProgress(initialProg);

        if (initialProg.completedProblems.length === 0) {
            restoreProgressFromServer().then(restored => {
                if (restored) {
                    const updated = getProgress(getGlobalLanguage());
                    setProgress(updated);
                }
            });
        }

        const handleUpdate = () => {
            const lang = getGlobalLanguage();
            setLanguage(lang);
            setProgress(getProgress(lang));
        };
        window.addEventListener('languageChange', handleUpdate);
        window.addEventListener('progressUpdated', handleUpdate);
        return () => {
            window.removeEventListener('languageChange', handleUpdate);
            window.removeEventListener('progressUpdated', handleUpdate);
        };
    }, []);

    const handleLanguageSwitch = (newLang: 'cpp' | 'python') => {
        setLanguage(newLang);
        setGlobalLanguage(newLang);
        setProgress(getProgress(newLang));
    };

    if (!isClient || !progress) {
        return <div className="min-h-screen bg-gray-950 text-white p-8">Loading Interview Preparation...</div>;
    }

    const basicsProblems = getAmazonPrepProblems(language, 'basics');
    const challengeProblems = getAmazonPrepProblems(language, 'challenges');
    const allAmzProblems = [...basicsProblems, ...challengeProblems];

    const completedBasics = basicsProblems.filter(p => progress.completedProblems.includes(p.id)).length;
    const completedChallenges = challengeProblems.filter(p => progress.completedProblems.includes(p.id)).length;
    const totalCompleted = completedBasics + completedChallenges;
    const totalProblems = allAmzProblems.length;
    const completionPct = totalProblems > 0 ? Math.round((totalCompleted / totalProblems) * 100) : 0;

    const nextBasic = basicsProblems.find(p => !progress.completedProblems.includes(p.id)) || basicsProblems[0];
    const nextChallenge = challengeProblems.find(p => !progress.completedProblems.includes(p.id)) || challengeProblems[0];

    const startRandomAmazonMock = () => {
        const idx = Math.floor(Math.random() * challengeProblems.length);
        const target = challengeProblems[idx];
        if (target) {
            router.push(`/interview/workspace?problemId=${target.id}`);
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 text-gray-200 p-6 md:p-8 font-sans">
            <div className="max-w-6xl mx-auto space-y-10">
                
                {/* Top Header */}
                <header className="flex flex-col lg:flex-row lg:items-center justify-between border-b border-gray-800 pb-6 gap-4">
                    <div className="flex items-start gap-4">
                        <button
                            onClick={() => router.push('/')}
                            className="mt-1 text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-900 border border-gray-800"
                            title="Back to Main Dashboard"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div>
                            <div className="flex flex-wrap items-center gap-2.5 mb-2">
                                <span className="text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                                    <Award className="w-3.5 h-3.5" /> Amazon SDE 1 Intern • Virtual Assessment
                                </span>
                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center gap-1.5">
                                    <Terminal className="w-3.5 h-3.5" /> Dual Track: C++17 & Python 3
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-emerald-400">
                                Interview Preparation Hub
                            </h1>
                            <p className="text-gray-400 text-sm md:text-base mt-1 max-w-3xl">
                                Master the core fundamentals first, then conquer authentic Medium & Hard Amazon Online Assessment (OA) problems in both C++ and Python.
                            </p>
                        </div>
                    </div>

                    {/* Language Toggle & Progress Pill */}
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center bg-gray-900 border border-gray-700 rounded-xl p-1">
                            <button
                                onClick={() => handleLanguageSwitch('cpp')}
                                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                    language === 'cpp'
                                        ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(37,99,235,0.4)]'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                C++ Track
                            </button>
                            <button
                                onClick={() => handleLanguageSwitch('python')}
                                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                    language === 'python'
                                        ? 'bg-emerald-600 text-white shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                Python 3 Track
                            </button>
                        </div>

                        <div className="bg-amber-950/30 border border-amber-800/50 text-amber-300 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-amber-400" />
                            {totalCompleted} / {totalProblems} Solved ({completionPct}%)
                        </div>
                    </div>
                </header>

                {/* Hero Summary Cards: Step 1 Basics -> Step 2 Hard OA -> Timed Simulation */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1: Basics */}
                    <div className="bg-gradient-to-br from-emerald-950/40 to-gray-900 border border-emerald-800/50 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/50">
                                    Step 1 • 7 Progressive Stages
                                </span>
                                <span className="text-xs font-mono text-gray-400">
                                    {completedBasics}/{basicsProblems.length} Done
                                </span>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <Layers className="w-5 h-5 text-emerald-400" />
                                56 Zero-to-Hero Basics
                            </h2>
                            <p className="text-xs text-gray-400 leading-relaxed mb-4">
                                Step-by-step progressive curriculum (7 stages × 8 problems) with built-in C++17 & Python 3 Mini-Lessons where every question teaches a skill that carries into the next.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-emerald-500 h-2 rounded-full transition-all"
                                    style={{ width: `${(completedBasics / Math.max(basicsProblems.length, 1)) * 100}%` }}
                                />
                            </div>
                            <button
                                onClick={() => nextBasic && router.push(`/problems/${nextBasic.id}`)}
                                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                            >
                                <Play className="w-3.5 h-3.5 fill-current" />
                                {completedBasics === 0 ? 'Start Step 1 (Zero-to-Hero)' : completedBasics === basicsProblems.length ? 'Review 56 Basics' : `Continue: ${nextBasic.title.split(':')[0]}`}
                            </button>
                        </div>
                    </div>

                    {/* Card 2: Challenging Amazon OA */}
                    <div className="bg-gradient-to-br from-amber-950/40 to-gray-900 border border-amber-800/50 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded-md border border-amber-800/50">
                                    Step 2 • Real OA Challenges
                                </span>
                                <span className="text-xs font-mono text-gray-400">
                                    {completedChallenges}/{challengeProblems.length} Done
                                </span>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <Flame className="w-5 h-5 text-amber-400" />
                                Challenging Amazon OA
                            </h2>
                            <p className="text-xs text-gray-400 leading-relaxed mb-4">
                                12 high-frequency Medium & Hard Amazon SDE 1 Intern assessment problems: AWS Server Clusters, Subarray Increments, Package Rounds, Rotting Oranges & more.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-amber-500 h-2 rounded-full transition-all"
                                    style={{ width: `${(completedChallenges / Math.max(challengeProblems.length, 1)) * 100}%` }}
                                />
                            </div>
                            <button
                                onClick={() => nextChallenge && router.push(`/problems/${nextChallenge.id}`)}
                                className="w-full py-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(217,119,6,0.25)]"
                            >
                                <Zap className="w-3.5 h-3.5" />
                                {completedChallenges === 0 ? 'Start Amazon OA Challenges' : completedChallenges === challengeProblems.length ? 'Review OA Challenges' : `Continue: ${nextChallenge.title.split(':')[0]}`}
                            </button>
                        </div>
                    </div>

                    {/* Card 3: Timed Virtual Assessment Simulator */}
                    <div className="bg-gradient-to-br from-red-950/40 to-gray-900 border border-red-800/50 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 px-2.5 py-1 rounded-md border border-red-800/50">
                                    Step 3 • Strict Timed Mode
                                </span>
                                <span className="text-xs font-mono text-red-300 flex items-center gap-1">
                                    <Clock className="w-3.5 h-3.5" /> 30 Min
                                </span>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <ShieldAlert className="w-5 h-5 text-red-400" />
                                Simulate Virtual OA
                            </h2>
                            <p className="text-xs text-gray-400 leading-relaxed mb-4">
                                Launch a random Amazon SDE 1 Intern OA question in strict 30-minute assessment mode with hidden test cases masked and hints disabled.
                            </p>
                        </div>
                        <button
                            onClick={startRandomAmazonMock}
                            className="w-full py-2.5 bg-red-600 hover:bg-red-500 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(220,38,38,0.25)]"
                        >
                            <ShieldAlert className="w-3.5 h-3.5" />
                            Launch Random Amazon OA Mock ({language === 'python' ? 'Python 3' : 'C++'})
                        </button>
                    </div>
                </div>

                {/* Section Navigation Tabs */}
                <div className="flex flex-wrap gap-2 border-b border-gray-800 pb-4">
                    <button
                        onClick={() => setActiveSection('all')}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                            activeSection === 'all'
                                ? 'bg-amber-500 text-gray-950 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                                : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
                        }`}
                    >
                        <Sparkles className="w-3.5 h-3.5" /> Complete Roadmap (All Sections)
                    </button>
                    <button
                        onClick={() => setActiveSection('basics')}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                            activeSection === 'basics'
                                ? 'bg-emerald-600 text-white'
                                : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
                        }`}
                    >
                        <Layers className="w-3.5 h-3.5" /> 1. Practice the Basics ({completedBasics}/{basicsProblems.length})
                    </button>
                    <button
                        onClick={() => setActiveSection('challenges')}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                            activeSection === 'challenges'
                                ? 'bg-amber-600 text-white'
                                : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
                        }`}
                    >
                        <Flame className="w-3.5 h-3.5" /> 2. Challenging Amazon OA ({completedChallenges}/{challengeProblems.length})
                    </button>
                    <button
                        onClick={() => setActiveSection('primers')}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                            activeSection === 'primers'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
                        }`}
                    >
                        <Code2 className="w-3.5 h-3.5" /> 3. C++ & Python Pattern Primers
                    </button>
                    <button
                        onClick={() => setActiveSection('blueprint')}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                            activeSection === 'blueprint'
                                ? 'bg-purple-600 text-white'
                                : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
                        }`}
                    >
                        <BookOpen className="w-3.5 h-3.5" /> 4. Virtual Assessment & Leadership Principles
                    </button>
                </div>

                {/* SECTION A: C++ & Python Pattern Primers (shown in 'all' and 'primers') */}
                {(activeSection === 'all' || activeSection === 'primers') && (
                    <section className="space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                            <div>
                                <div className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">
                                    Understand the Fundamentals
                                </div>
                                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                    <BrainCircuit className="w-6 h-6 text-blue-400" />
                                    C++17 vs Python 3 Core Pattern Templates
                                </h2>
                                <p className="text-sm text-gray-400">
                                    Side-by-side templates for the 4 core algorithmic pillars tested in the Amazon SDE 1 Intern Virtual Assessment.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {amazonPatternPrimers.map((primer) => {
                                const basicProbId = language === 'python' ? `py-${primer.relatedBasicId}` : primer.relatedBasicId;
                                return (
                                    <div
                                        key={primer.id}
                                        className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 flex flex-col justify-between space-y-4"
                                    >
                                        <div className="space-y-3">
                                            <div className="flex items-start justify-between gap-2">
                                                <div>
                                                    <h3 className="text-lg font-bold text-white">{primer.title}</h3>
                                                    <p className="text-xs text-blue-400 font-medium">{primer.subtitle}</p>
                                                </div>
                                                <button
                                                    onClick={() => router.push(`/problems/${basicProbId}`)}
                                                    className="shrink-0 px-3 py-1.5 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 rounded-lg text-xs font-bold transition-colors flex items-center gap-1"
                                                >
                                                    Practice Basic <ArrowRight className="w-3.5 h-3.5" />
                                                </button>
                                            </div>

                                            <p className="text-xs text-gray-300 bg-gray-950/70 p-3 rounded-lg border border-gray-800/80">
                                                <strong className="text-amber-400">When to use in Amazon OA:</strong> {primer.whenToUse}
                                            </p>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                <div className="bg-gray-950 p-3 rounded-xl border border-gray-800">
                                                    <div className="text-[11px] font-bold uppercase tracking-wider text-blue-400 mb-1.5">
                                                        C++17 STL Idiom
                                                    </div>
                                                    <pre className="text-[11px] font-mono text-gray-300 overflow-x-auto whitespace-pre">
                                                        {primer.cppSnippet}
                                                    </pre>
                                                </div>
                                                <div className="bg-gray-950 p-3 rounded-xl border border-gray-800">
                                                    <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1.5">
                                                        Python 3 Idiom
                                                    </div>
                                                    <pre className="text-[11px] font-mono text-gray-300 overflow-x-auto whitespace-pre">
                                                        {primer.pythonSnippet}
                                                    </pre>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400">
                                            <span>💡 {primer.keyTakeaway}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                )}

                {/* SECTION B: Phase 1 - Practice the Basics (56 Progressive Zero-to-Hero Problems across 7 Stages) */}
                {(activeSection === 'all' || activeSection === 'basics') && (
                    <section className="space-y-6">
                        <div className="bg-emerald-950/20 border border-emerald-900/50 rounded-2xl p-6 md:p-8 space-y-6">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-emerald-900/40">
                                <div>
                                    <div className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 mb-1">
                                        Phase 1 • Zero-to-Hero Progressive Curriculum ({language === 'python' ? 'Python 3' : 'C++17'})
                                    </div>
                                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                        <Layers className="w-6 h-6 text-emerald-400" />
                                        56 Step-by-Step Foundation Builders (7 Stages)
                                    </h2>
                                    <p className="text-sm text-gray-400 mt-1">
                                        Designed so you never feel stuck: every question includes a <strong className="text-emerald-300">Mini-Lesson</strong> with side-by-side C++17 & Python 3 syntax idioms and builds directly on the previous step.
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 shrink-0">
                                    <span className="text-xs font-mono bg-emerald-950/80 text-emerald-300 px-3 py-1.5 rounded-lg border border-emerald-800/60">
                                        {completedBasics} / {basicsProblems.length} Completed
                                    </span>
                                </div>
                            </div>

                            {/* Stage Filter Pills */}
                            <div className="flex flex-wrap gap-2">
                                <button
                                    onClick={() => setActiveStageFilter('all')}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                        activeStageFilter === 'all'
                                            ? 'bg-emerald-600 text-white shadow-[0_0_10px_rgba(16,185,129,0.3)]'
                                            : 'bg-gray-900/90 text-gray-400 hover:text-white border border-gray-800'
                                    }`}
                                >
                                    All 7 Stages (56 Steps)
                                </button>
                                {amazonBasicsStages.map((stage) => {
                                    const stageProbs = basicsProblems.filter((_, idx) => amazonBasicsSpecs[idx]?.stageNum === stage.stageNum);
                                    const stageSolved = stageProbs.filter(p => progress.completedProblems.includes(p.id)).length;
                                    return (
                                        <button
                                            key={stage.stageNum}
                                            onClick={() => setActiveStageFilter(stage.stageNum)}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                                                activeStageFilter === stage.stageNum
                                                    ? 'bg-emerald-600 text-white shadow-[0_0_10px_rgba(16,185,129,0.3)]'
                                                    : 'bg-gray-900/90 text-gray-400 hover:text-white border border-gray-800'
                                            }`}
                                        >
                                            <span>Stage {stage.stageNum}</span>
                                            <span className="text-[10px] font-mono opacity-80">
                                                ({stageSolved}/{stage.count})
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Render Stages */}
                            <div className="space-y-8">
                                {amazonBasicsStages
                                    .filter(stage => activeStageFilter === 'all' || activeStageFilter === stage.stageNum)
                                    .map((stage) => {
                                        const stageItems = basicsProblems
                                            .map((prob, index) => ({ prob, spec: amazonBasicsSpecs[index] }))
                                            .filter(item => item.spec?.stageNum === stage.stageNum);
                                        const stageSolvedCount = stageItems.filter(item => progress.completedProblems.includes(item.prob.id)).length;

                                        return (
                                            <div key={stage.stageNum} className="space-y-4">
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-gray-900/90 border border-gray-800 px-4 py-3 rounded-xl">
                                                    <div>
                                                        <div className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-400">
                                                            {stage.range} • Progressive Building Blocks
                                                        </div>
                                                        <h3 className="text-lg font-bold text-white">
                                                            {stage.title}
                                                        </h3>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-28 bg-gray-800 h-2 rounded-full overflow-hidden">
                                                            <div
                                                                className="bg-emerald-500 h-2 rounded-full transition-all"
                                                                style={{ width: `${(stageSolvedCount / Math.max(stage.count, 1)) * 100}%` }}
                                                            />
                                                        </div>
                                                        <span className="text-xs font-mono text-emerald-300">
                                                            {stageSolvedCount}/{stage.count} Solved
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {stageItems.map(({ prob, spec }) => {
                                                        const isSolved = progress.completedProblems.includes(prob.id);

                                                        return (
                                                            <div
                                                                key={prob.id}
                                                                className={`p-5 rounded-xl border transition-all flex flex-col justify-between gap-4 ${
                                                                    isSolved
                                                                        ? 'bg-emerald-950/25 border-emerald-700/50'
                                                                        : 'bg-gray-900/80 border-gray-800 hover:border-emerald-700/50'
                                                                }`}
                                                            >
                                                                <div>
                                                                    <div className="flex items-center justify-between gap-2 mb-2">
                                                                        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                                                            {spec?.pattern || 'Core Pattern'}
                                                                        </span>
                                                                        <div className="flex items-center gap-2">
                                                                            <span className="text-[11px] font-mono text-gray-400">
                                                                                {prob.timeComplexity}
                                                                            </span>
                                                                            {isSolved && (
                                                                                <span className="flex items-center gap-1 text-xs font-bold text-emerald-400">
                                                                                    <CheckCircle2 className="w-4 h-4" /> Solved
                                                                                </span>
                                                                            )}
                                                                        </div>
                                                                    </div>

                                                                    <h4 className="text-base font-bold text-white mb-1">
                                                                        {prob.title}
                                                                    </h4>
                                                                    <p className="text-xs text-gray-400 mb-3">
                                                                        {spec?.amazonContext}
                                                                    </p>

                                                                    <div className="flex flex-wrap gap-1.5">
                                                                        {prob.concepts.map((c) => (
                                                                            <span
                                                                                key={c}
                                                                                className="text-[11px] bg-gray-950 text-gray-400 px-2 py-0.5 rounded border border-gray-800"
                                                                            >
                                                                                {c}
                                                                            </span>
                                                                        ))}
                                                                    </div>
                                                                </div>

                                                                <div className="flex items-center justify-between pt-3 border-t border-gray-800/80">
                                                                    <span className="text-[11px] text-emerald-400/80 font-mono">
                                                                        Includes Mini-Lesson (C++ & Python)
                                                                    </span>
                                                                    <button
                                                                        onClick={() => router.push(`/problems/${prob.id}`)}
                                                                        className={`px-4 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                                                                            isSolved
                                                                                ? 'bg-gray-800 hover:bg-gray-700 text-emerald-400'
                                                                                : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                                                                        }`}
                                                                    >
                                                                        {isSolved ? 'Review Step' : `Learn & Solve (${language === 'python' ? 'Python' : 'C++'})`}
                                                                        <ArrowRight className="w-3.5 h-3.5" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </section>
                )}

                {/* SECTION C: Phase 2 - Challenging Amazon SDE 1 Intern OA Problems (12 Problems) */}
                {(activeSection === 'all' || activeSection === 'challenges') && (
                    <section className="space-y-6">
                        <div className="bg-amber-950/15 border border-amber-900/50 rounded-2xl p-6 md:p-8">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-amber-900/40">
                                <div>
                                    <div className="text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-1">
                                        Phase 2 • Real Virtual Assessment Problems ({language === 'python' ? 'Python 3' : 'C++'})
                                    </div>
                                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                        <Flame className="w-6 h-6 text-amber-400" />
                                        Challenging Amazon SDE 1 Intern OA Questions
                                    </h2>
                                    <p className="text-sm text-gray-400 mt-1">
                                        12 high-frequency Medium & Hard problems from actual Amazon SDE Intern Online Assessments. Practice with guided hints or launch a strict 30-minute timed simulation.
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 shrink-0">
                                    <span className="text-xs font-mono bg-amber-950/80 text-amber-300 px-3 py-1.5 rounded-lg border border-amber-800/60">
                                        {completedChallenges} / {challengeProblems.length} Completed
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {challengeProblems.map((prob, index) => {
                                    const spec = amazonChallengesSpecs[index];
                                    const isSolved = progress.completedProblems.includes(prob.id);

                                    return (
                                        <div
                                            key={prob.id}
                                            className={`p-5 rounded-xl border transition-all flex flex-col justify-between gap-4 ${
                                                isSolved
                                                    ? 'bg-emerald-950/20 border-emerald-700/50'
                                                    : 'bg-gray-900/80 border-gray-800 hover:border-amber-700/50'
                                            }`}
                                        >
                                            <div>
                                                <div className="flex items-center justify-between gap-2 mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <span
                                                            className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded ${
                                                                prob.difficulty === 'hard'
                                                                    ? 'bg-red-500/15 text-red-400 border border-red-500/30'
                                                                    : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                                                            }`}
                                                        >
                                                            {prob.difficulty}
                                                        </span>
                                                        <span className="text-[11px] font-semibold text-blue-400 bg-blue-950/50 px-2 py-0.5 rounded border border-blue-800/40">
                                                            {spec?.pattern}
                                                        </span>
                                                    </div>

                                                    {isSolved && (
                                                        <span className="flex items-center gap-1 text-xs font-bold text-emerald-400">
                                                            <CheckCircle2 className="w-4 h-4" /> Solved
                                                        </span>
                                                    )}
                                                </div>

                                                <h3 className="text-base font-bold text-white mb-1">
                                                    {prob.title}
                                                </h3>
                                                <p className="text-xs text-gray-400 mb-3">
                                                    {spec?.amazonContext}
                                                </p>

                                                <div className="flex flex-wrap items-center gap-2 text-[11px] text-gray-400 font-mono">
                                                    <span className="bg-gray-950 px-2 py-0.5 rounded border border-gray-800">
                                                        Time: {prob.timeComplexity}
                                                    </span>
                                                    <span className="bg-gray-950 px-2 py-0.5 rounded border border-gray-800">
                                                        Space: {prob.spaceComplexity}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between gap-2 pt-3 border-t border-gray-800/80">
                                                <button
                                                    onClick={() => router.push(`/interview/workspace?problemId=${prob.id}`)}
                                                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-950/40 hover:bg-red-900/50 text-red-300 border border-red-800/50 transition-colors flex items-center gap-1.5"
                                                    title="Solve under strict 30-minute timer with hidden test cases masked"
                                                >
                                                    <Clock className="w-3.5 h-3.5" /> Timed OA Mode
                                                </button>

                                                <button
                                                    onClick={() => router.push(`/problems/${prob.id}`)}
                                                    className={`px-4 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                                                        isSolved
                                                            ? 'bg-gray-800 hover:bg-gray-700 text-emerald-400'
                                                            : 'bg-amber-600 hover:bg-amber-500 text-white'
                                                    }`}
                                                >
                                                    {isSolved ? 'Review Solution' : `Solve (${language === 'python' ? 'Python' : 'C++'})`}
                                                    <ArrowRight className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}

                {/* SECTION D: Amazon SDE 1 Intern Virtual Assessment Blueprint & Leadership Principles */}
                {(activeSection === 'all' || activeSection === 'blueprint') && (
                    <section className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 md:p-8 space-y-8">
                        <div>
                            <div className="text-xs font-extrabold uppercase tracking-widest text-purple-400 mb-1">
                                Assessment Strategy & Behavioral Guide
                            </div>
                            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                <Target className="w-6 h-6 text-purple-400" />
                                Amazon SDE 1 Intern Virtual Assessment Blueprint
                            </h2>
                            <p className="text-sm text-gray-400 mt-1">
                                What to expect across all sections of the Amazon SDE 1 Intern Online Assessment and how to maximize your score.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-gray-950 p-5 rounded-xl border border-gray-800 space-y-3">
                                <div className="text-xs font-bold uppercase text-amber-400">
                                    Part 1 • 70 Minutes
                                </div>
                                <h3 className="text-lg font-bold text-white">2 DSA Coding Questions</h3>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    Question 1 is typically a Medium greedy/hash-map/sliding-window problem (aim for 20–25 mins). Question 2 is a Medium-Hard subarray, monotonic stack/deque, or BFS/heap optimization problem (40–45 mins).
                                </p>
                                <ul className="text-xs text-gray-300 space-y-1.5 list-disc pl-4">
                                    <li>Hidden test cases test <code className="text-amber-300">N = 10^5</code> (<code className="text-amber-300">O(N)</code> or <code className="text-amber-300">O(N log N)</code> required).</li>
                                    <li>In C++, always use <code className="text-amber-300">long long</code> for sums/costs to prevent 32-bit overflow.</li>
                                    <li>In Python, use <code className="text-emerald-300">collections.deque</code>, <code className="text-emerald-300">Counter</code>, and <code className="text-emerald-300">heapq</code>.</li>
                                </ul>
                            </div>

                            <div className="bg-gray-950 p-5 rounded-xl border border-gray-800 space-y-3">
                                <div className="text-xs font-bold uppercase text-blue-400">
                                    Part 2 • Practical Codebase Task
                                </div>
                                <h3 className="text-lg font-bold text-white">Debugging & Feature Simulation</h3>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    Some 2025–2026 assessments include a multi-file repository task where you fix failing unit tests or complete a service method.
                                </p>
                                <ul className="text-xs text-gray-300 space-y-1.5 list-disc pl-4">
                                    <li>Read the failing unit test assertions first to pinpoint the exact expected behavior.</li>
                                    <li>Watch out for off-by-one boundaries (<code className="text-blue-300">&lt;</code> vs <code className="text-blue-300">&lt;=</code>), null/empty checks, and inverted boolean conditions.</li>
                                    <li>Run the test suite after each small fix.</li>
                                </ul>
                            </div>

                            <div className="bg-gray-950 p-5 rounded-xl border border-gray-800 space-y-3">
                                <div className="text-xs font-bold uppercase text-emerald-400">
                                    Part 3 • Work Simulation & Style
                                </div>
                                <h3 className="text-lg font-bold text-white">Amazon Leadership Principles</h3>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    Do not underestimate the Work Simulation! Candidates with 2/2 coding still get rejected if their behavioral responses contradict Amazon’s Leadership Principles.
                                </p>
                                <ul className="text-xs text-gray-300 space-y-1.5 list-disc pl-4">
                                    <li><strong>Customer Obsession:</strong> Prioritize customer impact & reliability first.</li>
                                    <li><strong>Ownership:</strong> Never pass the buck; fix root causes, not just symptoms.</li>
                                    <li><strong>Bias for Action & Dive Deep:</strong> Gather key metrics quickly, then act decisively.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                )}

            </div>
        </div>
    );
}
