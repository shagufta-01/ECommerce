import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../Assets/Assets/logo.png';
import cart_icon from '../Assets/Assets/cart_icon.png'
function Navbar() {

    const [menu, sestMenu] = useState("Shop")
  return (
    <div className='navbar'>
<div  className='nav-logo'>
<img src={logo} /><p>SHOPPER</p></div>
<ul className='nav-menu'>
    <li onClick={()=>{sestMenu("Shop")}}> <Link style={{textDecoration:'none'}} to='/'> Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
    <li onClick={()=>{sestMenu("Mens")}}> <Link style={{textDecoration:'none'}} to='/men'>Men</Link>{menu==="Mens"?<hr/>:<></>}</li>
    <li onClick={()=>{sestMenu("Womens")}}> <Link style={{textDecoration:'none'}} to='/women'>Women</Link>{menu==="Womens"?<hr/>:<></>}</li>
    <li onClick={()=>{sestMenu("Kids")}}> <Link style={{textDecoration:'none'}} to='/kids'> Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
</ul>
  <div className='nav-login-cart'>
<Link to='/login'><button>Login</button></Link>
<Link to='/cart'><img src={cart_icon} /></Link>
<div className='nav-cart-count'>0</div>
  </div>         
    </div>
  )
}

export default Navbar
