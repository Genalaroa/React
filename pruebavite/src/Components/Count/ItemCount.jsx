
import { useState, useEffect } from "react"
// useState (retorna array con 2 posiciones) => [0, 1]

import './ItemCount.css'



const Contador = () =>{

  const [count, setCount] = useState (1);

  const Aumentar = () =>{
    setCount( count + 1)
  }

  const Disminuir = () =>{
    setCount( count - 1)
  }

  const Carrito = () =>{
    console.log ('Se han agregado '+count+ ' articulos al carrito')
  }
  
  return (

  <div className="botones row col-2 offset-5 ">
    <div className="contador">
      <button disabled={count <=1} onClick={Disminuir}>-</button>
      <span className="count">{count}</span>
      <button disabled={count >=10} onClick={Aumentar}>+</button>
    </div> 
    <div className="carrito">
      <button onClick={Carrito}>Agregar al carrito</button>
      </div>
  </div>

  );
  


  {/*
  //const [bool, setBool] = useState (true)

    {/*const CambiarBool = () =>{
      setBool(!bool)
    }

    useEffect(()=>{ //hook
      console.log ('siempre se ejecuta 1')
    })

    useEffect(()=>{  //hook de apis. Se llama solo 1 vez 
      console.log ('solo se ejecuta 1 vez') // se guardo en un estado
    }, []) 

    useEffect(()=>{  
      console.log ('se ejecuta cuando se aplica la array') 
    }, [bool]) //dentro del array van las dependencias. se ejecutara solo cuando cambie el estado de bool

  console.log('despues del renderizado del componente')*/}

  
}

export default Contador