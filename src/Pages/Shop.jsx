import React from 'react'
import './Shop.css'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offer/Offer'
import NewCollection from '../Components/NewCollection/NewCollection'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <NewsLetter />
    </div>
  )
}

export default Shop
