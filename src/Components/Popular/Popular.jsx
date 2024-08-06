import React from 'react'
import './Popular.css'
import data_product from '../Assets/Assets/data'
import Item from '../Item/Item'
function Popular() {
  return (
    <div className='popular'>
    <h1>POPULAR INN WOMEN</h1>
      <hr />
      <div className='popular-item'>
{data_product.map((item)=>{
    return <Item  key={item} id={item.id} name={item.name} neew_price={item.new_price} image={item.image} old_price={item.old_price} />
})}
      </div>
    </div>
  )
}

export default Popular
