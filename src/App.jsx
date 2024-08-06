import React from 'react'
import Navbar from './Components/Nabvar/Navbar'
import Shop from './Pages/Shop' 
import ShopCategory from './Pages/ShopCategory'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSingnup'
import men_banner from './Components/Assets/Assets/banner_mens.png'
import women_banner from './Components/Assets/Assets/banner_women.png'
import kid_banner from './Components/Assets/Assets/banner_kids.png'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category='mens' />} />
          <Route path='/womens' element={<ShopCategory  banner={women_banner} category='womens' />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kids' />} />
          <Route path='/product' element={<Product />} />
          <Route path=':product' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
