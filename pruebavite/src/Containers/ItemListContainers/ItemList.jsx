import React from 'react'





function ItemList() {
  

  setTimeout(() => {

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '5aa53d6b80msh1cdd8e6bfbfa667p1b464ajsn936735a9561d',
        'X-RapidAPI-Host': 'my-store2.p.rapidapi.com'
      },
      body: '{"name":"Piedra, papel o tijer","price":"5€","category":" Juego","description":"Un sencillo juego de piedra, papel o tijera. Debes escoger al azar y esperar que no sea la perdedora. Mucha suerte"}'
    };
    
    fetch('https://my-store2.p.rapidapi.com/catalog/product', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

    
  }, 2000)

  return (
    <>
    
    </>



  )
}

export default ItemList