import React, { useState } from 'react'
import Button from '../Button'
import OptionButton from '../OptionButton'
import './Step.css'

const interestOptions = [
  { 
    value: 'yes-need', 
    label: 'Sim! Estou precisando muito de uma renda extra.'
  },
  { 
    value: 'yes-practical', 
    label: 'Sim, se for algo prático de fazer em casa.'
  },
  { 
    value: 'maybe', 
    label: 'Talvez, quero entender melhor como funciona.'
  }
]

function Step9({ userData, updateUserData, nextStep }) {
  const [selectedOption, setSelectedOption] = useState(userData.interest || '')
  const displayName = userData.name || 'Amiga'

  const handleSelect = (value) => {
    setSelectedOption(value)
    updateUserData('interest', value)
  }

  const handleContinue = () => {
    if (selectedOption) {
      nextStep()
    }
  }

  return (
    <div className="step-container">
      <h1 className="step-title">
        <strong>{displayName.toUpperCase()}</strong>, sabia que tem gente faturando até <strong>R$15.000</strong> com panetones gourmets nesse fim de ano?
      </h1>
      
      <div className="step-text">
        <p>E a maioria começou igual você: com <strong>pouco tempo, pouco caixa</strong> e muita vontade de mudar.</p>
        <p>Se você soubesse o <strong>passo a passo</strong> para isso, você toparia fazer?</p>
      </div>
      
      <div className="options-list">
        {interestOptions.map((option) => (
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

export default Step9

