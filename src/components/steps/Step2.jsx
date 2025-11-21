import React from 'react'
import Button from '../Button'
import './Step.css'
import image2 from '../../assets/images/2.png'

function Step2({ nextStep }) {
  return (
    <div className="step-container">
      <h1 className="step-title"><strong>Oii, tudo bem?</strong> Eu sou a <strong>Carla!</strong></h1>
      
      <div className="step-text">
        <p>Há quatro anos eu decidi tentar vender <strong>panetones gourmet</strong> pra ganhar uma renda extra…</p>
        <p>E consegui faturar <strong>mais de R$8.000</strong> só em único mês.</p>
        <p>E agora, após todo esse tempo vendendo muito no final do ano, decidi compartilhar com mais mulheres, como transformar algo tão simples em <strong>dinheiro!</strong></p>
        <p>Pra eu te mostrar o melhor caminho, e faturar muito esse ano, preciso que você responda rapidinho algumas perguntas 👇</p>
      </div>
      
      <div className="step-image-container">
        <img src={image2} alt="Carla" className="step-image" />
      </div>
      
      <Button onClick={nextStep}>QUERO DESCOBRIR</Button>
    </div>
  )
}

export default Step2

