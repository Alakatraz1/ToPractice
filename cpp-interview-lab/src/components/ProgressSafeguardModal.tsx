"use client";

import { useState, useRef } from 'react';
import { 
    Shield, 
    Download, 
    Upload, 
    RefreshCw, 
    CheckCircle2, 
    X, 
    HardDrive, 
    Database, 
    Terminal, 
    FileJson, 
    AlertCircle 
} from 'lucide-react';
import { 
    getProgress, 
    exportProgressAsJSON, 
    importProgressFromJSON, 
    restoreProgressFromServer 
} from '@/lib/progress';

interface ProgressSafeguardModalProps {
    className?: string;
    variant?: 'button' | 'badge';
}

export function ProgressSafeguardModal({ className = '', variant = 'button' }: ProgressSafeguardModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [syncing, setSyncing] = useState(false);
    const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const cppProg = typeof window !== 'undefined' ? getProgress('cpp') : null;
    const pyProg = typeof window !== 'undefined' ? getProgress('python') : null;

    const cppCount = cppProg?.completedProblems?.length || 0;
    const pyCount = pyProg?.completedProblems?.length || 0;
    const totalCount = cppCount + pyCount;

    const showNotification = (type: 'success' | 'error', message: string) => {
        setNotification({ type, message });
        setTimeout(() => setNotification(null), 4000);
    };

    const handleExport = () => {
        try {
            const jsonStr = exportProgressAsJSON();
            const blob = new Blob([jsonStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            const dateStr = new Date().toISOString().split('T')[0];
            a.href = url;
            a.download = `interview-lab-progress-${dateStr}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showNotification('success', 'Progress exported successfully! Keep this JSON file safe.');
        } catch (e: any) {
            showNotification('error', `Failed to export progress: ${e.message}`);
        }
    };

    const handleImportClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const content = event.target?.result as string;
            if (!content) return;

            const res = importProgressFromJSON(content);
            if (res.success) {
                showNotification('success', `${res.message} (${res.restoredCpp} C++, ${res.restoredPy} Python)`);
            } else {
                showNotification('error', res.message);
            }
        };
        reader.readAsText(file);
    };

    const handleForceSync = async () => {
        setSyncing(true);
        try {
            const ok = await restoreProgressFromServer();
            if (ok) {
                showNotification('success', 'Bidirectional sync complete: browser and on-disk backups are identical!');
            } else {
                showNotification('error', 'Could not reach local backup server. Check if the dev server is running.');
            }
        } catch (e: any) {
            showNotification('error', `Sync error: ${e.message}`);
        } finally {
            setSyncing(false);
        }
    };

    return (
        <>
            {variant === 'badge' ? (
                <button
                    onClick={() => setIsOpen(true)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 hover:bg-emerald-900/60 transition-all ${className}`}
                    title="Click to manage progress backups"
                >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <Shield className="w-3.5 h-3.5" />
                    <span>Protected ({totalCount})</span>
                </button>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-700 hover:border-emerald-500/50 transition-all shadow-sm ${className}`}
                    title="Backup or restore your student progress"
                >
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Backup & Restore</span>
                    {totalCount > 0 && (
                        <span className="bg-emerald-950 text-emerald-400 border border-emerald-800/80 px-1.5 py-0.2 rounded text-[10px] font-mono">
                            {totalCount}
                        </span>
                    )}
                </button>
            )}

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
                    <div 
                        className="bg-gray-950 border border-gray-800 rounded-2xl w-full max-w-lg p-6 shadow-2xl relative space-y-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between border-b border-gray-800 pb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-800/60 text-emerald-400">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        Student Progress Safeguard
                                    </h3>
                                    <p className="text-xs text-gray-400">
                                        Safe across Git pulls, branches, and server restarts
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-gray-900 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Status notification */}
                        {notification && (
                            <div className={`p-3 rounded-xl text-xs flex items-center gap-2 border ${
                                notification.type === 'success' 
                                    ? 'bg-emerald-950/40 text-emerald-300 border-emerald-800/60' 
                                    : 'bg-red-950/40 text-red-300 border-red-800/60'
                            }`}>
                                {notification.type === 'success' ? (
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                ) : (
                                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                                )}
                                <span>{notification.message}</span>
                            </div>
                        )}

                        {/* Current Status Cards */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-gray-900/80 border border-gray-800 p-3.5 rounded-xl space-y-1">
                                <div className="text-[11px] font-bold uppercase text-blue-400 flex items-center gap-1.5">
                                    <Terminal className="w-3.5 h-3.5" /> C++ Track
                                </div>
                                <div className="text-2xl font-extrabold text-white">
                                    {cppCount} <span className="text-xs font-normal text-gray-400">solved</span>
                                </div>
                                <div className="text-[11px] text-gray-400 font-mono">
                                    Streak: {cppProg?.streak?.currentStreak || 0} days
                                </div>
                            </div>

                            <div className="bg-gray-900/80 border border-gray-800 p-3.5 rounded-xl space-y-1">
                                <div className="text-[11px] font-bold uppercase text-emerald-400 flex items-center gap-1.5">
                                    <Terminal className="w-3.5 h-3.5" /> Python Track
                                </div>
                                <div className="text-2xl font-extrabold text-white">
                                    {pyCount} <span className="text-xs font-normal text-gray-400">solved</span>
                                </div>
                                <div className="text-[11px] text-gray-400 font-mono">
                                    Streak: {pyProg?.streak?.currentStreak || 0} days
                                </div>
                            </div>
                        </div>

                        {/* Redundancy Info */}
                        <div className="bg-gray-900/50 border border-gray-800/80 rounded-xl p-3.5 space-y-2 text-xs text-gray-300">
                            <div className="flex items-center gap-2 text-emerald-400 font-bold">
                                <CheckCircle2 className="w-4 h-4" /> Multi-Layer Redundancy Active
                            </div>
                            <ul className="space-y-1 text-gray-400 pl-4 list-disc text-[11px]">
                                <li><strong>Browser LocalStorage:</strong> Instant client-side persistence</li>
                                <li><strong>Project & Repo Backup:</strong> <code className="text-gray-300">.user_progress_backup.json</code></li>
                                <li><strong>OS Home Directory:</strong> <code className="text-gray-300">~/.cpp_interview_lab_backup/</code> (survives re-cloning)</li>
                                <li><strong>Bidirectional Merging:</strong> Empty states can never overwrite solved code</li>
                            </ul>
                        </div>

                        {/* Actions */}
                        <div className="space-y-2 pt-2">
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={handleExport}
                                    className="flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                                >
                                    <Download className="w-4 h-4" /> Export (.json)
                                </button>

                                <button
                                    onClick={handleImportClick}
                                    className="flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-700 hover:border-gray-600 rounded-xl text-xs font-bold transition-all"
                                >
                                    <Upload className="w-4 h-4" /> Import / Restore
                                </button>
                            </div>

                            <button
                                onClick={handleForceSync}
                                disabled={syncing}
                                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-900/60 hover:bg-gray-800/80 text-gray-300 border border-gray-800 rounded-xl text-xs font-semibold transition-all disabled:opacity-50"
                            >
                                <RefreshCw className={`w-3.5 h-3.5 ${syncing ? 'animate-spin text-emerald-400' : ''}`} />
                                {syncing ? 'Synchronizing with disk...' : 'Force Sync with On-Disk Backup'}
                            </button>
                        </div>

                        {/* Hidden file input for import */}
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept=".json,application/json"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
