import React, { useContext } from 'react'
import '../Pages/CSS/ShopeCategory.css'
import { ShopeContext } from '../Context/ShopeContext'

function ShopCategory(props) {
  const {all_product} =useContext(ShopeContext)
  return (
    <div className='shop-category'>
<img  src={props.banner} />
      
    </div>
  )
}

export default ShopCategory
