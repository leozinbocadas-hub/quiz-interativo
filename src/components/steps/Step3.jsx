import React, { useState } from 'react'
import Button from '../Button'
import './Step.css'

function Step3({ userData, updateUserData, nextStep }) {
  const [name, setName] = useState(userData.name || '')

  const handleContinue = () => {
    if (name.trim()) {
      updateUserData('name', name.trim())
      nextStep()
    }
  }

  return (
    <div className="step-container">
      <h1 className="step-title">
        Amiga, para eu te conhecer melhor e te ajudar nessa jornada, me diz, <strong>qual é o seu nome?</strong>
      </h1>
      
      <input
        type="text"
        className="name-input"
        placeholder="Digite seu nome..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter' && name.trim()) {
            handleContinue()
          }
        }}
        autoFocus
      />
      
      <Button onClick={handleContinue} disabled={!name.trim()}>
        CONTINUAR
      </Button>
    </div>
  )
}

export default Step3

