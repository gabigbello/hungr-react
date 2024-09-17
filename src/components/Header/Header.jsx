import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

function Header() {
  return (
    <div className='header'>
      <div className="header-content">
        <div className="left-content">
            <div className = "right-content">
            <h2>Peça sua comida favorita <span>aqui</span>!</h2>
            <p>Aqui, você encontra o sabor autêntico da nossa cozinha preparada com ingredientes frescos e selecionados. Desde pratos tradicionais até criações exclusivas, nosso cardápio é pensado para satisfazer todos os gostos. Aproveite a comodidade do nosso delivery e saboreie nossas delícias no conforto de sua casa. Sua próxima refeição especial está a apenas um clique de distância!</p>
            <button>Veja o Menu</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header
