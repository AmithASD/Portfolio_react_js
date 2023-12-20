import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assesst/css/navbar.css";
import React from 'react'

function CollapsibleExample() {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary nav-outer">
            <Container>
                <Navbar.Brand href="/" style={{fontSize:"30px" , color:"white"} }>Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className='right-outer'>
                        <Nav className='link-page'>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/projects">Project</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact-us">Contact</Nav.Link>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  );
}

export default CollapsibleExample;
