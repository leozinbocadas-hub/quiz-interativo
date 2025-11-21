import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import ProgressBar from './ProgressBar'
import Step1 from './steps/Step1'
import Step2 from './steps/Step2'
import Step3 from './steps/Step3'
import Step4 from './steps/Step4'
import Step5 from './steps/Step5'
import Step6 from './steps/Step6'
import Step7 from './steps/Step7'
import Step8 from './steps/Step8'
import Step9 from './steps/Step9'
import Step10 from './steps/Step10'
import Step11 from './steps/Step11'
import Step12 from './steps/Step12'
import Step13 from './steps/Step13'
import './Quiz.css'

const TOTAL_STEPS = 13

function Quiz() {
  const [currentStep, setCurrentStep] = useState(1)
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    motivation: '',
    workFromHome: '',
    approach: '',
    interest: ''
  })

  const updateUserData = (field, value) => {
    setUserData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(prev => prev + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const getProgress = () => {
    return (currentStep / TOTAL_STEPS) * 100
  }

  const renderStep = () => {
    const props = {
      userData,
      updateUserData,
      nextStep
    }

    switch (currentStep) {
      case 1:
        return <Step1 {...props} />
      case 2:
        return <Step2 {...props} />
      case 3:
        return <Step3 {...props} />
      case 4:
        return <Step4 {...props} />
      case 5:
        return <Step5 {...props} />
      case 6:
        return <Step6 {...props} />
      case 7:
        return <Step7 {...props} />
      case 8:
        return <Step8 {...props} />
      case 9:
        return <Step9 {...props} />
      case 10:
        return <Step10 {...props} />
      case 11:
        return <Step11 {...props} />
      case 12:
        return <Step12 {...props} />
      case 13:
        return <Step13 {...props} />
      default:
        return null
    }
  }

  return (
    <div className="quiz-container">
      <Logo />
      <ProgressBar progress={getProgress()} />
      <div className="quiz-content">
        {renderStep()}
      </div>
    </div>
  )
}

export default Quiz

