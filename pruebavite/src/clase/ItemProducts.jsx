import React from 'react'
import Roca from '../../images/Ppt.png'
import Tetris from '../../images/tetris.png'
import Snake from '../../images/snake.png'
import Laser from '../../images/lasership.png'
import ItemCount from '../Components/Count/ItemCount'
import ItemList from '../Containers/ItemListContainers/ItemList'

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
















import React from 'react'
import { useState, useEffect} from 'react'
import ItemCount from '../../Components/Count/ItemCount'





function ItemDetailContainer  ()  {

 /* const [juegos, setJuegos] = useState([])

  const getItem = async() =>{

    try {
      const resp = await fetch ('../../assets/Json/DATA.json')
      const dataParse = await resp.json()
      setJuegos (dataParse)
    } catch (error) {
      console.log(error)
    }

    useEffect(() => {
      getItem()
    }, [])
    console.log(juegos)

    }

    /*const productos = [ 
      { id : 'Tts' , tittle: 'Tetris', description : 'Debes seleccionar el arma vencedora según las siguientes reglas: La piedra aplasta la tijera, la tijera corta el papel y el papel envuelve la piedra', price : 5 , pictureURL : Tetris},
      {id : 'Lsh' , tittle: 'Laser ship', description : 'Debes seleccionar el arma vencedora según las siguientes reglas: La piedra aplasta la tijera, la tijera corta el papel y el papel envuelve la piedra', price : 5 , pictureURL : Laser }
    ]


    
    const task = new Promise((res, rej) => {
    

    setTimeout(() => {
      res(productos)
    }, 2000)


    
  })

 , [])*/


  

  

  /* const getFetch = () =>{
    fetch("/assets/Json/DATA.json")
    .then (respuesta =>{
      return respuesta.json ( )
    })

    .then (response => console.log(response.juegos))
    .catch (err => console.log(err))

  }

  useEffect(() => {

    getFetch()

  }, [])*/ 
    
 

  return (
    <div>
      <getItem >
        <ItemCount/>
      </getItem> 
    </div>
  )
}

export default ItemDetailContainer