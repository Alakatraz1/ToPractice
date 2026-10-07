import { NextResponse } from 'next/server';
import { checkCompilerStatus } from '@/lib/compiler';

export async function GET() {
    try {
        const status = await checkCompilerStatus();
        return NextResponse.json(status);
    } catch (e: any) {
        return NextResponse.json({ available: false, version: '' });
    }
}
