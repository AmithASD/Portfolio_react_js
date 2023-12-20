import React from 'react'
import  "../assesst/css/homecontent.css";
import { Link } from 'react-router-dom';

const HomeImg = () => {
  return (
    <>
      <div className='content-outer'>
        <h5>HI, I'M A PROFESIONAL</h5><br></br>
        <h1>Software Engineer.</h1>
      </div>
      <div className='btn-outer'>
        <Link to="/projects" className='btn btn-dark'> PROJECTS</Link>
        <Link to="/contact" className='btn btn-light'> CONTACT</Link>
      </div>
    </>
  )
}

export default HomeImg
