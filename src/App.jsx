import React from 'react'
import PostComposer from './components/PostComposer'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📱 Multi-Platform Post Composer</h1>
        <p>Create and validate posts for multiple platforms</p>
      </header>
      <main className="app-main">
        <PostComposer />
      </main>
      <footer className="app-footer">
        <p>&copy; 2026 Post Composer. Design and develop dynamic content management.</p>
      </footer>
    </div>
  )
}

export default App
