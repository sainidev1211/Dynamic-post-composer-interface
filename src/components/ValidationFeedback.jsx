import React from 'react'
import '../styles/ValidationFeedback.css'

function ValidationFeedback({ platform, data }) {
  const getStatusIcon = (isValid) => {
    return isValid ? '✅' : '❌'
  }

  const getStatusClass = (isValid) => {
    return isValid ? 'valid' : 'invalid'
  }

  return (
    <div className={`validation-card ${getStatusClass(data.isValid)}`}>
      <div className="validation-header">
        <span className="status-icon">{getStatusIcon(data.isValid)}</span>
        <h4>{platform.toUpperCase()}</h4>
      </div>

      <div className="validation-content">
        <div className="character-counter">
          <p>Characters: <strong>{data.characterCount}/{data.characterLimit}</strong></p>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{
                width: `${Math.min((data.characterCount / data.characterLimit) * 100, 100)}%`,
                backgroundColor: data.isValid ? '#4CAF50' : '#F44336'
              }}
            />
          </div>
        </div>

        {data.errors.length > 0 && (
          <div className="errors">
            <p className="error-title">Errors:</p>
            <ul>
              {data.errors.map((error, idx) => (
                <li key={idx} className="error-message">❌ {error}</li>
              ))}
            </ul>
          </div>
        )}

        {data.warnings.length > 0 && (
          <div className="warnings">
            <p className="warning-title">Warnings:</p>
            <ul>
              {data.warnings.map((warning, idx) => (
                <li key={idx} className="warning-message">⚠️ {warning}</li>
              ))}
            </ul>
          </div>
        )}

        {data.errors.length === 0 && data.warnings.length === 0 && (
          <p className="valid-message">✓ Ready to publish!</p>
        )}
      </div>
    </div>
  )
}

export default ValidationFeedback
