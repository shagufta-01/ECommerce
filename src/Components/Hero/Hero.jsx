import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/Assets/hand_icon.png'
import arrow_icon from '../Assets/Assets/arrow.png'
import hero_imae from '../Assets/Assets/hero_image.png'
function Hero() {
  return (
    <div className='hero'>
      <div className='hero-left'>
<h2>NEW ARRIVALS ONLY</h2>
<div>
<div className='hero-hand-icon'>
<p>new</p>
<img src={hand_icon} />
 </div>

   <p>Collection</p>
   <p>for everyone</p>
      </div>
  
<div className='hero-latest-btn'>
  <div>Latest Collection</div>
  <img src={arrow_icon} />
</div>
</div>


      <div className='hero-right'>
<img   src={hero_imae} />
      </div>
    </div>
  )
}

export default Hero
