import React from 'react'
import Button from '../Button'
import './Step.css'
import image3 from '../../assets/images/3..png'
import image4 from '../../assets/images/4.png'

function Step5({ userData, nextStep }) {
  const displayName = userData.name || 'Amiga'

  return (
    <div className="step-container">
      <h1 className="step-title">
        <strong>{displayName.toUpperCase()}</strong>, milhares de mulheres como você, e já estão sendo guiadas por mim, estão <strong>lucrando muito</strong> neste fim de ano...
      </h1>
      
      <div className="step-text">
        <p>E elas começaram do zero e já estão faturando de <strong>R$8.000 a R$15.000</strong> vendendo <strong>panetones gourmet.</strong></p>
        <p>Tudo de casa, no tempo delas, <strong>sem complicação</strong> e com liberdade.</p>
      </div>
      
      <div className="step-image-container">
        <img src={image3} alt="Mulheres lucrando" className="step-image" />
      </div>
      
      <Button onClick={nextStep}>QUERO SABER COMO FUNCIONA</Button>
      
      <div className="step-image-container">
        <img src={image4} alt="Depoimentos" className="step-image" />
      </div>
    </div>
  )
}

export default Step5

