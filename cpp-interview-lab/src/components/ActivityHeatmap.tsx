"use client";

import { useState, useEffect, useRef } from 'react';
import { Flame, Trophy, Calendar, CheckCircle2, Zap, Sparkles, ChevronDown } from 'lucide-react';
import { 
    getProgress, 
    getCombinedDailyActivity, 
    getYearCalendarData, 
    YearCalendarData,
    CalendarDay,
    getGlobalLanguage 
} from '@/lib/progress';

interface ActivityHeatmapProps {
    currentLanguage?: 'cpp' | 'python';
}

export function ActivityHeatmap({ currentLanguage }: ActivityHeatmapProps) {
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState<number | 'last12'>(currentYear);
    const [filter, setFilter] = useState<'current' | 'combined' | 'python' | 'cpp'>('current');
    const [calendarData, setCalendarData] = useState<YearCalendarData | null>(null);
    const [hoveredDay, setHoveredDay] = useState<{ day: CalendarDay; x: number; y: number } | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

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
            activityRecord = getProgress(activeTrack).dailyActivity || {};
        }
        
        const data = getYearCalendarData(selectedYear, activityRecord);
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
    }, [filter, activeTrack, selectedYear]);

    useEffect(() => {
        if (scrollRef.current && selectedYear === 'last12') {
            scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
        }
    }, [calendarData, selectedYear]);

    if (!calendarData) return null;

    const getFillColor = (day: CalendarDay) => {
        if (!day.isTargetYear) return 'transparent';
        switch (day.level) {
            case 1: return '#0e4429';
            case 2: return '#006d32';
            case 3: return '#26a641';
            case 4: return '#39d353';
            case 0:
            default:
                return day.isFuture ? '#161b2280' : '#161b22';
        }
    };

    const getStrokeColor = (day: CalendarDay) => {
        if (!day.isTargetYear) return 'transparent';
        if (day.level > 0) return 'rgba(255, 255, 255, 0.08)';
        return day.isFuture ? 'rgba(255, 255, 255, 0.04)' : '#30363d';
    };

    const boxSize = 10;
    const gap = 3;
    const step = boxSize + gap; // 13px
    const leftMargin = 32;
    const topMargin = 22;

    const totalWidth = leftMargin + calendarData.weeks.length * step + 16;
    const totalHeight = topMargin + 7 * step + 10;

    return (
        <div className="bg-[#0d1117] border border-[#30363d] rounded-2xl p-6 shadow-2xl relative font-sans text-gray-200">
            {/* Top Bar: Title, Count, Filters, Year Picker */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-5 border-b border-[#21262d] gap-4">
                <div>
                    <div className="flex items-center gap-3">
                        <h2 className="text-lg font-semibold text-gray-100 flex items-center gap-2">
                            <span className="text-emerald-400 font-bold">{calendarData.totalContributionsInYear}</span> 
                            {calendarData.totalContributionsInYear === 1 ? 'problem solved' : 'problems solved'} in {selectedYear === 'last12' ? 'the last 12 months' : selectedYear}
                        </h2>
                        {calendarData.currentStreak > 0 && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-500/10 text-orange-400 border border-orange-500/30">
                                <Flame className="w-3.5 h-3.5 fill-current animate-bounce" />
                                {calendarData.currentStreak} day streak
                            </span>
                        )}
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                        Exact daily activity log mapped directly to the calendar days of the year.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                    {/* Track Filter */}
                    <div className="flex items-center bg-[#161b22] border border-[#30363d] rounded-lg p-1 text-xs">
                        <button
                            onClick={() => setFilter('current')}
                            className={`px-2.5 py-1 rounded-md transition-colors ${filter === 'current' ? 'bg-[#238636] text-white font-semibold' : 'text-gray-400 hover:text-gray-200'}`}
                        >
                            Active Track ({activeTrack === 'python' ? 'Python' : 'C++'})
                        </button>
                        <button
                            onClick={() => setFilter('combined')}
                            className={`px-2.5 py-1 rounded-md transition-colors ${filter === 'combined' ? 'bg-[#238636] text-white font-semibold' : 'text-gray-400 hover:text-gray-200'}`}
                        >
                            Combined
                        </button>
                        <button
                            onClick={() => setFilter('python')}
                            className={`px-2 py-1 rounded-md transition-colors ${filter === 'python' ? 'bg-[#238636] text-white font-semibold' : 'text-gray-400 hover:text-gray-200'}`}
                        >
                            Python 3
                        </button>
                        <button
                            onClick={() => setFilter('cpp')}
                            className={`px-2 py-1 rounded-md transition-colors ${filter === 'cpp' ? 'bg-[#238636] text-white font-semibold' : 'text-gray-400 hover:text-gray-200'}`}
                        >
                            C++
                        </button>
                    </div>

                    {/* Year Selector */}
                    <div className="flex items-center bg-[#161b22] border border-[#30363d] rounded-lg p-1 text-xs">
                        <button
                            onClick={() => setSelectedYear(currentYear)}
                            className={`px-3 py-1 rounded-md transition-colors font-medium ${selectedYear === currentYear ? 'bg-[#1f6feb] text-white font-semibold' : 'text-gray-400 hover:text-gray-200'}`}
                        >
                            {currentYear}
                        </button>
                        <button
                            onClick={() => setSelectedYear(currentYear - 1)}
                            className={`px-3 py-1 rounded-md transition-colors font-medium ${selectedYear === currentYear - 1 ? 'bg-[#1f6feb] text-white font-semibold' : 'text-gray-400 hover:text-gray-200'}`}
                        >
                            {currentYear - 1}
                        </button>
                        <button
                            onClick={() => setSelectedYear('last12')}
                            className={`px-3 py-1 rounded-md transition-colors font-medium ${selectedYear === 'last12' ? 'bg-[#1f6feb] text-white font-semibold' : 'text-gray-400 hover:text-gray-200'}`}
                        >
                            Last 12 Months
                        </button>
                    </div>
                </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-4 border-b border-[#21262d] text-xs">
                <div className="flex items-center gap-2.5 bg-[#161b22]/60 p-2.5 rounded-lg border border-[#30363d]/60">
                    <Flame className="w-4 h-4 text-orange-400 fill-current" />
                    <div>
                        <span className="text-gray-400 block text-[10px] uppercase font-semibold">Current Streak</span>
                        <span className="text-sm font-bold text-gray-100">{calendarData.currentStreak} <span className="text-xs font-normal text-gray-400">days</span></span>
                    </div>
                </div>
                <div className="flex items-center gap-2.5 bg-[#161b22]/60 p-2.5 rounded-lg border border-[#30363d]/60">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    <div>
                        <span className="text-gray-400 block text-[10px] uppercase font-semibold">Longest Streak</span>
                        <span className="text-sm font-bold text-gray-100">{calendarData.longestStreak} <span className="text-xs font-normal text-gray-400">days</span></span>
                    </div>
                </div>
                <div className="flex items-center gap-2.5 bg-[#161b22]/60 p-2.5 rounded-lg border border-[#30363d]/60">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    <div>
                        <span className="text-gray-400 block text-[10px] uppercase font-semibold">Active Days</span>
                        <span className="text-sm font-bold text-gray-100">{calendarData.totalActiveDays} <span className="text-xs font-normal text-gray-400">days</span></span>
                    </div>
                </div>
                <div className="flex items-center gap-2.5 bg-[#161b22]/60 p-2.5 rounded-lg border border-[#30363d]/60">
                    <Zap className="w-4 h-4 text-blue-400" />
                    <div>
                        <span className="text-gray-400 block text-[10px] uppercase font-semibold">Today&apos;s Solves</span>
                        <span className="text-sm font-bold text-gray-100">{calendarData.todayCount} <span className="text-xs font-normal text-gray-400">problems</span></span>
                    </div>
                </div>
            </div>

            {/* GitHub-style SVG Contribution Graph */}
            <div className="pt-4">
                <div 
                    ref={scrollRef}
                    className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#30363d] scrollbar-track-transparent"
                >
                    <div style={{ minWidth: `${totalWidth}px` }} className="select-none py-1">
                        <svg width={totalWidth} height={totalHeight} className="overflow-visible block">
                            {/* Day of Week Labels (Left) */}
                            <text x="8" y={topMargin + 1 * step + 8} fill="#7d8590" fontSize="9" fontWeight="500">Mon</text>
                            <text x="8" y={topMargin + 3 * step + 8} fill="#7d8590" fontSize="9" fontWeight="500">Wed</text>
                            <text x="8" y={topMargin + 5 * step + 8} fill="#7d8590" fontSize="9" fontWeight="500">Fri</text>

                            {/* Month Labels (Top) - positioned directly at the column where the month begins */}
                            {calendarData.monthLabels.map((m, idx) => (
                                <text
                                    key={`${m.name}-${idx}`}
                                    x={leftMargin + m.colIndex * step}
                                    y={12}
                                    fill="#7d8590"
                                    fontSize="10"
                                    fontWeight="500"
                                >
                                    {m.name}
                                </text>
                            ))}

                            {/* Week Columns of Day Boxes */}
                            {calendarData.weeks.map((week, colIdx) => (
                                <g key={colIdx} transform={`translate(${leftMargin + colIdx * step}, ${topMargin})`}>
                                    {week.days.map((day, rowIdx) => {
                                        if (!day.isTargetYear) return null;
                                        return (
                                            <rect
                                                key={day.date}
                                                x={0}
                                                y={rowIdx * step}
                                                width={boxSize}
                                                height={boxSize}
                                                rx={2}
                                                ry={2}
                                                fill={getFillColor(day)}
                                                stroke={getStrokeColor(day)}
                                                strokeWidth={1}
                                                className="transition-all cursor-pointer hover:stroke-white hover:stroke-[1.5]"
                                                onMouseEnter={(e) => {
                                                    const rect = e.currentTarget.getBoundingClientRect();
                                                    setHoveredDay({
                                                        day,
                                                        x: rect.left + rect.width / 2,
                                                        y: rect.top
                                                    });
                                                }}
                                                onMouseLeave={() => setHoveredDay(null)}
                                            />
                                        );
                                    })}
                                </g>
                            ))}
                        </svg>
                    </div>
                </div>

                {/* Footer Bar: Tip & Authentic GitHub Legend */}
                <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-[#7d8590] pt-4 mt-1 border-t border-[#21262d] gap-3">
                    <div className="flex items-center gap-2">
                        {calendarData.todayCount > 0 ? (
                            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                {calendarData.todayCount} problem{calendarData.todayCount === 1 ? '' : 's'} solved today. Streak active!
                            </span>
                        ) : (
                            <span className="text-gray-400 flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                                Solve a challenge today to maintain your daily streak.
                            </span>
                        )}
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] text-[#7d8590]">
                        <span className="mr-1">Less</span>
                        <div className="w-[10px] h-[10px] rounded-[2px] bg-[#161b22] border border-[#30363d]" title="0 contributions"></div>
                        <div className="w-[10px] h-[10px] rounded-[2px] bg-[#0e4429] border border-[rgba(255,255,255,0.08)]" title="1-2 contributions"></div>
                        <div className="w-[10px] h-[10px] rounded-[2px] bg-[#006d32] border border-[rgba(255,255,255,0.08)]" title="3-5 contributions"></div>
                        <div className="w-[10px] h-[10px] rounded-[2px] bg-[#26a641] border border-[rgba(255,255,255,0.08)]" title="6-8 contributions"></div>
                        <div className="w-[10px] h-[10px] rounded-[2px] bg-[#39d353] border border-[rgba(255,255,255,0.08)]" title="9+ contributions"></div>
                        <span className="ml-1">More</span>
                    </div>
                </div>
            </div>

            {/* Hover Tooltip Portal */}
            {hoveredDay && (
                <div 
                    className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full mb-2 px-3 py-1.5 bg-[#161b22] text-gray-100 text-xs rounded-md border border-[#30363d] shadow-2xl"
                    style={{ left: hoveredDay.x, top: hoveredDay.y - 8 }}
                >
                    <div className="font-medium text-center whitespace-nowrap">{hoveredDay.day.label}</div>
                </div>
            )}
        </div>
    );
}
