import React from 'react'
import './AppDownload.css'
import {assets} from '../../assets/assets'

function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
      <p>Para uma melhor experiência, baixe nosso App:</p>
      <div className="app-download-platforms">
        <img class="app1" src={assets.play_store} alt="" />
        <img class="app2" src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
