

import NavBar from './Components/NavBar/NavBar'
import Titulo from './Components/Titulo/Titulo'
import ItemListContainer from './Containers/ItemListContainers/ItemListContainer';




import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';






function App() {

  const saludo = () => {
    alert('Hola Mundo')
  }


  return (
    <div className="App">
      
      <NavBar />
      <Titulo titulo= 'MUNDO ARCADE' subTitulo='Un torbellino de diversion'/>
      <ItemListContainer greeting='Bienvenidos a mundo arcade. Una plataforma para encontrar juegos de toda la vida.' />
      
      
    </div>
    
  )
}

export default App

