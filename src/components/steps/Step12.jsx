import React from 'react'
import Button from '../Button'
import './Step.css'
import image6 from '../../assets/images/6.png'

const benefits = [
  { icon: '🍫', text: '<strong>Receitas campeãs</strong> e testadas, com ingredientes acessíveis e <strong>sabor único!</strong>' },
  { icon: '🗓️', text: '<strong>Plano de 30 dias</strong> pra sair do zero e começar a vender em até <strong>3 dias.</strong>' },
  { icon: '👩‍💻', text: '<strong>Dicas de vendas práticas</strong>, que funcionam mesmo pra quem <strong>nunca vendeu nada!</strong>' },
  { icon: '📸', text: 'Dicas e <strong>passo a passo</strong> de como divulgar seus panetones e <strong>escalar nas maiores plataformas</strong> de redes sociais!' },
  { icon: '🥳', text: 'E o <strong>melhor de tudooo</strong>, você recebe um <strong>bônus super importante</strong> para você destravar!' }
]

function Step12({ nextStep }) {
  return (
    <div className="step-container">
      <h1 className="step-title">
        Quero te apresentar um <strong>guia simples e completo</strong> pra você começar do zero, vender seus primeiros panetones e <strong>faturar de verdade</strong> neste Natal.
      </h1>
      
      <p className="step-subtitle">💡 <strong>Você vai aprender:</strong></p>
      
      <div className="benefits-list">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-item">
            <span className="benefit-icon">{benefit.icon}</span>
            <span className="benefit-text" dangerouslySetInnerHTML={{ __html: benefit.text }}></span>
          </div>
        ))}
      </div>
      
      <Button onClick={nextStep}>QUERO LUCRAR AGORA</Button>
      
      <div className="step-image-container">
        <img src={image6} alt="Guia completo" className="step-image" />
      </div>
    </div>
  )
}

export default Step12

