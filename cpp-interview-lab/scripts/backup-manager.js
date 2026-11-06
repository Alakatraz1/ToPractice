#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const repoRoot = path.resolve(projectRoot, '..');
const backupDir = path.resolve(repoRoot, 'progress_backups');

const command = process.argv[2] || 'verify';

function getTimestamp() {
    const now = new Date();
    const pad = n => String(n).padStart(2, '0');
    return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
}

function findProgressFile() {
    const locations = [
        path.join(projectRoot, '.user_progress_backup.json'),
        path.join(repoRoot, '.user_progress_backup.json'),
        path.join(projectRoot, 'user_progress_backup.json'),
        path.join(repoRoot, 'user_progress_backup.json')
    ];
    for (const loc of locations) {
        if (fs.existsSync(loc)) return loc;
    }
    return null;
}

if (command === 'backup') {
    const timestamp = getTimestamp();
    const targetFolder = path.join(backupDir, `backup_${timestamp}`);
    fs.mkdirSync(targetFolder, { recursive: true });

    const srcFile = findProgressFile();
    let copied = false;
    if (srcFile) {
        const dest = path.join(targetFolder, '.user_progress_backup.json');
        fs.copyFileSync(srcFile, dest);
        console.log(`[BackupManager] Progress file copied from: ${srcFile}`);
        console.log(`[BackupManager] Saved to: ${dest}`);
        copied = true;
    } else {
        console.log('[BackupManager] No existing .user_progress_backup.json found (fresh installation or progress stored in browser).');
    }

    const meta = {
        timestamp,
        date: new Date().toISOString(),
        hadProgressFile: copied
    };
    fs.writeFileSync(path.join(targetFolder, 'backup_meta.json'), JSON.stringify(meta, null, 2), 'utf-8');

    // Also write a pointer to latest backup
    fs.writeFileSync(path.join(backupDir, 'latest_backup_path.txt'), targetFolder, 'utf-8');
    console.log(`[BackupManager] Backup completed in: ${targetFolder}`);
    process.exit(0);
}

if (command === 'restore') {
    let sourceFolder = process.argv[3];
    if (!sourceFolder && fs.existsSync(path.join(backupDir, 'latest_backup_path.txt'))) {
        sourceFolder = fs.readFileSync(path.join(backupDir, 'latest_backup_path.txt'), 'utf-8').trim();
    }

    if (!sourceFolder || !fs.existsSync(sourceFolder)) {
        // Find most recent folder in backupDir
        if (fs.existsSync(backupDir)) {
            const dirs = fs.readdirSync(backupDir).filter(f => f.startsWith('backup_')).sort().reverse();
            if (dirs.length > 0) {
                sourceFolder = path.join(backupDir, dirs[0]);
            }
        }
    }

    if (sourceFolder && fs.existsSync(sourceFolder)) {
        const candidate = path.join(sourceFolder, '.user_progress_backup.json');
        if (fs.existsSync(candidate)) {
            const destProject = path.join(projectRoot, '.user_progress_backup.json');
            const destRepo = path.join(repoRoot, '.user_progress_backup.json');
            fs.copyFileSync(candidate, destProject);
            fs.copyFileSync(candidate, destRepo);
            console.log(`[BackupManager] Restored progress file to: ${destProject}`);
            console.log(`[BackupManager] Restored progress file to: ${destRepo}`);
            process.exit(0);
        }
    }

    console.log('[BackupManager] No progress backup to restore or backup folder empty.');
    process.exit(0);
}

if (command === 'verify') {
    const file = findProgressFile();
    if (!file) {
        console.log('[BackupManager] Status: No local progress file found on disk.');
        console.log('                 (Browser localStorage will sync automatically on your next practice session).');
        process.exit(0);
    }

    try {
        const content = fs.readFileSync(file, 'utf-8');
        const data = JSON.parse(content);
        const cppSolved = data.cpp?.completedProblems?.length || 0;
        const pySolved = data.python?.completedProblems?.length || 0;
        const pyStreak = data.python?.streak?.currentStreak || 0;
        const cppStreak = data.cpp?.streak?.currentStreak || 0;

        console.log(`[BackupManager] Progress file verified: ${file}`);
        console.log(`                 - C++ Solved: ${cppSolved} problems (Streak: ${cppStreak} days)`);
        console.log(`                 - Python Solved: ${pySolved} problems (Streak: ${pyStreak} days)`);
        console.log(`                 - Last Saved: ${data.lastSavedAt || 'Unknown'}`);
    } catch (e) {
        console.error(`[BackupManager] Error parsing progress file: ${e.message}`);
        process.exit(1);
    }
}
