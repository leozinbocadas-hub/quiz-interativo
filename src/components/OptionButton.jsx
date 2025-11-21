import React from 'react'
import './OptionButton.css'

function OptionButton({ 
  children, 
  onClick, 
  selected = false, 
  icon,
  className = '' 
}) {
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
    if (onClick) {
      onClick()
    }
  }

  return (
    <button
      className={`option-button ${selected ? 'selected' : ''} ${className}`}
      onClick={handleClick}
    >
      {icon && <span className="option-icon">{icon}</span>}
      <span className="option-text">{children}</span>
      {selected && <span className="option-check">✓</span>}
    </button>
  )
}

export default OptionButton

