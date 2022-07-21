import React from 'react';
import {Button, Card }  from 'react-bootstrap';
import './Item.css'





const Item = ({item}) =>{
  const {tittle, description, price, pictureURL} = item

  return (

    <> 
    
      <Card className='card'>
        <Card.Img variant="top" src={pictureURL} />
        <Card.Body>
          <Card.Title>{tittle}</Card.Title>
          <Card.Text>
            {description} 
            <br />
            {price} 
          </Card.Text>
          <Button variant="primary">Mas detalle</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Item