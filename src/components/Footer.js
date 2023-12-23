import React from 'react'
import  '../assesst/css/footer.css';
import {FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa";

const footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='lacation'>
                    <div>
                    
                        <p><FaHome size={20} style={{color:"#fff", marginRight:"2rem" , marginRight:"2rem"}}/>No 44, Bogaha Ella, 05th Mile post,Veheragoda </p><p style={{paddingLeft:'50px'}}>Badalkumbura</p>
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
                    <h4>Social Links</h4>
                    <div className='email'>
                        <p><FaFacebook size={20} style={{color:"#fff", marginRight:"2rem" , marginRight:"2rem"}}/><a href='https://www.facebook.com/'>Facebook</a></p>
                        <p><FaLinkedin size={20} style={{color:"#fff", marginRight:"2rem" , marginRight:"2rem"}} /><a href='http://www.linkedin.com/in/amitha'>linkedin</a></p>
                        <p><FaInstagram size={20} style={{color:"#fff", marginRight:"2rem" , marginRight:"2rem"}}/><a href='https://www.instagram.com/sd.dissanayake99?igsh=ZGMxenIzNnpkN3Zq'>Instagram</a></p>
                        <p><FaGithub size={20} style={{color:"#fff", marginRight:"2rem" , marginRight:"2rem"}}/><a href='https://github.com/AmithAS'>Github</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer
