import React from 'react'



function ItemList() {
  

  setTimeout(() => {

  const Ppt = {"id":"Ppt","tittle":"Piedra, papel o tijera", "description":"Debes seleccionar el arma vencedora según las siguientes reglas: La piedra aplasta la tijera, la tijera corta el papel y el papel envuelve la piedra", "price": "5 Euros", "pictureURL": "../../images/Ppt.png" };
    let myJSON = JSON.stringify(Ppt);
    localStorage.setItem("testJSON", myJSON);

    
    
    /*const Snake = {"id":"Ppt","tittle":"Piedra, papel o tijera", "description":"Debes seleccionar el arma vencedora según las siguientes reglas: La piedra aplasta la tijera, la tijera corta el papel y el papel envuelve la piedra", "price": "5 Euros", "pictureURL": "../../images/Ppt.png" }*/

    
  }, 2000)

  return (
    <>

    
    </>



  )
}

export default ItemList