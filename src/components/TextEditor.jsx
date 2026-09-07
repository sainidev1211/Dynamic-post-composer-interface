import React from 'react'
import '../styles/TextEditor.css'

function TextEditor({ content, onContentChange }) {
  return (
    <div className="text-editor">
      <h2>Compose Your Post</h2>
      <textarea
        className="editor-textarea"
        placeholder="Write your post content here... It will be validated against all selected platforms in real-time."
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
      />
      <div className="editor-info">
        <p>Characters: {content.length}</p>
      </div>
    </div>
  )
}

export default TextEditor
