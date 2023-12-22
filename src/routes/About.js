import CollapsibleExample from "../components/Navbar";
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";
import '../assesst/css/about.css';
import React from 'react';
import AboutWallcontent from "../components/AboutWallcontent";

const About = () => {
  return (
    <div>
        <CollapsibleExample/>
        <div className='about-background-img'>
          <AboutWallcontent/>
        </div> 
          <AboutContent/>
        <Footer/>
    </div>
  )
}

export default About
