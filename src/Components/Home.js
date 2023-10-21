import React from 'react';
import NavBar from './NavBar.js';
import AboutBackgroundImage from '../Assets/AboutBackgroundImage.png';

const Home = () => {
  return (
    <div className='home-container'>
      <NavBar />
      <div className="home-banner-container">
        <img src={AboutBackgroundImage} alt="" />
        <div className="overlay-content">
          <h4>MEDIPLUS</h4>
          <h1 className='primary-heading'>Atención Para El Cuidado De Tu Salud</h1>
          <button className="boton">Ver Más</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
