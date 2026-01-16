import React, { useState, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useReactToPrint } from 'react-to-print'

function App() {
  const [markdown, setMarkdown] = useState('# Markdown Preview Starter\n\nWelcome! Type some markdown on the left and see the magic on the right.\n\n## Features\n- Real-time preview\n- Modern UI\n- **PDF Export**')
  const componentRef = useRef()

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'document-',
  })

  return (
    <main className='main-container'>
      <header className='header'>
        <h1>Markdown Preview</h1>
        <button className='btn' onClick={handlePrint}>
          Print to PDF
        </button>
      </header>
      <section className='markdown-container'>
        <div className='editor-pane'>
          <div className='pane-title'>Editor</div>
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            spellCheck='false'
          ></textarea>
        </div>
        <div className='preview-pane'>
          <div className='pane-title'>Preview</div>
          <article className='result' ref={componentRef}>
            <ReactMarkdown >{markdown}</ReactMarkdown>
          </article>
        </div>
      </section>
    </main>
  )
}

export default App
