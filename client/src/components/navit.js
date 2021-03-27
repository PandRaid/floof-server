import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navit.css';
import logolong from '../images/fluff2.png';
import insta from '../images/insta.svg'
import fb from '../images/fb.svg'
import {Nav, Navbar} from 'react-bootstrap'

const Navit = () => (
  <Navbar className="navit" expand="lg">
  <Navbar.Brand href="/" className="pad-header"> 
      <img
        src={logolong}
        className="img__size__navit"
        alt="React Bootstrap logo"
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className="navit__link" href="about">About</Nav.Link>
      <Nav.Link className="navit__link" href="contact">Contact</Nav.Link>
      <Nav.Link className="navit__link" href="available">Available</Nav.Link>
      <Nav.Link className="navit__link" href="queens">Queens</Nav.Link>
      <Nav.Link className="navit__link" href="studs">Studs</Nav.Link>
      <Nav.Link className="navit__link" href="pricing">Pricing</Nav.Link>
      <Navbar.Brand href="https://www.instagram.com/fluffyfamilyfrenchies" className="navit__link mt-4"> 
      <img
        src={insta}
        alt="React Bootstrap logo"
      />
      </Navbar.Brand>
      <Navbar.Brand href="https://www.facebook.com/fluffyfamilyfrenchies" className="navit__link padright mt-4"> 
          <img
            src={fb}
            alt="React Bootstrap logo"
          />
      </Navbar.Brand>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);

export default Navit;


