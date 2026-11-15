"use client";

import React, { useRef, useEffect } from 'react';
import Editor, { loader } from '@monaco-editor/react';
import { EditorErrorBoundary } from './EditorErrorBoundary';

// Pin Monaco Editor to stable 0.52.2 to prevent the 0.55.1 view-line renderText/disposal race condition
loader.config({
    paths: {
        vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs',
    },
});

interface CodeEditorProps {
    code: string;
    language?: string;
    problemId?: string;
    onChange: (value: string) => void;
    onRun?: () => void;
    readOnly?: boolean;
}

export function CodeEditor({ 
    code, 
    language = 'cpp', 
    problemId = 'default',
    onChange, 
    onRun, 
    readOnly = false 
}: CodeEditorProps) {
    const editorRef = useRef<any>(null);
    const onRunRef = useRef(onRun);

    useEffect(() => {
        onRunRef.current = onRun;
    }, [onRun]);

    useEffect(() => {
        return () => {
            if (editorRef.current) {
                try {
                    editorRef.current = null;
                } catch {}
            }
        };
    }, []);

    function handleEditorDidMount(editor: any, monaco: any) {
        editorRef.current = editor;
        
        try {
            // Add keyboard shortcut for running code (Cmd/Ctrl + Enter)
            editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
                if (onRunRef.current) {
                    onRunRef.current();
                }
            });
        } catch {}

        editor.onDidDispose(() => {
            if (editorRef.current === editor) {
                editorRef.current = null;
            }
        });
    }

    const safeProblemId = (problemId || 'current').replace(/[^a-zA-Z0-9_-]/g, '_');
    const modelPath = `problem_${safeProblemId}.${language === 'python' ? 'py' : 'cpp'}`;

    return (
        <EditorErrorBoundary fallbackCode={code}>
            <div className="w-full h-full border border-gray-700 rounded-md overflow-hidden bg-gray-950">
                <Editor
                    key={`editor-${safeProblemId}-${language}`}
                    path={modelPath}
                    height="100%"
                    language={language}
                    defaultLanguage={language}
                    theme="vs-dark"
                    value={code}
                    onChange={(value) => onChange(value || '')}
                    onMount={handleEditorDidMount}
                    options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                        scrollBeyondLastLine: false,
                        smoothScrolling: true,
                        padding: { top: 16, bottom: 16 },
                        readOnly: readOnly,
                        automaticLayout: true,
                    }}
                />
            </div>
        </EditorErrorBoundary>
    );
}
