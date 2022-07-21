import React from 'react'
import { useEffect, useState } from 'react'
import Roca from '../../images/Ppt.png'
import Tetris from '../../images/tetris.png'
import Snake from '../../images/snake.png'
import Laser from '../../images/lasership.png'
import ItemList from './ItemList'
import ItemCount from '../../Components/Count/ItemCount'




const ItemListContainer = ({greeting}) => {
  const[items , setItems] = useState ([])
  const [loading, setLoading] = useState (true)

  const productos = [ 
    { id : 'Ppt' , tittle: 'Piedra, papel o tijera', description : 'Debes seleccionar el arma vencedora según las siguientes reglas: La piedra aplasta la tijera, la tijera corta el papel y el papel envuelve la piedra', price : '5 €', pictureURL : Roca },
    { id : 'Snk' , tittle: 'Snake', description : 'Debes seleccionar el arma vencedora según las siguientes reglas: La piedra aplasta la tijera, la tijera corta el papel y el papel envuelve la piedra', price : 5 , pictureURL : Snake },
    {  id : 'Tts' , tittle: 'Tetris', description : 'Debes seleccionar el arma vencedora según las siguientes reglas: La piedra aplasta la tijera, la tijera corta el papel y el papel envuelve la piedra', price : 5 , pictureURL : Tetris},
    {id : 'Lsh' , tittle: 'Laser ship', description : 'Debes seleccionar el arma vencedora según las siguientes reglas: La piedra aplasta la tijera, la tijera corta el papel y el papel envuelve la piedra', price : 5 , pictureURL : Laser },

    
  ]

  const task = new Promise((res, rej) => {
    

    setTimeout(() => {
      res(productos)
    }, 2000)


    
  })

  useEffect(() => {
    task.then(res => setItems(res))
    .catch (error => console.log(error))
    .finally(() => setLoading(false))
  }, [])

  console.log (items)
  

  return (
    <div>
      <h5 className='col-12'>{greeting} </h5>
      {loading ? <h1 style={{color: 'white'}}>Cargando...</h1> : 
      <ItemList items={items}>
        <ItemCount/>
      </ItemList> 
      
      }

    </div>
  )
}

export default ItemListContainer