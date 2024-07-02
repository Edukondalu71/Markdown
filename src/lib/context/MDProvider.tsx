'use client';
import React from 'react';
import MarkdownProvider from './MarkdownProvider';
import { useMarkdown } from '../../hooks/use-markdown';
export interface ProviderProps {
    children: React.ReactNode;
}

export default function Provider({ children }: ProviderProps) {
    const { markdown, html, handleMarkdownUpdate } = useMarkdown();
    return (
        <MarkdownProvider
            markdown={markdown}
            html={html}
            handleMarkdownUpdate={handleMarkdownUpdate}
        >
            {children}
        </MarkdownProvider>
    );
}
