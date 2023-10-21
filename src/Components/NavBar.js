import React from 'react'

const NavBar = () => {
  return (
    <nav>
        <h1 className='nav-title'><span class="dark-blue">MEDI</span><span class="light-blue">PLUS</span></h1>
        <ul>
            <li class="active"><a href="#">Inicio</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contáctenos</a></li>
        </ul>
    </nav>

  )
}

export default NavBar;