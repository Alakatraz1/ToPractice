import { NextResponse } from 'next/server';
import { compileAndRunCpp, TestCase } from '@/lib/compiler';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { code, testCases, timeoutMs } = body;
        
        if (!code) {
            return NextResponse.json({ error: 'Code is required' }, { status: 400 });
        }
        
        if (!Array.isArray(testCases)) {
            return NextResponse.json({ error: 'testCases must be an array' }, { status: 400 });
        }
        
        const result = await compileAndRunCpp(code, testCases as TestCase[], timeoutMs || 2000);
        
        return NextResponse.json(result);
    } catch (e: any) {
        return NextResponse.json({ status: 'system_error', message: e.message }, { status: 500 });
    }
}
