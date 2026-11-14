"use client";

import { useEffect } from 'react';
import { restoreProgressFromServer } from '@/lib/progress';

export function ProgressSyncProvider() {
    useEffect(() => {
        // 1. Initial background restore & bidirectional merge on app load
        restoreProgressFromServer();

        // 2. Automatically sync when the browser tab gains focus
        // (e.g., student returned from terminal after git pull / update script)
        const handleFocus = () => {
            restoreProgressFromServer();
        };

        window.addEventListener('focus', handleFocus);
        return () => window.removeEventListener('focus', handleFocus);
    }, []);

    return null;
}
