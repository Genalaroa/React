
import './NavBar.css'
import CartWidget from './CartWidgets'



const NavBar = (props) => {
  return(

    <>
        <CartWidget/>
    <div >
        <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link" href="#"  onClick={props.construccion}>Piedra, papel o tijera</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"  onClick={props.construccion}>Tetris</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"  onClick={props.construccion}>Snake</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"  onClick={props.construccion}>Laser</a>
        </li>
      </ul>
    </div>
    
    </>
    

  
  )
}

export default NavBar