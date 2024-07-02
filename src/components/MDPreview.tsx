'use client';
import React from 'react';
import { MarkdownContext } from '../lib/context/MarkdownProvider';

export default function MDPreview() {
  const { html } = React.useContext(MarkdownContext);

  return (
    <div
      className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-5"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}