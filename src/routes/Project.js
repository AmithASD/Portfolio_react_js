import CollapsibleExample from "../components/Navbar";
import ProjectContent from "../components/ProjectContent";
import Footer from "../components/Footer";
import React from 'react'
import '../assesst/css/project.css'
import PricingCard from "../components/PricingCard";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      <CollapsibleExample/>
      <div className='project-background-img'>
          <ProjectContent/>
      </div>
          <Work/>
          <PricingCard/>
        <Footer/>
    </div>
  )
}

export default Project
