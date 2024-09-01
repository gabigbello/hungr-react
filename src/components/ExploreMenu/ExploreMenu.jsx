import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ categoria, setCategoria }) => { // Destructure das props
  return (
    <div className="explore-menu" id='explore-menu'>
      <h1>Explore nosso Menu</h1>
      <p className="explore-menu-text">Descubra o que torna nossa cozinha tão especial! Nosso menu foi cuidadosamente elaborado para oferecer uma variedade de pratos que agradam a todos os paladares.</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div 
              onClick={() => setCategoria(prev => prev === item.menu_name ? "All" : item.menu_name)}
              key={index} 
              className="explore-menu-list-item">
              <img 
                className={categoria === item.menu_name ? "active" : ""} 
                src={item.menu_image} 
                alt={item.menu_name} 
              />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
