
import './NavBar.css'
import CartWidget from './CartWidgets'
import Logotipo from './Logo'



const NavBar = (props) => {
  return(

    <>
      
      <div className='row menu col-12' >
        <div className='col-1'>
        <Logotipo /> 
        </div>

        <div>
        <ul className="nav justify-content-center col-6 offset-3">
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
      
      <div>
      <CartWidget className='col-1' />  
      </div>
      
    </div>
    </>
    

  
  )
}

export default NavBar