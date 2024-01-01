import React from 'react'
import '../assesst/css/aboutcontent.css';
import { Link } from 'react-router-dom';
import Top from "../assesst/img/Me.jpg"
import Pdf from "../assesst/files/Amith(CV) SE_WEB.pdf";

const AboutContent = () => {
  return (
    <>
        <div className='about-text-content-outer'>
            <div className='about'>
                <div className='about-left'>
                  <h2 >Who Am I?</h2>
                  <p >Im a  react front-end developer and laravel back-end developer.I create responsive secure websites for my clients & I create  secure software for my clients.<br></br>I am a Designer of Web Sites, Blog Sites and also Desktop Software Applications.</p>
                  <p><a href={Pdf} download>Download CV</a></p>
                  <Link to="/contact-us">
                    <button className='btn btn-dark contact-btn'>Contact Me</button>
                  </Link>
                </div>
                <div className='about-midle'>
                  <h2 style={{color:'white'}}>My Skills?</h2>
                  <hr style={{color:'white' , Weight:'600'}}></hr>
                  <div className='about-midle-inner'>
                    <div className='inner-left'>
                      <p>HTML</p>
                      <p>CSS</p>
                      <p>SASS</p>
                      <p>JavaScript</p>
                      <p>PHP</p>
                      <p>MySQL</p>
                      <p>Java</p>
                    </div>
                    <div className='inner-right'>
                      <p>Bootstrap</p>
                      <p>React JS</p>
                      <p>Zend</p>
                      <p>Laravel</p>
                      <p>Figma</p>
                      <p>Photoshop</p>
                    </div>
                  </div>
                </div>
                <div className='about-right'>
                    <img src={Top} alt='image'></img>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutContent
