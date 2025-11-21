import React, { useState } from 'react'
import Button from '../Button'
import OptionButton from '../OptionButton'
import './Step.css'

const ageOptions = [
  { value: '18-29', label: '18 a 29' },
  { value: '29-39', label: '29 a 39' },
  { value: '39-49', label: '39 a 49' },
  { value: '50+', label: '50+' }
]

function Step4({ userData, updateUserData, nextStep }) {
  const [selectedAge, setSelectedAge] = useState(userData.age || '')

  const handleSelect = (value) => {
    setSelectedAge(value)
    updateUserData('age', value)
  }

  const handleContinue = () => {
    if (selectedAge) {
      nextStep()
    }
  }

  const displayName = userData.name || 'Amiga'

  return (
    <div className="step-container">
      <h1 className="step-title">
        <strong>Maravilha {displayName.toUpperCase()}</strong>, qual é a sua <strong>faixa de idade?</strong>
      </h1>
      
      <div className="options-grid">
        {ageOptions.map((option) => (
          <OptionButton
            key={option.value}
            selected={selectedAge === option.value}
            onClick={() => handleSelect(option.value)}
          >
            {option.label}
          </OptionButton>
        ))}
      </div>
      
      <p className="step-hint">
        💖 Isso me ajuda a adaptar o plano pra sua realidade!
      </p>
      
      <Button onClick={handleContinue} disabled={!selectedAge}>
        CONTINUAR
      </Button>
    </div>
  )
}

export default Step4

