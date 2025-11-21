import React from 'react'
import Button from '../Button'
import './Step.css'
import depoimento1 from '../../assets/images/depoimento1.png'
import depoimento2 from '../../assets/images/depoimento2.png'
import depoimento3 from '../../assets/images/depoimento3.png'

const testimonials = [
  {
    name: 'Camila R.',
    age: '36 anos',
    location: 'Campinas, SP',
    text: 'Eu nunca tinha vendido nada, achava que precisava de muito dinheiro pra começar. Segui o passo a passo do plano e em uma semana já tinha meus primeiros pedidos. Hoje faço panetones por encomenda e uso o dinheiro pra ajudar nas contas de casa. É muito gratificante ver que eu consegui!',
    image: depoimento1
  },
  {
    name: 'Patrícia M.',
    age: '52 anos',
    location: 'Belo Horizonte, MG',
    text: 'Trabalho fora o dia todo, então precisava de algo prático e que eu conseguisse fazer à noite. As receitas são deliciosas e o plano me ajudou a organizar tudo, custo, preço e divulgação. Fiz R$7.590 só em dezembro passado. Esse ano quero dobrar!',
    image: depoimento2
  },
  {
    name: 'Juliana S.',
    age: '31 anos',
    location: 'Curitiba, PR',
    text: 'Eu sempre amei fazer doces, mas nunca tinha coragem de cobrar. Com o plano aprendi a valorizar meu trabalho. Meus panetones fizeram sucesso no grupo de mães da escola e agora todo mundo já faz reserva em novembro. Foi a melhor decisão que eu tomei esse ano.',
    image: depoimento3
  }
]

function Step11({ nextStep }) {
  return (
    <div className="step-container">
      <h1 className="step-title"><strong>MINHAS ALUNAS DERAM CERTO!</strong></h1>
      <p className="step-subtitle">Veja alguns <strong>depoimentos...</strong></p>
      
      <Button onClick={nextStep}>QUERO LUCRAR AGORA</Button>
      
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-avatar">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-avatar-img" />
              </div>
              <div className="testimonial-info">
                <div className="testimonial-name">
                  <strong>{testimonial.name}</strong>, {testimonial.age}
                </div>
                <div className="testimonial-location">{testimonial.location}</div>
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Step11

