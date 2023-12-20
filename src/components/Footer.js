import React from 'react'
import  '../assesst/css/footer.css';
import {FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa";

const footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='lacation'>
                    <div>
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem" , marginRight:"2rem"}}/>
                        <p>No 44, Bogaha Ella, 05th Mile post,Veheragoda</p>
                        <p>Badalkumbura</p>
                    </div>
                    <div className='phone'>
                        <p><FaPhone size={20} style={{color:"#fff", marginRight:"2rem" , marginRight:"2rem"}}/>+94 760158715</p>
                    </div>
                    <div className='email'>
                        <p><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem" , marginRight:"2rem"}}/>amithsandaruwan98@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='social'>
                    <h4>Social Media</h4>
                    <div className='email'>
                        <p><FaFacebook size={20} style={{color:"#fff", marginRight:"2rem" , marginRight:"2rem"}}/>amithsandaruwan98@gmail.com</p>
                        <p><FaLinkedin size={20} style={{color:"#fff", marginRight:"2rem" , marginRight:"2rem"}}/>amithsandaruwan98@gmail.com</p>
                        <p><FaInstagram size={20} style={{color:"#fff", marginRight:"2rem" , marginRight:"2rem"}}/>amithsandaruwan98@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer
