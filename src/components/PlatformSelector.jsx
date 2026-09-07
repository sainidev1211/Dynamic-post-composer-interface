import React from 'react'
import '../styles/PlatformSelector.css'

function PlatformSelector({ selectedPlatforms, onPlatformChange }) {
  const platforms = [
    { id: 'twitter', name: 'Twitter', icon: '𝕏', color: '#000000' },
    { id: 'instagram', name: 'Instagram', icon: '📷', color: '#E1306C' },
    { id: 'facebook', name: 'Facebook', icon: '👍', color: '#1877F2' },
    { id: 'linkedin', name: 'LinkedIn', icon: '💼', color: '#0A66C2' },
    { id: 'tiktok', name: 'TikTok', icon: '🎵', color: '#000000' }
  ]

  return (
    <div className="platform-selector">
      <h2>Select Platforms</h2>
      <div className="platforms-list">
        {platforms.map(platform => (
          <label key={platform.id} className="platform-checkbox">
            <input
              type="checkbox"
              checked={selectedPlatforms[platform.id]}
              onChange={() => onPlatformChange(platform.id)}
            />
            <span className="platform-label">
              <span className="platform-icon">{platform.icon}</span>
              <span className="platform-name">{platform.name}</span>
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default PlatformSelector
