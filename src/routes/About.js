import CollapsibleExample from "../components/Navbar";
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";
import '../assesst/css/about.css';
import React from 'react';

const About = () => {
  return (
    <div>
        <CollapsibleExample/>
        <div className='about-background-img'>
          <AboutContent/>
        </div> 
        <Footer/>
    </div>
  )
}

export default About
