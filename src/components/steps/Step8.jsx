import React, { useState } from 'react'
import Button from '../Button'
import OptionButton from '../OptionButton'
import './Step.css'

const approachOptions = [
  { 
    value: 'quick', 
    label: 'Quero começar com algo acessível e rápido de vender.'
  },
  { 
    value: 'learn', 
    label: 'Quero aprender tudo certinho antes de começar.'
  },
  { 
    value: 'pace', 
    label: 'Preciso de algo que eu possa fazer no meu ritmo, do meu jeito.'
  }
]

function Step8({ userData, updateUserData, nextStep }) {
  const [selectedOption, setSelectedOption] = useState(userData.approach || '')
  const displayName = userData.name || 'Amiga'

  const handleSelect = (value) => {
    setSelectedOption(value)
    updateUserData('approach', value)
  }

  const handleContinue = () => {
    if (selectedOption) {
      nextStep()
    }
  }

  return (
    <div className="step-container">
      <p className="step-text">
        A maioria das pessoas acha que precisa de <strong>muito dinheiro ou experiência</strong> pra começar.
      </p>
      <p className="step-text">
        Mas o segredo é <strong>começar simples</strong>, e seguir um plano certo.
      </p>
      <h1 className="step-title">
        <strong>{displayName.toUpperCase()}</strong> qual dessas frases mais parece com você?
      </h1>
      
      <div className="options-list">
        {approachOptions.map((option) => (
          <OptionButton
            key={option.value}
            selected={selectedOption === option.value}
            onClick={() => handleSelect(option.value)}
          >
            {option.label}
          </OptionButton>
        ))}
      </div>
      
      <Button onClick={handleContinue} disabled={!selectedOption}>
        CONTINUAR
      </Button>
    </div>
  )
}

export default Step8

