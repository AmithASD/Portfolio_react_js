import React from 'react'
import '../assesst/css/aboutcontent.css';
import { Link } from 'react-router-dom';
import Top from "../assesst/img/project.jpg"

const AboutContent = () => {
  return (
    <>
      <div className='about-content-outer'>
          <div className='heading'>
            <h1>ABOUT.</h1>
            <p>Im a freindly Software Engineer & Web developer </p>
          </div>
          <div className='about'>
            <div className='left'>
              <h2>Who Am I?</h2>
              <p>Im a  react front-end developer and laravel back-end developer.I create responsive secure websites for my clients & I create  secure software for my clients.</p>
              <Link to="/contact-us">
                <button className='btn btn-dark'>Contact Me</button>
              </Link>
            </div>
            <div className='right'>
              <div className='img-container'>
                <div className='img-stack top'>
                  <img src={Top} alt='true'/>
                </div>
                <div className='img-stack bottom'>
                  <img src={Top} alt='true'/>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default AboutContent
