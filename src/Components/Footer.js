import React from 'react'

const Footer = () => {
  return (
    <footer class="footer">
        <div class="footer-container">
            <div class="column">
                <h1 className='nav-title'>
                    <span class="light-white">MEDI</span>
                    <span class="light-blue">PLUS</span>
                </h1>
                <p>
                  ¡Medicina al alcance de todos!
                </p>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="column">
                <h3>Escribenos</h3>
                <p>
                  pqr@mediplus.com
                </p>
                <p>pidetucita@mediplus.com</p>
                <p>info@mediplus.com</p>
                <p>+57 (604) 444 41 23</p>
            </div>
            <div class="column">
                <h3>Links</h3>
                <p>Inicio</p>
                <p>Sobre Nosotros</p>
                <p>Servicios</p>
                <p>Contactános</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer