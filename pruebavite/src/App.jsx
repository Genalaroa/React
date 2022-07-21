import {lazy, Suspense} from 'react'

import NavBar from './Components/NavBar/NavBar'
import Titulo from './Components/Titulo/Titulo'
import ItemListContainer from './Containers/ItemListContainers/ItemListContainer';
//import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './Containers/CartContainer/CartContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetailContainer = lazy (() => import ('./Containers/ItemDetailContainer/ItemDetailContainer'))

function App() {

  return (
    <BrowserRouter> 
      <div className="App">
        <NavBar />
        <Titulo titulo= 'MUNDO ARCADE' subTitulo='Un torbellino de diversion'/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenidos a mundo arcade. Una plataforma para encontrar juegos de toda la vida.'/>} /> 
          <Route path='/detalle' element= {
            <Suspense fallback = {<div> Cargando...</div> }>  
              <ItemDetailContainer />
            </Suspense> }/>
          <Route path='/cart' element= {<CartContainer/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

