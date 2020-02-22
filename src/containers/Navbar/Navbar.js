import React from 'react';
import { Button, Nav, NavDropdown, Navbar, Form, FormControl } from 'react-bootstrap';
import Logo from './../../assests/logo/OfferHome-Logo.png'
import Topbar from './../Topheader/Topheader'
import './Navbar.css';

function Navbar2() {
  return (
    <div>
      <Navbar  collapseOnSelect expand="lg"  variant="white" id="navbar" >
          <Nav>
            <Nav.Link href="./Serviceareas" className="li">Home</Nav.Link>
            <Nav.Link href="./SuccessStories" className="li">About us</Nav.Link>
          </Nav>
        <Navbar.Brand href="#home"> <img src={Logo} width="100%" height="100%"/> </Navbar.Brand>
            <Nav.Link href="./Faq" className="li"><Button style={{backgroundColor: 'red'}}>Add new</Button> </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" variant="black"/>
        <Navbar.Collapse id="responsive-navbar-nav" variant="black">
          <Nav className="mr-auto" variant="black">

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar2;
