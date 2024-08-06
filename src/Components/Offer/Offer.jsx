import React from 'react'
import './Offer.css'
import exclusive_image from '../Assets/Assets/exclusive_image.png'
function Offer() {
  return (
    <div className='offers'>
      <div className='offers-left'>
<h1>Exclusive</h1>
<h1>Offers for you</h1>
<p>ONLY ON BEST SELLERS PRODUCTS</p>
<button>Check Now</button>
      </div>
      <div className='offer-right'>
        <img src={exclusive_image} />
        </div>
    </div>
  )
}

export default Offer
