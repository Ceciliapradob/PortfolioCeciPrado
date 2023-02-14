import React from 'react'
import './App.css'
import Header from './components/Header/Header';
import About from './components/About/About';
import TechSkill from './components/TechSkill/Tech';
import Proyect from './components/Proyect/Proyect';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';



function App() {
  const titulo= "DESARROLLADORA FRONT END"
  
  return (
  <>
  <Header />
  <About titulo={titulo}/> 
  <TechSkill /> 
  <Proyect />
  <Contact /> 
   
  <Footer /> 

  </>
  )
}

export default App
