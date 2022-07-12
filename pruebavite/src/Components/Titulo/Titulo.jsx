import React from "react";
import './Titulo.css';


const Titulo = ({titulo, subTitulo}) => {
  
  return(
    
    <>
    <h1>{titulo}</h1> 
    <h4> {subTitulo} </h4>
    </>
    

  )
}
export default Titulo