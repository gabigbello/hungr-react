import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext)

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <h2>SEU CARRINHO</h2>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Produto</p>
          <p>Título</p>
          <p>Preço</p>
          <p>Quantidade</p>
          <p>Total</p>
          <p>Remover</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <React.Fragment key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>R$ {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>R$ {item.price * cartItems[item._id]}</p>
                  <p className="cross" onClick={() => removeFromCart(item._id)}>x</p>
                </div>
                <hr />
              </React.Fragment>
            )
          } else {
            return null;
          }
        })}
      </div>
      <div className="cart-bottom">
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
        <div className="cart-promo-code">
          <div>
            <p>Se você tiver um cupom, informe o código aqui</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='CÓDIGO DO CUPOM'/>
              <button>Submeter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
