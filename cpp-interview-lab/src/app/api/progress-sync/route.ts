import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import * as path from 'path';

// Primary backup file path in project root
const BACKUP_FILE = path.resolve(process.cwd(), '.user_progress_backup.json');
const BACKUP_DIR = path.resolve(process.cwd(), '..', 'progress_backups');

export async function GET() {
    try {
        // Try reading primary backup file
        let content = '';
        try {
            content = await fs.readFile(BACKUP_FILE, 'utf-8');
        } catch {
            // Check parent dir
            const parentBackup = path.resolve(process.cwd(), '..', '.user_progress_backup.json');
            content = await fs.readFile(parentBackup, 'utf-8');
        }

        const data = JSON.parse(content);
        return NextResponse.json({ success: true, data });
    } catch {
        return NextResponse.json({ success: false, message: 'No backup found' }, { status: 404 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const payload = {
            ...body,
            lastSavedAt: new Date().toISOString()
        };

        const jsonStr = JSON.stringify(payload, null, 2);

        // 1. Write to local project backup
        await fs.writeFile(BACKUP_FILE, jsonStr, 'utf-8');

        // 2. Also write to root directory if accessible
        try {
            const rootBackup = path.resolve(process.cwd(), '..', '.user_progress_backup.json');
            await fs.writeFile(rootBackup, jsonStr, 'utf-8');
        } catch {}

        return NextResponse.json({ success: true, message: 'Progress backed up successfully' });
    } catch (e: any) {
        return NextResponse.json({ success: false, error: e.message }, { status: 500 });
    }
}
