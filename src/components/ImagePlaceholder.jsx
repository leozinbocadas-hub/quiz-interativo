import React from 'react'
import './ImagePlaceholder.css'

function ImagePlaceholder({ width = '100%', height = '300px' }) {
  return (
    <div 
      className="image-placeholder"
      style={{ width, height }}
    >
      <div className="placeholder-content">
        <span className="placeholder-icon">📷</span>
        <span className="placeholder-text">Imagem</span>
      </div>
    </div>
  )
}

export default ImagePlaceholder

