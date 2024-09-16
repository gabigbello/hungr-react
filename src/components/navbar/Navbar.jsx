import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin,isLoggedIn}) => {

    const [menu,setMenu] = useState("home");
    const [searchVisible,setSearchVisible] = useState(false);

    const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo_hungr_nobg} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")}className={menu==="home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")}className={menu==="menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>setMenu("aplicativo")}className={menu==="aplicativo"?"active":""}>Aplicativo</a>
        <a href='#footer' onClick={()=>setMenu("contato")}className={menu==="contato"?"active":""}>Contato</a>
      </ul>
      <div className="navbar-right">
        <i className='bx bx-search-alt-2' id='search-icon' onClick={()=> setSearchVisible(!searchVisible)}></i>
        <div className={`search-menu ${searchVisible?'visible':''}`}><input type="text" placeholder='Digite o item para procurá-lo'/></div>
        <div className="navbar-search-icon">
            <Link to='/cart'><i className='bx bx-shopping-bag' ></i></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
            {console.log("Estado de isLoggedIn:", isLoggedIn)}
            {isLoggedIn ?(
              <i className='bx bx-user' ></i>
            ):(
            <button onClick={()=>setShowLogin(true)}>Sign in</button>
            )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
