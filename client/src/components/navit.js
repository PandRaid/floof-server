import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navit.css';
import fluff from '../images/fluff.png';
import fluffy from '../images/fluffy.png';
import insta from '../images/insta.svg'
import fb from '../images/fb.svg'

const Navit = () => (
  <nav className="navit">
    <NavLink to="/">
      <img
        src={fluff}
        alt=""
        className="mb-4 mt-2 responsive padleft"
      />
      <img
        src={fluffy}
        alt=""
        className="mb-4 mt-2 responsive-wide"
      />
    </NavLink>

    <NavLink
      activeClassName="navit__link--active"
      className="navit__link mb-4 mt-4"
      to="/about"
    >
      About
    </NavLink>
    <NavLink
      activeClassName="navit__link--active"
      className="navit__link mb-4 mt-4"
      to="/contact"
    >
      Contact
    </NavLink>
    <NavLink
      activeClassName="navit__link--active"
      className="navit__link mb-4 mt-4"
      to="/available"
    >
      Available
    </NavLink>
    <NavLink
      activeClassName="navit__link--active"
      className="navit__link mb-4 mt-4"
      to="/queens"
    >
      Queens
    </NavLink>
    <NavLink
      activeClassName="navit__link--active"
      className="navit__link mb-4 mt-4"
      to="/studs"
    >
      Studs
    </NavLink>
    <NavLink
      activeClassName="navit__link--active"
      className="navit__link mb-4 mt-4"
      to="/pricing"
    >
      Pricing
    </NavLink>
    <a href="https://www.instagram.com/fluffyfamilyfrenchies">
      <img
        alt=""
        src={insta}
        className="navit__link mb-4 mt-4"
      />
    </a>
    <a href="https://www.facebook.com/fluffyfamilyfrenchies">
      <img
        alt=""
        src={fb}
        className="navit__link mb-4 mt-4 padright"
      />
    </a>
  </nav>
);

export default Navit;
