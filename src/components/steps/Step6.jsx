import React, { useState } from 'react'
import Button from '../Button'
import OptionButton from '../OptionButton'
import './Step.css'

const motivationOptions = [
  { 
    value: 'family', 
    label: 'Ter mais tempo e liberdade pra ficar com a minha família.',
    icon: '👨‍👩‍👧‍👦'
  },
  { 
    value: 'debt', 
    label: 'Sair das dívidas e conquistar tranquilidade financeira.',
    icon: '🙏'
  },
  { 
    value: 'money', 
    label: 'Juntar um dinheiro e sair do aperto.',
    icon: '💰'
  },
  { 
    value: 'change', 
    label: 'Começar algo meu e mudar de vida.',
    icon: '💡'
  }
]

function Step6({ userData, updateUserData, nextStep }) {
  const [selectedMotivation, setSelectedMotivation] = useState(userData.motivation || '')
  const displayName = userData.name || 'Amiga'

  const handleSelect = (value) => {
    setSelectedMotivation(value)
    updateUserData('motivation', value)
  }

  const handleContinue = () => {
    if (selectedMotivation) {
      nextStep()
    }
  }

  return (
    <div className="step-container">
      <h1 className="step-title">
        Me diz <strong>{displayName.toUpperCase()}</strong>, o que mais te motiva hoje a buscar uma <strong>renda extra?</strong>
      </h1>
      
      <div className="options-list">
        {motivationOptions.map((option) => (
          <OptionButton
            key={option.value}
            selected={selectedMotivation === option.value}
            onClick={() => handleSelect(option.value)}
            icon={option.icon}
          >
            {option.label}
          </OptionButton>
        ))}
      </div>
      
      <Button onClick={handleContinue} disabled={!selectedMotivation}>
        CONTINUAR
      </Button>
    </div>
  )
}

export default Step6

