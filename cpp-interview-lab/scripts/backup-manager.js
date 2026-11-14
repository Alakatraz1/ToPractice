#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const projectRoot = path.resolve(__dirname, '..');
const repoRoot = path.resolve(projectRoot, '..');
const backupDir = path.resolve(repoRoot, 'progress_backups');
const homeBackupDir = path.resolve(os.homedir(), '.cpp_interview_lab_backup');

const command = process.argv[2] || 'verify';

function getTimestamp() {
    const now = new Date();
    const pad = n => String(n).padStart(2, '0');
    return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
}

function getAllCandidateLocations() {
    const locations = [
        path.join(projectRoot, '.user_progress_backup.json'),
        path.join(repoRoot, '.user_progress_backup.json'),
        path.join(projectRoot, 'user_progress_backup.json'),
        path.join(repoRoot, 'user_progress_backup.json'),
        path.join(homeBackupDir, 'user_progress_backup.json')
    ];
    return Array.from(new Set(locations));
}

function mergeSingleTrack(a, b, defaultProblem) {
    const resA = a || {};
    const resB = b || {};

    const completedSet = new Set();
    for (const p of resA.completedProblems || []) if (p) completedSet.add(p);
    for (const p of resB.completedProblems || []) if (p) completedSet.add(p);
    const completedProblems = Array.from(completedSet);

    const solutionsSet = new Set();
    for (const s of resA.solutionsViewed || []) if (s) solutionsSet.add(s);
    for (const s of resB.solutionsViewed || []) if (s) solutionsSet.add(s);
    const solutionsViewed = Array.from(solutionsSet);

    const attempts = Object.assign({}, resA.attempts || {});
    for (const [id, count] of Object.entries(resB.attempts || {})) {
        attempts[id] = Math.max(attempts[id] || 0, count || 0);
    }

    const hintsUsed = Object.assign({}, resA.hintsUsed || {});
    for (const [id, count] of Object.entries(resB.hintsUsed || {})) {
        hintsUsed[id] = Math.max(hintsUsed[id] || 0, count || 0);
    }

    const savedCode = Object.assign({}, resA.savedCode || {});
    for (const [id, code] of Object.entries(resB.savedCode || {})) {
        if (typeof code === 'string' && code.trim().length > 0) {
            const cur = savedCode[id];
            if (!cur || cur.trim().length === 0 || code.trim().length > cur.trim().length) {
                savedCode[id] = code;
            }
        }
    }

    const mastery = Object.assign({}, resA.mastery || {});
    for (const [concept, score] of Object.entries(resB.mastery || {})) {
        mastery[concept] = Math.max(mastery[concept] || 0, score || 0);
    }

    const dailyActivity = Object.assign({}, resA.dailyActivity || {});
    for (const [date, count] of Object.entries(resB.dailyActivity || {})) {
        dailyActivity[date] = Math.max(dailyActivity[date] || 0, count || 0);
    }

    const qualityRank = { independent: 3, hint_assisted: 2, solution_assisted: 1 };
    const solveQuality = Object.assign({}, resA.solveQuality || {});
    for (const [id, q] of Object.entries(resB.solveQuality || {})) {
        if (!solveQuality[id] || (qualityRank[q] || 0) > (qualityRank[solveQuality[id]] || 0)) {
            solveQuality[id] = q;
        }
    }

    const timeA = resA.lastOpenedAt ? new Date(resA.lastOpenedAt).getTime() : 0;
    const timeB = resB.lastOpenedAt ? new Date(resB.lastOpenedAt).getTime() : 0;
    const lastOpenedAt = timeA >= timeB && resA.lastOpenedAt ? resA.lastOpenedAt : (resB.lastOpenedAt || new Date().toISOString());
    const currentProblem = (timeA >= timeB ? resA.currentProblem : resB.currentProblem) || resA.currentProblem || resB.currentProblem || defaultProblem;
    const currentLevel = (timeA >= timeB ? resA.currentLevel : resB.currentLevel) || resA.currentLevel || resB.currentLevel || 'level-01';

    const streakA = resA.streak || {};
    const streakB = resB.streak || {};
    const streak = {
        currentStreak: Math.max(streakA.currentStreak || 0, streakB.currentStreak || 0),
        longestStreak: Math.max(streakA.longestStreak || 0, streakB.longestStreak || 0),
        totalActiveDays: Math.max(streakA.totalActiveDays || 0, streakB.totalActiveDays || 0),
        totalContributions: Math.max(streakA.totalContributions || 0, streakB.totalContributions || 0),
        lastActiveDate: streakA.lastActiveDate || streakB.lastActiveDate || ''
    };

    return {
        currentLevel,
        currentProblem,
        completedProblems,
        attempts,
        hintsUsed,
        solutionsViewed,
        savedCode,
        mastery,
        solveQuality,
        dailyActivity,
        streak,
        lastOpenedAt
    };
}

function mergePayloads(a, b) {
    const resA = a || {};
    const resB = b || {};

    const cppA = resA.cpp || (resA.completedProblems ? resA : null);
    const cppB = resB.cpp || (resB.completedProblems ? resB : null);
    const pyA = resA.python || null;
    const pyB = resB.python || null;

    const mergedCpp = mergeSingleTrack(cppA, cppB, 'prob-01-01');
    const mergedPy = mergeSingleTrack(pyA, pyB, 'py-prob-01-01');

    return {
        version: '2.0',
        language: resA.language || resB.language || 'cpp',
        lastSavedAt: new Date().toISOString(),
        cpp: mergedCpp,
        python: mergedPy
    };
}

function installGitHooks() {
    const gitDir = path.join(repoRoot, '.git');
    if (!fs.existsSync(gitDir)) return;

    const hooksDir = path.join(gitDir, 'hooks');
    try {
        fs.mkdirSync(hooksDir, { recursive: true });
        const hookScript = `#!/bin/sh\n# Auto-preserve student progress across git pull & checkout\nnode cpp-interview-lab/scripts/backup-manager.js auto-sync > /dev/null 2>&1 || true\n`;

        for (const hookName of ['post-merge', 'post-checkout']) {
            const hookFile = path.join(hooksDir, hookName);
            fs.writeFileSync(hookFile, hookScript, { encoding: 'utf-8', mode: 0o755 });
        }
    } catch {}
}

if (command === 'auto-sync') {
    let consolidated = null;
    const candidatePaths = getAllCandidateLocations();

    // 1. Read and merge all existing backup files
    for (const loc of candidatePaths) {
        if (fs.existsSync(loc)) {
            try {
                const data = JSON.parse(fs.readFileSync(loc, 'utf-8'));
                consolidated = mergePayloads(consolidated, data);
            } catch {}
        }
    }

    // 2. Also check progress_backups directory
    if (fs.existsSync(backupDir)) {
        try {
            const dirs = fs.readdirSync(backupDir).filter(f => f.startsWith('backup_')).slice(-10);
            for (const d of dirs) {
                const candidate = path.join(backupDir, d, '.user_progress_backup.json');
                if (fs.existsSync(candidate)) {
                    try {
                        const data = JSON.parse(fs.readFileSync(candidate, 'utf-8'));
                        consolidated = mergePayloads(consolidated, data);
                    } catch {}
                }
            }
        } catch {}
    }

    if (!consolidated) {
        console.log('[BackupManager] auto-sync: Fresh workspace (no progress found yet).');
        installGitHooks();
        process.exit(0);
    }

    const jsonStr = JSON.stringify(consolidated, null, 2);

    // Write back to all candidate locations
    for (const loc of candidatePaths) {
        try {
            fs.mkdirSync(path.dirname(loc), { recursive: true });
            fs.writeFileSync(loc, jsonStr, 'utf-8');
        } catch {}
    }

    // Archive snapshot in progress_backups
    const timestamp = getTimestamp();
    const snapshotFolder = path.join(backupDir, `backup_${timestamp}`);
    try {
        fs.mkdirSync(snapshotFolder, { recursive: true });
        fs.writeFileSync(path.join(snapshotFolder, '.user_progress_backup.json'), jsonStr, 'utf-8');
        fs.writeFileSync(path.join(backupDir, 'latest_backup_path.txt'), snapshotFolder, 'utf-8');
    } catch {}

    installGitHooks();

    const cppCount = consolidated.cpp?.completedProblems?.length || 0;
    const pyCount = consolidated.python?.completedProblems?.length || 0;
    console.log(`[BackupManager] auto-sync complete: ${cppCount} C++ problems, ${pyCount} Python problems preserved.`);
    process.exit(0);
}

if (command === 'backup') {
    let consolidated = null;
    for (const loc of getAllCandidateLocations()) {
        if (fs.existsSync(loc)) {
            try {
                const data = JSON.parse(fs.readFileSync(loc, 'utf-8'));
                consolidated = mergePayloads(consolidated, data);
            } catch {}
        }
    }

    const timestamp = getTimestamp();
    const targetFolder = path.join(backupDir, `backup_${timestamp}`);
    fs.mkdirSync(targetFolder, { recursive: true });

    if (consolidated) {
        const jsonStr = JSON.stringify(consolidated, null, 2);
        fs.writeFileSync(path.join(targetFolder, '.user_progress_backup.json'), jsonStr, 'utf-8');
        fs.writeFileSync(path.join(backupDir, 'latest_backup_path.txt'), targetFolder, 'utf-8');
        console.log(`[BackupManager] Backup completed in: ${targetFolder}`);
    } else {
        console.log('[BackupManager] No progress found to backup.');
    }
    process.exit(0);
}

if (command === 'restore') {
    let sourceFolder = process.argv[3];
    if (!sourceFolder && fs.existsSync(path.join(backupDir, 'latest_backup_path.txt'))) {
        sourceFolder = fs.readFileSync(path.join(backupDir, 'latest_backup_path.txt'), 'utf-8').trim();
    }

    if (!sourceFolder || !fs.existsSync(sourceFolder)) {
        if (fs.existsSync(backupDir)) {
            const dirs = fs.readdirSync(backupDir).filter(f => f.startsWith('backup_')).sort().reverse();
            if (dirs.length > 0) sourceFolder = path.join(backupDir, dirs[0]);
        }
    }

    if (sourceFolder && fs.existsSync(sourceFolder)) {
        const candidate = path.join(sourceFolder, '.user_progress_backup.json');
        if (fs.existsSync(candidate)) {
            const data = JSON.parse(fs.readFileSync(candidate, 'utf-8'));
            const jsonStr = JSON.stringify(data, null, 2);
            for (const loc of getAllCandidateLocations()) {
                try {
                    fs.mkdirSync(path.dirname(loc), { recursive: true });
                    fs.writeFileSync(loc, jsonStr, 'utf-8');
                } catch {}
            }
            console.log(`[BackupManager] Restored progress from: ${candidate}`);
            process.exit(0);
        }
    }

    console.log('[BackupManager] No backup found to restore.');
    process.exit(0);
}

if (command === 'verify') {
    let found = null;
    let foundLoc = '';
    for (const loc of getAllCandidateLocations()) {
        if (fs.existsSync(loc)) {
            try {
                const data = JSON.parse(fs.readFileSync(loc, 'utf-8'));
                found = mergePayloads(found, data);
                foundLoc = loc;
            } catch {}
        }
    }

    if (!found) {
        console.log('[BackupManager] Status: No local progress file found on disk.');
        process.exit(0);
    }

    const cppSolved = found.cpp?.completedProblems?.length || 0;
    const pySolved = found.python?.completedProblems?.length || 0;
    const cppStreak = found.cpp?.streak?.currentStreak || 0;
    const pyStreak = found.python?.streak?.currentStreak || 0;

    console.log(`[BackupManager] Progress verified (from ${foundLoc}):`);
    console.log(`                 - C++ Solved: ${cppSolved} problems (Streak: ${cppStreak} days)`);
    console.log(`                 - Python Solved: ${pySolved} problems (Streak: ${pyStreak} days)`);
    console.log(`                 - Last Saved: ${found.lastSavedAt || 'Unknown'}`);
    process.exit(0);
}
