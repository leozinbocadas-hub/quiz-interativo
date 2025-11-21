import React from 'react'
import './Button.css'

function Button({ children, onClick, variant = 'primary', href, className = '', disabled = false }) {
  const playClickSound = () => {
    // Criar um som de clique usando Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    
    oscillator.frequency.value = 800
    oscillator.type = 'sine'
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)
    
    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.1)
  }

  const handleClick = () => {
    playClickSound()
    if (onClick && !disabled) {
      onClick()
    }
  }

  const handleLinkClick = (e) => {
    playClickSound()
  }

  const buttonClass = `btn btn-${variant} ${className} ${disabled ? 'disabled' : ''}`

  if (href) {
    return (
      <div className="button-wrapper">
        <a href={href} className={buttonClass} onClick={handleLinkClick}>
          {children}
        </a>
        <div className="button-line"></div>
      </div>
    )
  }

  return (
    <div className="button-wrapper">
      <button className={buttonClass} onClick={handleClick} disabled={disabled}>
        {children}
      </button>
      <div className="button-line"></div>
    </div>
  )
}

export default Button

