import React from 'react'
import './Footer.css'
import insta_icon from '../Assets/Assets/instagram_icon.png'
import pintester from '../Assets/Assets/pintester_icon.png'
import whatapp from '../Assets/Assets/whatsapp_icon.png'
import footer_icon from '../Assets/Assets/logo_big.png'
function Footer() {
  return (
    <div className='footer'>
    <div className='footer-logo'>
    <img src={footer_icon} />
    <p>SHOPPER</p>
    </div>
    <ul className='footer-links'>
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
    </ul>  
    <div className='footer-social-icon'>
        <div className='footer-icons-container'>
            <img src={insta_icon} />
        </div>
        <div className='footer-icons-container'>
            <img src={pintester} />
        </div>
        <div className='footer-icons-container'>
            <img src={whatapp} />
        </div>
    </div>
    <div className='footer-copyright'>
    <hr />
    <p>Copyright @2024 - All Right Reserve</p>

    </div>
    </div>
  )
}

export default Footer
