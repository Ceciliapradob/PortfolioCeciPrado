import React from 'react';
import './About.css'
import Cecilia from '../../assets/Cecifoto.jpg'
import Cielo from '../../assets/Cielo.jpg'

const About = (props) => {



  return (
    <>

      <div className="contenedor-sobremi">
        
        <div className="contenedor-texto">
          <h2 className="presentacion">Hola, soy</h2>
          <h2 className="presentacion-developer"><strong>{props.titulo}</strong></h2>
          <p className="presentacion-direccion">Buenos Aires, Argentina.</p>
          <div className="container-icons-header">
            <a className="vermas" href="https://github.com/" target="_blank">Ver más</a>
            <a className="contacto" href="https://web.whatsapp.com/">Contacto</a>
          </div>
        </div>
        <div className="contenedor-img">
          <img className="presentacion-foto" src={Cecilia} alt="Ceci"/>
        </div>
      </div>
     

      <div className="contenedor">
        <h1 className='cecilia'>CeciLia Prado</h1>
        <p className='parrafo'>Soy front end developer, manejo diversas tecnologías y me gusta el trabajo en equipo con la
          capacitacióm, me gusta sumar nuevas experiencias creciendo así aún más en lo personal y profesional. 
          Soy front end Junior estudiada en la universidad UTN</p> 
        
        <button className="button-leerMas"><a href="https://github.com/Ceciliapradob" target="_blank">Leer más</a></button>
      </div>


    </>
  )
}

export default About 