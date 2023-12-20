import CollapsibleExample from "../components/Navbar";
import Footer from "../components/Footer";
import FormContact from "../components/Form";
import ContactContent from "../components/ContactContent";
import "../assesst/css/contact.css";
import React from 'react';

const Contact = () => {
  return (
    <div>
        <CollapsibleExample/>
        <div className='contact-background-img'>
          <ContactContent/>
        </div>
        <FormContact/>
        <Footer/>
    </div>
  )
}

export default Contact
