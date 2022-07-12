import Piedra from '../images/Ppt.png'
import tetris from '../images/tetris.png'
import snake from '../images/snake.png'
import laser from '../images/lasership.png'

const construccion = () =>{
  alert('En estos momentos estamos en construccion')
};

const ComponenteContenedor = () => {
  return (
    <div className="juegos">
      <div>
        <img src={Piedra}  onClick={construccion}/>
        <h4>Piedra, Papel o Tijera</h4>
        <img src={tetris}  onClick={construccion}/>
        <h4>Tetris</h4>
        <img src={snake} onClick={construccion} />
        <h4>Snake</h4>
        <img src={laser}  onClick={construccion}/>
        <h4>Laser ship</h4>
      </div>
    </div>
  )
}

export default ComponenteContenedor