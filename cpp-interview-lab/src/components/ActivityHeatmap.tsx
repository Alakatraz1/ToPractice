"use client";

import { useState, useEffect, useRef } from 'react';
import { Flame, Trophy, Calendar, CheckCircle2, Zap, Sparkles } from 'lucide-react';
import { 
    getProgress, 
    getCombinedDailyActivity, 
    getCalendarData, 
    CalendarDay, 
    CalendarData,
    getGlobalLanguage 
} from '@/lib/progress';

interface ActivityHeatmapProps {
    currentLanguage?: 'cpp' | 'python';
}

export function ActivityHeatmap({ currentLanguage }: ActivityHeatmapProps) {
    const [filter, setFilter] = useState<'current' | 'combined' | 'python' | 'cpp'>('current');
    const [calendarData, setCalendarData] = useState<CalendarData | null>(null);
    const [hoveredDay, setHoveredDay] = useState<{ day: CalendarDay; x: number; y: number } | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const activeTrack = currentLanguage || getGlobalLanguage();

    const loadData = () => {
        let activityRecord: Record<string, number> = {};
        if (filter === 'combined') {
            activityRecord = getCombinedDailyActivity();
        } else if (filter === 'python') {
            activityRecord = getProgress('python').dailyActivity || {};
        } else if (filter === 'cpp') {
            activityRecord = getProgress('cpp').dailyActivity || {};
        } else {
            // 'current' track
            activityRecord = getProgress(activeTrack).dailyActivity || {};
        }
        
        const data = getCalendarData(activityRecord, 52);
        setCalendarData(data);
    };

    useEffect(() => {
        loadData();

        const handleUpdate = () => loadData();
        window.addEventListener('progressUpdated', handleUpdate);
        window.addEventListener('languageChange', handleUpdate);
        return () => {
            window.removeEventListener('progressUpdated', handleUpdate);
            window.removeEventListener('languageChange', handleUpdate);
        };
    }, [filter, activeTrack]);

    useEffect(() => {
        // Scroll to recent weeks on initial load
        if (containerRef.current) {
            containerRef.current.scrollLeft = containerRef.current.scrollWidth;
        }
    }, [calendarData]);

    if (!calendarData) return null;

    const getColorClass = (day: CalendarDay) => {
        if (day.isFuture) return 'bg-transparent border border-transparent opacity-0 pointer-events-none';
        switch (day.level) {
            case 1:
                return 'bg-emerald-950 border border-emerald-800/60 hover:border-emerald-600 hover:ring-1 hover:ring-emerald-500';
            case 2:
                return 'bg-emerald-800 border border-emerald-700/60 hover:border-emerald-500 hover:ring-1 hover:ring-emerald-400';
            case 3:
                return 'bg-emerald-600 border border-emerald-500/60 hover:border-emerald-300 hover:ring-1 hover:ring-emerald-300';
            case 4:
                return 'bg-emerald-400 border border-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.4)] hover:ring-1 hover:ring-white';
            case 0:
            default:
                return 'bg-gray-900 border border-gray-800/80 hover:border-gray-700 hover:ring-1 hover:ring-gray-600';
        }
    };

    const dayLabels = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

    return (
        <div className="bg-gradient-to-br from-gray-900/90 to-gray-950 border border-gray-800 rounded-2xl p-6 shadow-xl relative overflow-hidden font-sans">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* Header & Filter Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-gray-800/80 gap-4">
                <div>
                    <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
                        <Flame className={`w-5 h-5 ${calendarData.currentStreak > 0 ? 'text-orange-500 fill-orange-500 animate-pulse' : 'text-gray-500'}`} />
                        Daily Practice & Consistency Streak
                    </h2>
                    <p className="text-xs text-gray-400 mt-1">
                        GitHub-style local activity tracker. Complete challenges daily to build your momentum!
                    </p>
                </div>

                <div className="flex items-center gap-1.5 bg-gray-950 p-1 rounded-xl border border-gray-800 text-xs self-start sm:self-auto">
                    <button
                        onClick={() => setFilter('current')}
                        className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${filter === 'current' ? 'bg-emerald-600 text-white font-semibold' : 'text-gray-400 hover:text-gray-200'}`}
                    >
                        Active Track ({activeTrack === 'python' ? 'Python' : 'C++'})
                    </button>
                    <button
                        onClick={() => setFilter('combined')}
                        className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${filter === 'combined' ? 'bg-emerald-600 text-white font-semibold' : 'text-gray-400 hover:text-gray-200'}`}
                    >
                        Combined
                    </button>
                    <button
                        onClick={() => setFilter('python')}
                        className={`px-2.5 py-1.5 rounded-lg font-medium transition-colors ${filter === 'python' ? 'bg-emerald-600 text-white font-semibold' : 'text-gray-400 hover:text-gray-200'}`}
                    >
                        Python
                    </button>
                    <button
                        onClick={() => setFilter('cpp')}
                        className={`px-2.5 py-1.5 rounded-lg font-medium transition-colors ${filter === 'cpp' ? 'bg-emerald-600 text-white font-semibold' : 'text-gray-400 hover:text-gray-200'}`}
                    >
                        C++
                    </button>
                </div>
            </div>

            {/* Streak & Activity Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-b border-gray-800/60">
                <div className="bg-gray-950/70 border border-gray-800/80 rounded-xl p-3.5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                        <Flame className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                        <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Current Streak</div>
                        <div className="text-lg font-extrabold text-white flex items-center gap-1.5">
                            {calendarData.currentStreak} <span className="text-xs font-normal text-gray-400">day{calendarData.currentStreak === 1 ? '' : 's'}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-950/70 border border-gray-800/80 rounded-xl p-3.5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                        <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Best Streak</div>
                        <div className="text-lg font-extrabold text-white flex items-center gap-1.5">
                            {calendarData.longestStreak} <span className="text-xs font-normal text-gray-400">day{calendarData.longestStreak === 1 ? '' : 's'}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-950/70 border border-gray-800/80 rounded-xl p-3.5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                        <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Active Days</div>
                        <div className="text-lg font-extrabold text-white flex items-center gap-1.5">
                            {calendarData.totalActiveDays} <span className="text-xs font-normal text-gray-400">day{calendarData.totalActiveDays === 1 ? '' : 's'}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-950/70 border border-gray-800/80 rounded-xl p-3.5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                        <Zap className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Total Submissions</div>
                        <div className="text-lg font-extrabold text-white flex items-center gap-1.5">
                            {calendarData.totalContributions} <span className="text-xs font-normal text-gray-400">solved</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Heatmap Grid */}
            <div className="pt-5">
                <div 
                    ref={containerRef}
                    className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent"
                >
                    <div className="min-w-[760px] select-none">
                        {/* Month Headers */}
                        <div className="flex text-[10px] text-gray-400 font-medium pl-8 mb-1.5 h-4 relative">
                            {calendarData.months.map((m, idx) => (
                                <span 
                                    key={`${m.name}-${idx}`}
                                    className="absolute"
                                    style={{ left: `${m.weekIndex * 14 + 32}px` }}
                                >
                                    {m.name}
                                </span>
                            ))}
                        </div>

                        {/* Calendar Body: Day of week labels + 52 Week Columns */}
                        <div className="flex gap-1 items-start">
                            {/* Day of Week Labels */}
                            <div className="flex flex-col gap-[3px] pr-2 pt-[1px] text-[9px] font-semibold text-gray-500">
                                {dayLabels.map((lbl, idx) => (
                                    <div key={idx} className="h-[11px] leading-[11px] text-right w-6">
                                        {lbl}
                                    </div>
                                ))}
                            </div>

                            {/* Week Columns */}
                            <div className="flex gap-[3px]">
                                {calendarData.weeks.map((week, wIdx) => (
                                    <div key={wIdx} className="flex flex-col gap-[3px]">
                                        {week.days.map((day, dIdx) => (
                                            <div
                                                key={day.date}
                                                onMouseEnter={(e) => {
                                                    if (!day.isFuture) {
                                                        const rect = e.currentTarget.getBoundingClientRect();
                                                        setHoveredDay({
                                                            day,
                                                            x: rect.left + rect.width / 2,
                                                            y: rect.top
                                                        });
                                                    }
                                                }}
                                                onMouseLeave={() => setHoveredDay(null)}
                                                className={`w-[11px] h-[11px] rounded-[2px] transition-all cursor-pointer ${getColorClass(day)}`}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer: Status message & Legend */}
                <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 pt-4 mt-2 border-t border-gray-800/60 gap-3">
                    <div className="flex items-center gap-2 text-xs">
                        {calendarData.todayCount > 0 ? (
                            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                {calendarData.todayCount} problem{calendarData.todayCount === 1 ? '' : 's'} solved today. Streak protected!
                            </span>
                        ) : (
                            <span className="text-amber-400/90 flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5" />
                                Solve a challenge today to advance your streak!
                            </span>
                        )}
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px]">
                        <span className="text-gray-500 mr-1">Less</span>
                        <div className="w-[11px] h-[11px] rounded-[2px] bg-gray-900 border border-gray-800" title="0 submissions"></div>
                        <div className="w-[11px] h-[11px] rounded-[2px] bg-emerald-950 border border-emerald-800/60" title="1 submission"></div>
                        <div className="w-[11px] h-[11px] rounded-[2px] bg-emerald-800 border border-emerald-700/60" title="2-3 submissions"></div>
                        <div className="w-[11px] h-[11px] rounded-[2px] bg-emerald-600 border border-emerald-500/60" title="4-5 submissions"></div>
                        <div className="w-[11px] h-[11px] rounded-[2px] bg-emerald-400 border border-emerald-300" title="6+ submissions"></div>
                        <span className="text-gray-500 ml-1">More</span>
                    </div>
                </div>
            </div>

            {/* Hover Tooltip Portal */}
            {hoveredDay && (
                <div 
                    className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full mb-2 px-3 py-1.5 bg-gray-900 text-gray-100 text-xs rounded-lg border border-gray-700 shadow-2xl backdrop-blur-md"
                    style={{ left: hoveredDay.x, top: hoveredDay.y - 8 }}
                >
                    <div className="font-semibold text-center whitespace-nowrap">{hoveredDay.day.label}</div>
                </div>
            )}
        </div>
    );
}
