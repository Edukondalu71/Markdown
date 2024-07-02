import React from 'react';
import Loading from './Loading';
import { MarkdownContext } from '../lib/context/MarkdownProvider';
import './Styles/style.css'

const MDPreview = React.lazy(() => import('./MDPreview'));

export default function Layout() {
  const { markdown, handleMarkdownUpdate } = React.useContext(MarkdownContext);
  return (
    <div className="layout">
      <div className='markerSection'>
        <textarea
          rows={20}
          cols={50}
          className="textArea"
          placeholder="Add your Markdown text..."
          value={markdown}
          onChange={(e) => handleMarkdownUpdate(e.target.value)}
        />
      </div>

      <div className='previewSection'>
        <React.Suspense fallback={<Loading />}>
          <MDPreview />
        </React.Suspense>
      </div>
    </div>
  );
}