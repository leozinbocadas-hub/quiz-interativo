import React, { useState } from 'react'
import Button from '../Button'
import OptionButton from '../OptionButton'
import './Step.css'

const workFromHomeOptions = [
  { 
    value: 'dream', 
    label: 'Sensacional, finalmente realizar um sonho.'
  },
  { 
    value: 'good', 
    label: 'Acho uma boa ideia!'
  },
  { 
    value: 'curious', 
    label: 'Nunca pensei em fazer isso, mas agora quero saber mais!'
  }
]

function Step7({ userData, updateUserData, nextStep }) {
  const [selectedOption, setSelectedOption] = useState(userData.workFromHome || '')
  const displayName = userData.name || 'Amiga'

  const handleSelect = (value) => {
    setSelectedOption(value)
    updateUserData('workFromHome', value)
  }

  const handleContinue = () => {
    if (selectedOption) {
      nextStep()
    }
  }

  return (
    <div className="step-container">
      <h1 className="step-title">
        <strong>Entendo totalmente {displayName.toUpperCase()}</strong>, foi exatamente por isso que eu comecei...
      </h1>
      <p className="step-subtitle">
        E para você, como seria poder <strong>trabalhar de casa?</strong>
      </p>
      
      <div className="options-list">
        {workFromHomeOptions.map((option) => (
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

export default Step7

