import React from 'react'
import  "../assesst/css/homecontent.css";
import { Link } from 'react-router-dom';

const HomeContent = () => {
  return (
    <>
      <div className='content-outer'>
        <h5>HI, I'M A PROFESIONAL</h5><br></br>
        <h1>Software Engineer.</h1>
      </div>
      <div className='btn-outer'>
        <Link to="/projects" className='btn btn-dark-pro'> PROJECTS</Link>
        <Link to="/contact-us" className='btn btn-light-con'> CONTACT</Link>
      </div>
    </>
  )
}

export default HomeContent
