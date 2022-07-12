
import './App.css'
import Menu from './Components/Navbar/Menu'
import Titulo from './Components/Titulo/Titulo'
import Piedra from './Imagenes/Ppt.png'
import tetris from './Imagenes/tetris.png'
import snake from './Imagenes/snake.png'
import laser from './Imagenes/lasership.png'
import logo from'./Imagenes/logo.png'

const construccion = () =>{
  alert('En estos momentos estamos en construccion')
}

const Logo =() =>{
  return (
    <div >
    <img src={logo} id='logo'/>
    </div>
  )
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
      <Logo/>
      <Menu/>
      <Titulo titulo= 'MUNDO ARCADE' subTitulo='Un torbellino de diversion'/>
      <Ppt/>  
      <Tetris/>
      <Snake/>
      <Laser/>
    </div>
    
  )
}

export default App

