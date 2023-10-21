import React from 'react'
import BannerImage from '../Assets/BannerImage.png'

const About = () => {
  return (
    <div class="about-section-container">
        <div class="about-section-image-container">
            <img src={BannerImage} alt=""/>
        </div>
        <div class="about-section-text-container">
            <h6 className='primary-subheading'>SOBRE NOSOTROS</h6>
            <h1 className='primary-heading'>Hospital Con Alma</h1>
            <p className='primary-text'>
            Nuestra razón de ser son los pacientes, con quienes estamos comprometidos de manera entusiasta. Reconocemos en Usted a un ser único, merecedor de respeto. Aportamos lo mejor de nosotros para su recuperación y bienestar a través de un servicio oportuno, competente y con altos estándares técnico – científicos. 
            </p>
        </div>
    </div>
  )
}

export default About