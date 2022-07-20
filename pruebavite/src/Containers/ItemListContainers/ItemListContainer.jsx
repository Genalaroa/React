import React from 'react'
import Roca from '../../images/Ppt.png'
import Tetris from '../../images/tetris.png'
import Snake from '../../images/snake.png'
import Laser from '../../images/lasership.png'
import ItemCount from '../../Components/Count/ItemCount'
import ItemList from './ItemList'

import './ItemListContainer.css'


const ItemListContainer = (props) => {
  return (
    <div className='juegos '>

      <span className='games col-3'>
        <img src={Roca} />
        <h4>Piedra, Papel o Tijera</h4>
        <ItemCount  initial={1} stock ={10} />
        <ItemList />
      </span>
      <span className='games col-3'>
        <img src={Tetris} onClick={props.construccion}/>
        <h4>Tetris</h4>
        <ItemCount initial={1} stock ={10} />
      </span>
      <span className='games col-3'>
        <img src={Snake} onClick={props.construccion} />
        <h4>Snake</h4>
        <ItemCount initial={1} stock ={10} />
      </span>
      <span className='games col-3'>
        <img src={Laser}  onClick={props.construccion}/>
        <h4>Laser ship</h4>
        <ItemCount  initial={1} stock ={10} />
      </span>
    </div>
  )
}

export default ItemListContainer