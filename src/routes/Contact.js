import Footer from "../components/Footer";
import FormContact from "../components/Form";
import ContactContent from "../components/ContactContent";
import "../assesst/css/contact.css";
import React from 'react';
import CollapsibleExample from "../components/Navbar";

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
