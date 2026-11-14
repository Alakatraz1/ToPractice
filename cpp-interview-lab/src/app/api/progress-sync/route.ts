import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import * as path from 'path';
import * as os from 'os';
import { mergeUserProgress, UserProgress } from '@/lib/progress';

interface BackupPayload {
    cpp?: UserProgress;
    python?: UserProgress;
    language?: 'cpp' | 'python';
    lastSavedAt?: string;
    version?: string;
}

const PROJECT_BACKUP_FILE = path.resolve(process.cwd(), '.user_progress_backup.json');
const REPO_BACKUP_FILE = path.resolve(process.cwd(), '..', '.user_progress_backup.json');
const HISTORY_BACKUP_DIR = path.resolve(process.cwd(), '..', 'progress_backups');

function getHomeBackupFile(): string | null {
    try {
        const home = os.homedir();
        if (home) {
            return path.resolve(home, '.cpp_interview_lab_backup', 'user_progress_backup.json');
        }
    } catch {}
    return null;
}

async function readAndMergeAllDiskBackups(): Promise<BackupPayload | null> {
    const candidateFiles: string[] = [PROJECT_BACKUP_FILE, REPO_BACKUP_FILE];
    const homeFile = getHomeBackupFile();
    if (homeFile) candidateFiles.push(homeFile);

    let mergedCpp: UserProgress | null = null;
    let mergedPython: UserProgress | null = null;
    let lastLanguage: 'cpp' | 'python' = 'cpp';
    let latestTimestamp = '';
    let foundAny = false;

    // 1. Read all candidate static files
    for (const filePath of candidateFiles) {
        try {
            const content = await fs.readFile(/*turbopackIgnore: true*/ filePath, 'utf-8');
            const data = JSON.parse(content);
            if (data && (data.cpp || data.python || data.completedProblems)) {
                foundAny = true;
                const incomingCpp = data.cpp || (data.completedProblems ? data : null);
                const incomingPython = data.python || null;

                mergedCpp = mergeUserProgress(mergedCpp, incomingCpp, 'cpp');
                mergedPython = mergeUserProgress(mergedPython, incomingPython, 'python');

                if (data.language) lastLanguage = data.language;
                if (data.lastSavedAt && data.lastSavedAt > latestTimestamp) {
                    latestTimestamp = data.lastSavedAt;
                }
            }
        } catch {}
    }

    // 2. Also check history directory for recent backup snapshots
    try {
        const entries = await fs.readdir(/*turbopackIgnore: true*/ HISTORY_BACKUP_DIR);
        const jsonEntries = entries.filter(e => e.endsWith('.json')).slice(-10);
        for (const entry of jsonEntries) {
            try {
                const snapshotPath = path.resolve(HISTORY_BACKUP_DIR, entry);
                const content = await fs.readFile(/*turbopackIgnore: true*/ snapshotPath, 'utf-8');
                const data = JSON.parse(content);
                if (data && (data.cpp || data.python)) {
                    foundAny = true;
                    mergedCpp = mergeUserProgress(mergedCpp, data.cpp, 'cpp');
                    mergedPython = mergeUserProgress(mergedPython, data.python, 'python');
                }
            } catch {}
        }
    } catch {}

    if (!foundAny) return null;

    return {
        cpp: mergedCpp || undefined,
        python: mergedPython || undefined,
        language: lastLanguage,
        lastSavedAt: latestTimestamp || new Date().toISOString(),
        version: '2.0'
    };
}

async function writeToAllLocations(payload: BackupPayload): Promise<void> {
    const jsonStr = JSON.stringify(payload, null, 2);
    const targetFiles: string[] = [PROJECT_BACKUP_FILE, REPO_BACKUP_FILE];
    const homeFile = getHomeBackupFile();
    if (homeFile) targetFiles.push(homeFile);

    // 1. Write to all primary target files
    for (const filePath of targetFiles) {
        try {
            const dir = path.dirname(filePath);
            await fs.mkdir(dir, { recursive: true });
            await fs.writeFile(filePath, jsonStr, 'utf-8');
        } catch {}
    }

    // 2. Archive rolling snapshots in progress_backups
    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, '0');
    const timestamp = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;

    try {
        await fs.mkdir(HISTORY_BACKUP_DIR, { recursive: true });
        const snapshotPath = path.resolve(HISTORY_BACKUP_DIR, `backup_${timestamp}.json`);
        await fs.writeFile(snapshotPath, jsonStr, 'utf-8');

        // Keep only the most recent 20 backups
        const files = (await fs.readdir(HISTORY_BACKUP_DIR))
            .filter(f => f.startsWith('backup_') && f.endsWith('.json'))
            .sort();
        if (files.length > 20) {
            const toRemove = files.slice(0, files.length - 20);
            for (const file of toRemove) {
                await fs.unlink(path.resolve(HISTORY_BACKUP_DIR, file)).catch(() => {});
            }
        }
    } catch {}
}

export async function GET() {
    try {
        const mergedData = await readAndMergeAllDiskBackups();
        if (!mergedData) {
            return NextResponse.json({ success: false, message: 'No backup found' }, { status: 404 });
        }

        // Ensure all locations have the consolidated data
        await writeToAllLocations(mergedData);

        return NextResponse.json({ success: true, data: mergedData });
    } catch (e: any) {
        return NextResponse.json({ success: false, error: e.message }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // 1. Read existing state on disk from all locations
        const existingData = await readAndMergeAllDiskBackups();

        // 2. Merge incoming client data with existing on-disk data
        // This guarantees that an empty or partial incoming payload can NEVER overwrite existing solved problems!
        const mergedCpp = mergeUserProgress(existingData?.cpp, body.cpp, 'cpp');
        const mergedPython = mergeUserProgress(existingData?.python, body.python, 'python');
        const finalLanguage = body.language || existingData?.language || 'cpp';

        const goldenPayload: BackupPayload = {
            cpp: mergedCpp,
            python: mergedPython,
            language: finalLanguage,
            lastSavedAt: new Date().toISOString(),
            version: '2.0'
        };

        // 3. Write golden state to all persistent locations
        await writeToAllLocations(goldenPayload);

        return NextResponse.json({
            success: true,
            message: 'Progress backed up and merged successfully',
            data: goldenPayload
        });
    } catch (e: any) {
        return NextResponse.json({ success: false, error: e.message }, { status: 500 });
    }
}
