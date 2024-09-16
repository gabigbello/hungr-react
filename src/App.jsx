import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages//PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {

  const [showLogin,setShowLogin] = useState(false);
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn}/> :<></>}
        <div className='app'>
      <Navbar setShowLogin={setShowLogin} isLoggedIn={isLoggedIn}/>
      <Routes>
        < Route path='/' element={<Home/>}/>
        < Route path='/cart' element={<Cart/>}/>
        < Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer />
    </>

  )
}

export default App
