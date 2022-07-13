

import NavBar from './Components/NavBar/NavBar'
import Titulo from './Components/Titulo/Titulo'
import ItemListContainer from './Containers/ItemListContainers/ItemListContainer';
import Contador from './Components/Count/ItemCount';



import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const construccion = () =>{
  alert('En estos momentos estamos en construccion')
};
console.log (construccion)

function App() {


  return (
    <div className="App">
      
      <NavBar />
      <Titulo titulo= 'MUNDO ARCADE' subTitulo='Un torbellino de diversion'/>
      <Contador/>
      <ItemListContainer/>
      
      
    </div>
    
  )
}

export default App

