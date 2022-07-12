
import { useState } from "react"
// useState (retorna array con 2 posiciones) => [0, 1]

import './Count.css'

const Contador = () =>{


  const [count, setCount] = useState (0)
  

  const Aumentar = () =>{

    setCount( count + 1)
  
  }

  return(

    <div>
      {count}
      <button onClick={Aumentar}>Aumentar</button>
    </div>
  
  )

}

export default Contador