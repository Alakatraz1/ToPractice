import { NextResponse } from 'next/server';
import { compileAndRunCode, TestCase } from '@/lib/compiler';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { code, language = 'cpp', testCases, timeoutMs } = body;
        
        if (!code) {
            return NextResponse.json({ error: 'Code is required' }, { status: 400 });
        }
        
        if (!Array.isArray(testCases)) {
            return NextResponse.json({ error: 'testCases must be an array' }, { status: 400 });
        }
        
        const result = await compileAndRunCode(code, language, testCases as TestCase[], timeoutMs || 2000);
        
        return NextResponse.json(result);
    } catch (e: any) {
        return NextResponse.json({ status: 'system_error', message: e.message }, { status: 500 });
    }
}
