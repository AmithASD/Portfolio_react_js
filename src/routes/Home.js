import CollapsibleExample from "../components/Navbar";
import HomeContent from "../components/HomeContent";
import Footer from "../components/Footer";
import React from 'react'
import "../assesst/css/home.css";

const Home = () => {
  return (
    <div>
        <CollapsibleExample/>
        <div className='home-background-img'>
            <HomeContent/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
