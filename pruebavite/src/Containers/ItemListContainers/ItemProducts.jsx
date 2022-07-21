import React from 'react'
import Roca from '../../images/Ppt.png'
import Tetris from '../../images/tetris.png'
import Snake from '../../images/snake.png'
import Laser from '../../images/lasership.png'
import ItemCount from '../../Components/Count/ItemCount'
import ItemList from './ItemList'

import './ItemProducts.css'


const ItemProducts = ({greeting}) => {

  const onAdd = (count) =>{
    alert ('Se han agregado '+count+ ' articulos al carrito')
    console.log ('Se han agregado '+count+ ' articulos al carrito')
  }
  

  return (
    
    <>  
    
    
    <div className='juegos '>
      <span className='games col-3'>
        <img src={Roca} />
        <h4>Piedra, Papel o Tijera</h4>
        <ItemCount  initial={1} stock ={10} onAdd={onAdd} />
      </span>
      <span className='games col-3'>
        <img src={Tetris} />
        <h4>Tetris</h4>
        <ItemCount initial={1} stock ={10} onAdd={onAdd}/>
      </span>
      <span className='games col-3'>
        <img src={Snake}  />
        <h4>Snake</h4>
        <ItemCount initial={1} stock ={10} onAdd={onAdd} />
      </span>
      <span className='games col-3'>
        <img src={Laser}  />
        <h4>Laser ship</h4>
        <ItemCount  initial={1} stock ={10} onAdd={onAdd}/>
      </span>
    </div>
    
    </>
  )
}

export default ItemProducts