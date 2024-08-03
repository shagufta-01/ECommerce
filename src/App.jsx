import React from 'react'
import Navbar from './Components/Nabvar/Navbar'
import Shop from './Pages/Shop' 
import ShopCategory from './Pages/ShopCategory'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSingnup'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category='mens' />} />
          <Route path='/womens' element={<ShopCategory category='womens' />} />
          <Route path='/kids' element={<ShopCategory category='kids' />} />
          <Route path='/product' element={<Product />} />
          <Route path=':product' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
