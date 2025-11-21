import React, { useState, useEffect } from 'react'
import Button from '../Button'
import FAQ from '../FAQ'
import PurchaseNotification from '../PurchaseNotification'
import './Step.css'
import imageBlack from '../../assets/images/black.png'
import image7 from '../../assets/images/7.png'
import image8 from '../../assets/images/8.png'
import image9 from '../../assets/images/9.png'
import image10 from '../../assets/images/10.png'
import image111 from '../../assets/images/111.png'
import confetti from 'canvas-confetti'

function Step13({ userData }) {
  const [timeLeft, setTimeLeft] = useState(117) // 1:57 em segundos
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    // Som de confetes
    const playConfettiSound = () => {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)()
      
      // Som de "pop" dos confetes
      const createPop = (time, frequency) => {
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()
        
        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)
        
        oscillator.frequency.value = frequency
        oscillator.type = 'sine'
        
        gainNode.gain.setValueAtTime(0.15, time)
        gainNode.gain.exponentialRampToValueAtTime(0.01, time + 0.1)
        
        oscillator.start(time)
        oscillator.stop(time + 0.1)
      }
      
      // Criar múltiplos "pops" para simular confetes
      const now = audioContext.currentTime
      for (let i = 0; i < 8; i++) {
        createPop(now + i * 0.1, 800 + Math.random() * 400)
      }
    }
    
    playConfettiSound()
    
    // Efeito de confetes ao carregar a página
    const duration = 3000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      })
    }, 250)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          return 117 // Reinicia o timer
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // Simular notificações de compra fake
    const names = ['Julia Cardoso', 'Maria Alves', 'Samira Marques', 'Lorena Barbosa', 'Leticia Camargo', 'Geovana Oliveira', 'Karen Mendes', 'Kátia Maria', 'Thamara Peixoto', 'Ricardo Gomes', 'Isabella Morais', 'Ana Gabriella']
    const interval = setInterval(() => {
      const randomName = names[Math.floor(Math.random() * names.length)]
      const randomSpots = Math.floor(Math.random() * 30) + 10
      
      setNotifications(prev => [
        { name: randomName, spots: randomSpots, id: Date.now() },
        ...prev.slice(0, 2) // Manter apenas as 3 mais recentes
      ])
    }, 15000) // A cada 15 segundos

    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  const checkoutUrl = 'https://pay.cakto.com.br/onh255j_659727'

  return (
    <div className="step-container step-final">
      {/* Timer */}
      <div className="timer-banner">
        <div className="timer-display">{formatTime(timeLeft)}</div>
        <span className="timer-icon">⏰</span>
        <span className="timer-text">Oferta por tempo limitado</span>
      </div>

      <h1 className="step-title">
        <strong>Transforme o seu Natal</strong> em renda extra real com <strong>Panetones Gourmet!</strong>
      </h1>
      
      <div className="step-image-container">
        <img src={imageBlack} alt="Oferta final" className="step-image" />
      </div>
      
      <Button href={checkoutUrl} variant="green">QUERO MUDAR DE VIDA</Button>

      {/* Notificações de compra */}
      {notifications.length > 0 && (
        <div className="notifications-container">
          {notifications.map(notification => (
            <PurchaseNotification
              key={notification.id}
              name={notification.name}
              spots={notification.spots}
            />
          ))}
        </div>
      )}

      <h2 className="section-title"><strong>PODE SER A SUA OPORTUNIDADE!</strong></h2>
      
      <div className="step-image-container">
        <img src={image7} alt="Oportunidade" className="step-image" />
      </div>
      
      <Button href={checkoutUrl}>QUERO LUCRAR AGORA</Button>

      <h2 className="section-title"><strong>VEJA O DEPOIMENTO DAS NOSSAS ALUNAS</strong></h2>
      
      <div className="testimonials-grid">
        <div className="step-image-container">
          <img src={image9} alt="Depoimento 1" className="step-image" />
        </div>
        <div className="step-image-container">
          <img src={image10} alt="Depoimento 2" className="step-image" />
        </div>
        <div className="step-image-container">
          <img src={image111} alt="Depoimento 3" className="step-image" />
        </div>
      </div>
      
      <Button href={checkoutUrl} variant="green">ESSE É O MEU MOMENTO</Button>

      <div className="step-image-container">
        <img src={image8} alt="Garantia" className="step-image" />
      </div>

      <FAQ />

      <Button href={checkoutUrl} variant="green">ESTOU PREPARADA</Button>
    </div>
  )
}

export default Step13

