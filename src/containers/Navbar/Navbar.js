import React from 'react';
import { Button, Nav, NavDropdown, Navbar, Form, FormControl } from 'react-bootstrap';
import Logo from './../../assests/logo/logo.png';

import { Container, Row, Col } from 'react-bootstrap';

import './Navbar.css';

function Navbar2() {
  return (
    <div>
      {/* <Container> */}
        {/* <Row>
          <Col sm={4} lg={6}>
          <Nav.Link href="./Serviceareas" className="li">Home</Nav.Link>
          </Col>
          <Col sm={4} lg={6}>
          <Navbar.Brand href="#home"> <img src={Logo} width="80%" height="100%"/> </Navbar.Brand>
          <Col sm={4} lg={6}>
          <Nav.Link href="./Serviceareas" className="li">Home2</Nav.Link>
          </Col>
          </Col>
        </Row> */}
      {/* </Container> */}


      <Row>
            <Col sm={4} lg={4}>
            <Nav.Link href="./Serviceareas" className="li">Home</Nav.Link>
            <Nav.Link href="./Serviceareas" className="li">About Us</Nav.Link>
            </Col>
            <Col sm={4} lg={4}>
            <Navbar.Brand href="#home"> <img src={Logo} width="80%" height="100%"/> </Navbar.Brand>
            </Col>
            <Col sm={4} lg={4}>
            <Nav.Link href="./Faq" className="li"><Button style={{backgroundColor: 'red', borderRadius: '20px', width: '150px', height: '40px'}}>Add new</Button> </Nav.Link>
            </Col>
          </Row>

    </div>
  );
}

export default Navbar2;
