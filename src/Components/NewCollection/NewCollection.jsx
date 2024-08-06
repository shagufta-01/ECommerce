import React from 'react'
import './NewCollecttion.css'
import Item from '../Item/Item'
import new_collection from '../Assets/Assets/new_collections'
function NewCollection() {
  return (
    <div className='newCollection'>
      <h1>New Collections</h1><hr />
      <div className='collections'>
{new_collection.map((item,i)=>{
    return <Item  key={item} id={item.id} name={item.name} neew_price={item.new_price} image={item.image} old_price={item.old_price} />
})}
      </div>
    </div>
  )
}

export default NewCollection
