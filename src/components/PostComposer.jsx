import React, { useState, useEffect } from 'react'
import PlatformSelector from './PlatformSelector'
import TextEditor from './TextEditor'
import ValidationFeedback from './ValidationFeedback'
import { platformRules } from '../utils/platformRules'
import '../styles/PostComposer.css'

function PostComposer() {
  const [content, setContent] = useState('')
  const [selectedPlatforms, setSelectedPlatforms] = useState({
    twitter: false,
    instagram: false,
    facebook: false,
    linkedin: false,
    tiktok: false
  })
  const [validationResults, setValidationResults] = useState({})

  // Validate content against selected platforms
  useEffect(() => {
    const validateContent = () => {
      const results = {}
      
      Object.keys(selectedPlatforms).forEach(platform => {
        if (selectedPlatforms[platform]) {
          const rules = platformRules[platform]
          results[platform] = {
            characterCount: content.length,
            characterLimit: rules.characterLimit,
            isValid: content.length <= rules.characterLimit,
            warnings: [],
            errors: []
          }

          // Check character limit
          if (content.length > rules.characterLimit) {
            results[platform].errors.push(
              `Exceeds character limit: ${content.length}/${rules.characterLimit}`
            )
          } else if (content.length > rules.characterLimit * 0.8) {
            results[platform].warnings.push(
              `Approaching character limit: ${content.length}/${rules.characterLimit}`
            )
          }

          // Check for hashtags if required
          if (rules.hasHashtagLimit) {
            const hashtagCount = (content.match(/#\w+/g) || []).length
            if (hashtagCount > rules.hashtagLimit) {
              results[platform].errors.push(
                `Too many hashtags: ${hashtagCount}/${rules.hashtagLimit}`
              )
              results[platform].isValid = false
            }
          }

          // Check for URLs if restricted
          if (rules.restrictUrls && content.includes('http')) {
            results[platform].errors.push('URLs are not allowed on this platform')
            results[platform].isValid = false
          }

          // Check minimum content
          if (content.trim().length === 0) {
            results[platform].errors.push('Content cannot be empty')
            results[platform].isValid = false
          }
        }
      })

      setValidationResults(results)
    }

    validateContent()
  }, [content, selectedPlatforms])

  const handlePlatformChange = (platform) => {
    setSelectedPlatforms(prev => ({
      ...prev,
      [platform]: !prev[platform]
    }))
  }

  const handleContentChange = (text) => {
    setContent(text)
  }

  const handlePublish = () => {
    const selectedList = Object.keys(selectedPlatforms).filter(p => selectedPlatforms[p])
    
    if (selectedList.length === 0) {
      alert('❌ Please select at least one platform')
      return
    }

    if (content.trim().length === 0) {
      alert('❌ Please write something before publishing')
      return
    }

    const allValid = selectedList.every(platform => validationResults[platform]?.isValid)
    
    if (!allValid) {
      alert('❌ Please fix validation errors before publishing')
      return
    }

    alert(`✅ Post published successfully to: ${selectedList.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(', ')}!`)
    setContent('')
  }

  const handleClear = () => {
    setContent('')
  }

  return (
    <div className="post-composer">
      <div className="composer-container">
        <div className="composer-left">
          <PlatformSelector 
            selectedPlatforms={selectedPlatforms}
            onPlatformChange={handlePlatformChange}
          />
          <div className="action-buttons">
            <button className="btn-publish" onClick={handlePublish}>
              Publish
            </button>
            <button className="btn-clear" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>

        <div className="composer-right">
          <TextEditor 
            content={content}
            onContentChange={handleContentChange}
          />
        </div>
      </div>

      {Object.keys(validationResults).length > 0 && (
        <div className="validation-section">
          <h3>📊 Platform Validation Status</h3>
          <div className="validation-grid">
            {Object.keys(validationResults).map(platform => (
              <ValidationFeedback 
                key={platform}
                platform={platform}
                data={validationResults[platform]}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default PostComposer
