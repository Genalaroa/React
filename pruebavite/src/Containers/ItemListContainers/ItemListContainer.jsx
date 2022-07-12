import React from 'react'
import Roca from '../../images/Ppt.png'
import Tetris from '../../images/tetris.png'
import Snake from '../../images/snake.png'
import Laser from '../../images/lasership.png'

const ItemListContainer = (props) => {
  return (
    <div>
      <img src={Roca} onClick={props.construccion} />
      <h4>Piedra, Papel o Tijera</h4>
      <img src={Tetris} onClick={props.construccion}/>
      <h4>Tetris</h4>
      <img src={Snake} onClick={props.construccion} />
      <h4>Snake</h4>
      <img src={Laser}  onClick={props.construccion}/>
      <h4>Laser ship</h4>
    </div>
  )
}

export default ItemListContainer