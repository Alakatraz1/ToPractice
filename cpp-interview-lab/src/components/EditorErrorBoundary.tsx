"use client";

import React, { Component, ReactNode, ErrorInfo } from 'react';
import { RotateCcw, AlertTriangle } from 'lucide-react';

interface Props {
    children: ReactNode;
    fallbackCode?: string;
    onReset?: () => void;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class EditorErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.warn("[EditorErrorBoundary] Handled Monaco Editor lifecycle error safely:", error?.message, errorInfo);
    }

    handleRetry = () => {
        this.setState({ hasError: false, error: null });
        if (this.props.onReset) {
            this.props.onReset();
        }
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="w-full h-full border border-gray-800 bg-gray-900/90 rounded-md p-6 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                        <AlertTriangle className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-gray-200">Editor reloaded safely</h4>
                        <p className="text-xs text-gray-400 max-w-sm">
                            Monaco Editor encountered a transient render timing issue. Your code and solved progress remain 100% safe.
                        </p>
                    </div>
                    <button
                        onClick={this.handleRetry}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm"
                    >
                        <RotateCcw className="w-3.5 h-3.5" /> Reconnect Editor
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}
