import React from 'react';
import './BarraLateral.css';
import logo from '../img/logo.png'

const BarraLateral = () => {
  return ( 
    <div class="menu">
      <nav>
        <img src={logo} alt="" />
        <ul>
          <li><a href="">Serviços</a></li>
          <li><a href="">Guarnições</a></li>
        </ul>
      </nav>
    </div> );
}
 
export default BarraLateral;