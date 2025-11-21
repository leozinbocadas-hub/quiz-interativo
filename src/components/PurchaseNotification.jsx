import React, { useState, useEffect } from 'react'
import './PurchaseNotification.css'

function PurchaseNotification({ name, spots }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 10000) // Remove após 10 segundos

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="purchase-notification">
      <div className="notification-content">
        <strong>{name}</strong> acabou de adquirir sua vaga!
      </div>
      <div className="notification-urgency">
        Corra! Faltam apenas <strong>{spots}</strong> vagas disponíveis nessa turma
      </div>
    </div>
  )
}

export default PurchaseNotification

