import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

function PlaceOrder() {

  const{getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
          <p className="title">Informações de entrega</p>
          <div className="multi-field">
            <input type="text" placeholder='Seu nome'/>
            <input type="text" placeholder='Seu sobrenome'/>
          </div>
          <input type="email" placeholder='E-mail'/>
          <input type="text" placeholder='Rua/Avenida'/>
          <div className="multi-field">
            <input type="text" placeholder='Cidade'/>
            <input type="text" placeholder='Estado'/>
          </div>
          <div className="multi-field">
            <input type="text" placeholder='CEP'/>
            <input type="text" placeholder='País'/>
          </div>
          <input type="text" placeholder='Telefone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
            <h2>Total do carrinho</h2>
            <div className="detalhes">
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>R$ {getTotalCartAmount()}</p>
              </div>
              <div className="cart-total-details">
                <p>Frete</p>
                <p>R$ {getTotalCartAmount()===0?0:2}</p>
              </div>
              <div className="cart-total-details">
                <b>Total</b>
                <b>R$ {getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
            </div>
            <button onClick={()=> navigate('/order')}>PROSSEGUIR COM O CHECKOUT</button>
        </div>

      </div>
    </form>
  )
}

export default PlaceOrder
