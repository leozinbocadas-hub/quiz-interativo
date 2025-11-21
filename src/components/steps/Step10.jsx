import React from 'react'
import Button from '../Button'
import './Step.css'
import image5 from '../../assets/images/5.png'

function Step10({ userData, nextStep }) {
  const displayName = userData.name || 'Amiga'

  return (
    <div className="step-container">
      <div className="step-text">
        <p>Eu comecei <strong>sem saber nada</strong>, só com <strong>vontade de mudar.</strong></p>
        <p>Naquela época, eu tinha <strong>medo de não vender</strong>, mas decidi tentar e no <strong>primeiro fim de semana</strong> já recebi meus <strong>primeiros pedidos.</strong></p>
        <p>Foi o que <strong>mudou meu Natal</strong> (e o jeito que eu vejo meu trabalho hoje).</p>
        <p>Agora eu quero te entregar <strong>todo o meu conhecimento</strong>, e mostrar que sim, é possível fazer uma <strong>renda altíssima</strong> com <strong>Panetones Gourmets...</strong></p>
      </div>
      
      <div className="step-image-container">
        <img src={image5} alt="História de sucesso" className="step-image" />
      </div>
      
      <Button onClick={nextStep}>QUERO SABER COMO FUNCIONA</Button>
    </div>
  )
}

export default Step10

