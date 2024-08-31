import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

function Home() {

  const[categoria,setCategoria] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu categoria={categoria} setCategoria={setCategoria}/>
      <FoodDisplay categoria={categoria}/>
      <AppDownload/>
    </div>
  )
}

export default Home
