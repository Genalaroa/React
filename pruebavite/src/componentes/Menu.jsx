import React from "react";
import './Menu.css'

const Menu = () => {
  return(
    <div>
    <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link" href="#">Carnes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Verduras</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Lácteos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" >Pescados</a>
        </li>
      </ul></div>
  )
}

export default Menu