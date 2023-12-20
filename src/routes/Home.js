import CollapsibleExample from "../components/Navbar";
import HomeImg from "../components/HomeContent";
import Footer from "../components/Footer";
import React from 'react'
import "../assesst/css/home.css";

const Home = () => {
  return (
    <div>
      <CollapsibleExample/>
      <div className='background-img'>
        <HomeImg/>
      </div>
        <Footer/>
    </div>
  )
}

export default Home
