"use client";

import React, { useRef } from 'react';
import Editor, { useMonaco } from '@monaco-editor/react';

interface CodeEditorProps {
    code: string;
    onChange: (value: string) => void;
    onRun?: () => void;
    readOnly?: boolean;
}

export function CodeEditor({ code, onChange, onRun, readOnly = false }: CodeEditorProps) {
    const editorRef = useRef<any>(null);

    function handleEditorDidMount(editor: any, monaco: any) {
        editorRef.current = editor;
        
        // Add keyboard shortcut for running code (Cmd/Ctrl + Enter)
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
            if (onRun) {
                onRun();
            }
        });
    }

    return (
        <div className="w-full h-full border border-gray-700 rounded-md overflow-hidden">
            <Editor
                height="100%"
                defaultLanguage="cpp"
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
                }}
            />
        </div>
    );
}
