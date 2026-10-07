import { allProblems } from '@/data/levels';
import ProblemClient from './ProblemClient';

export function generateStaticParams() {
    return allProblems.map(p => ({
        id: p.id,
    }));
}

export const instant = false;

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    
    return <ProblemClient problemId={id} />;
}
