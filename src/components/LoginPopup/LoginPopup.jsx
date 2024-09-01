import React, {useState} from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currentState,setCurrentState] = useState("Sign Up")

  return (
    <div className='login-popup' id='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currentState==='Login'?<></>:<input type='text' placeholder='Seu nome' required/>}
            <input type='email' placeholder='Seu e-mail' required/>
            <input type='password' placeholder='Sua senha' required/>
        </div>
        <button>{currentState==='Sign Up'?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>Li e concordo com os termos e a política de privacidade.</p>
        </div>
        <div className="new-account">
            {currentState==="Login"?<p>Criar uma nova conta? <span onClick={()=>setCurrentState("Sign Up")} >Clique aqui.</span></p>:<p>Já possui uma conta? <span onClick={()=> setCurrentState("Login")}>Faça o Login aqui.</span></p>}
        </div>
      </form>
    </div>
  )
}

export default LoginPopup
