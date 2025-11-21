import React from 'react'
import './Logo.css'
import logotipo from '../assets/logotipo.png'

function Logo() {
  return (
    <div className="logo-container">
      <div className="logo-circle">
        <img src={logotipo} alt="Panetone Lucrativo" className="logo-image" />
      </div>
    </div>
  )
}

export default Logo

