import React from 'react'
import Button from '../Button'
import './Step.css'
import image1 from '../../assets/images/1.png'

function Step1({ nextStep }) {
  return (
    <div className="step-container">
      {/* Banner Black Friday */}
      <div className="promo-banner">
        <span className="promo-icon">🔥</span>
        <span className="promo-text">PROMOÇÃO DE BLACK FRIDAY SOMENTE ESSES ÚLTIMOS DIAS</span>
      </div>
      
      <h1 className="step-title">
        <strong>Descubra</strong> o passo a passo que já fez <strong>mulheres comuns</strong> ganharem <strong>mais de R$8.000</strong> vendendo <strong>panetones gourmet</strong> no Natal!
      </h1>
      <p className="step-subtitle">Toque abaixo para entender 👇</p>
      
      <div className="step-image-container">
        <img src={image1} alt="Panetones Gourmet" className="step-image" />
      </div>
      
      <Button onClick={nextStep}>QUERO DESCOBRIR</Button>
      
      <div className="benefits-list">
        <div className="benefit-item">
          <span className="benefit-icon">💸</span>
          <span className="benefit-text">Com baixo investimento</span>
        </div>
        <div className="benefit-item">
          <span className="benefit-icon">💡</span>
          <span className="benefit-text">Não precisa de experiência</span>
        </div>
        <div className="benefit-item">
          <span className="benefit-icon">🤶🏽</span>
          <span className="benefit-text">Lucre muito nesse final de ano...</span>
        </div>
      </div>
    </div>
  )
}

export default Step1

