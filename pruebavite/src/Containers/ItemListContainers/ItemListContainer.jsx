import React from 'react'
import Roca from '../../images/Ppt.png'
import Tetris from '../../images/tetris.png'
import Snake from '../../images/snake.png'
import Laser from '../../images/lasership.png'

import './ItemListContainer.css'


const ItemListContainer = (props) => {
  return (
    <div>
      <span>
        <img src={Roca} onClick={props.construccion} />
        <h4>Piedra, Papel o Tijera</h4>
      </span>
      <span>
        <img src={Tetris} onClick={props.construccion}/>
        <h4>Tetris</h4>
      </span>
      <span>
        <img src={Snake} onClick={props.construccion} />
        <h4>Snake</h4>
      </span>
      <span>
        <img src={Laser}  onClick={props.construccion}/>
        <h4>Laser ship</h4>
      </span>
    </div>
  )
}

export default ItemListContainer