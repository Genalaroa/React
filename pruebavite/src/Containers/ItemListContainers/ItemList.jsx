import React from 'react'
import Item from './Item'
import './Itemlist.css'

const ItemList =({items}) =>{
  return (
    <div className='items'>
      {items.map((item) => <Item item={item} key={item.id} />)}
      
    </div>
  )
}

export default ItemList