import React from 'react';
import './Proyect.css'
import Venicrea from '../../assets/venicrea.png'
import Desarroladora from '../../assets/desarrolladora.png'
import Portfolio from '../../assets/portfolioceci2.png'
import Github from '../../assets/github.png'



const Proyect = () => {

    return(
       <> 
       
       <div className='contenedor-proyectos'> 
       <hr />
       <h1 className='titulo-proyectos' id='proyectos'>Proyectos realizados</h1> 
    <div className="contenedor-card">
  <div className="card">
    <figure>
      <img src={Venicrea} alt />
    </figure>
    <div className="contenido">
      <h3>Landing Page</h3>
      <p>
      Desarrollar una Landing Page para agencia de Marketing, con el objetivo de mostrar el servicio a ofrecer, equipo que maneja la agencia y cuenta con una sección de formulario para que dichos clientes puedan contactarse. 
      Fue basada en HTML- CSS- SASS y actualmente se está trabajando en la interactividad con Javascript.
      </p>
      
    </div>
    <div className='icono-github'>
     <a href="https://github.com/Ceciliapradob/LandingPage-Coder"> <img src={Github} alt="" /> </a>
    </div>
  </div>
  <div className="card">
    <figure>
      <img src={Portfolio} alt />
    </figure>
    <div className="contenido">
      <h3>Portafolio con React Js</h3>
      <p> Diseñar y desarrollar un portfolio que represente las actividades que realizo y tecnologias que manejo, el cual cuenta con una sección de formulario donde se puede contactar conmigo. Tiene secciones que dirigen hacia mi Github y/0 mi Curriculum asi puedan conocer un poco más sobre mi y lo que realizo. </p>
    </div>
    <div className='icono-github'>
     <a href="https://github.com/Ceciliapradob/Proyecto-final-UTN"> <img src={Github} alt="" /> </a>
    </div>
  </div>

</div>

 <div className="boton">
 <button className='boton-proyectos'><a href="https://github.com/Ceciliapradob?tab=repositories"  className='link-proyectos'>Conocer los proyectos</a></button>
 </div>
 </div>
 
 
       </>
    )
}

export default Proyect