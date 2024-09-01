import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home");

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
        <i class='bx bx-search-alt-2' ></i>
        <div className="navbar-search-icon">
            <Link to='/cart'><i class='bx bx-shopping-bag' ></i></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
            <button onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
