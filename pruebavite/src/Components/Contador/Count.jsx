
import { useState, useEffect } from "react"
// useState (retorna array con 2 posiciones) => [0, 1]

import './Count.css'

const Contador = () =>{

  const [count, setCount] = useState (0)
  const [bool, setBool] = useState (true)

    const Aumentar = () =>{
      setCount( count + 1)
    }

    const CambiarBool = () =>{
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

    console.log('despues del renderizado del componente')

  return(

    <div className="contador col-12">
      {count}
      <button onClick={Aumentar}>Aumentar</button>
      <button onClick={CambiarBool}>Cambiar estado</button>
    </div>
  
  )

}

export default Contador