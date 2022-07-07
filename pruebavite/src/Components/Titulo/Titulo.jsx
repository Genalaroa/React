import React from "react";
import './Titulo.css';

const Titulo = (props) => {
  console.log(props)
  return(
    
    <>
    <h1>{props.titulo}</h1> 
    <h4> {props.subTitulo} </h4>
    </>
    

  )
}
export default Titulo