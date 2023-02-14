import React from 'react';
import Html from '../../assets/html.png'
import Css from '../../assets/css.png'
import Sass from '../../assets/sass.webp'
import Reactjs from '../../assets/react-native.png'
import './Tech.css'

const Tech = () => {
    return(
        <>
        <div className='contenedor-tecnologias1'> 
        <hr />
        <h1 className='tecnologias' id='tecnologia'>Tecnologías que manejo</h1>
        <div className='contenedor-tecnologias'>
            <figure className="html">
            <h1><img src={Html} alt="icono html"/>HTML</h1>
            </figure>
            <figure className="css">
            <h1><img src={Css} alt="icono css"/>CSS</h1>
            </figure>
            <figure className="sass">
              <h1><img src={Sass} alt="icono sass"/>SASS</h1>
            </figure>
            <figure className="react">
              <h1><img src={Reactjs} alt="icono react"/>REACT JS</h1>
            </figure>
     </div>
     <div>
        
     </div>
     </div>
        </>
    )
}

export default Tech 