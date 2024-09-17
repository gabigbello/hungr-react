import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo_hungr_nobg} alt="" className="logotipo" />
            <p>Nunc nisl felis, rutrum non ex pharetra, feugiat ultricies sem. Etiam nec mollis nibh. Donec imperdiet libero non lectus convallis tincidunt. Ut eget dapibus odio. Donec convallis eros id enim gravida placerat. Nullam sit amet lobortis ex. Donec nec sodales odio, ut pharetra odio.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>Sobre nós</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>FALE CONOSCO</h2>
            <ul>
                <li>+55 11 99999-9999</li>
                <li>E-mail: hungr@hungr.com.br</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 ©️ Gabriela Bello - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
