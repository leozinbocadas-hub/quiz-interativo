import React, { useState } from 'react'
import './FAQ.css'

const faqItems = [
  {
    question: 'Como recebo acesso ao plano?',
    answer: 'Assim que o pagamento é aprovado, você recebe imediatamente no seu e-mail (e tela de obrigado) o link da área de membros, com login e senha. Guarde esse e-mail; ele contém tudo para começar.'
  },
  {
    question: 'Preciso ter experiência na cozinha para conseguir?',
    answer: 'Não. O plano foi pensado para iniciante absoluta: receitas explicadas passo a passo, lista de compras, fichas de custo e precificação pronta, além de um roteiro de divulgação simples.'
  },
  {
    question: 'Qual o investimento inicial aproximado?',
    answer: 'Baixo. Com R$100–R$300 você produz o primeiro lote (6–10 panetones, a depender do sabor). O plano ajuda a ajustar sabores e quantidades. Muitas alunas recuperam o investimento no primeiro lote.'
  },
  {
    question: 'Em quanto tempo posso começar a vender?',
    answer: 'Em 24h você já organiza sabores, preços e cardápio. Em 3 dias, seguindo nosso roteiro (WhatsApp e Instagram), a maioria consegue os primeiros pedidos. Em 30 dias, dá para buscar R$5k–R$10k com ritmo de produção.'
  },
  {
    question: 'Não tenho muito tempo... dá pra conciliar com a rotina?',
    answer: 'Sim. O plano prevê rotina leve: 1–2 sessões de produção por semana + divulgação rápida. Você escolhe dias/horários e escala conforme sua agenda.'
  },
  {
    question: 'E se eu tiver medo de não vender?',
    answer: 'Você terá modelos de posts, mensagens prontas para WhatsApp/DM, ideias de kits presente e datas quentes do Natal. Também ensinamos a validar sabores e a precificar para aumentar a conversão e a margem.'
  },
  {
    question: 'Tenho garantia se não gostar?',
    answer: 'Sim. Você tem 7 dias de garantia por lei para solicitar reembolso, sem burocracia.'
  }
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq-container">
      <h2 className="faq-title">FAQ - DÚVIDAS FREQUENTES</h2>
      
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleItem(index)}
            >
              <span>{item.question}</span>
              <span className={`faq-arrow ${openIndex === index ? 'open' : ''}`}>
                ▼
              </span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ

