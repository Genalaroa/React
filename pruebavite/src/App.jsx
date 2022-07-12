

import NavBar from './Components/NavBar/NavBar'
import Titulo from './Components/Titulo/Titulo'
import Piedra from './images/Ppt.png'
import tetris from './images/tetris.png'
import snake from './images/snake.png'
import laser from './images/lasership.png'


//import './App.scss';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const construccion = () =>{
  alert('En estos momentos estamos en construccion')
}


const Ppt = () =>{
  return(
    <div>
      <img src={Piedra}  onClick={construccion}/>
      <h4>Piedra, Papel o Tijera</h4>
    </div>
  )
}

const Tetris = () =>{
  return(
    <div>
      <img src={tetris}  onClick={construccion}/>
      <h4>Tetris</h4>
    </div>
  )
}

const Snake = () =>{
  return(
    <div>
      <img src={snake} onClick={construccion} />
      <h4>Snake</h4>
    </div>
  )
}

const Laser = () =>{
  return(
    <div>
      <img src={laser}  onClick={construccion}/>
      <h4>Laser ship</h4>
    </div>
  )
}

function App() {


  return (
    <div className="App">
      
      <NavBar />
      
      <Titulo titulo= 'MUNDO ARCADE' subTitulo='Un torbellino de diversion'/>
      
      <Ppt/>  
      <Tetris/>
      <Snake/>
      <Laser/>
    </div>
    
  )
}

export default App

