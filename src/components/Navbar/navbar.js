import React from 'react';
import { Link } from 'react-router-dom';
import NavBarStyles from './navbarStyles';

const NavBar = () => {
  return (
    <NavBarStyles>
      <nav>
        <ul>
          <li>
            <Link to="/" className="logo">
              Neptrip
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/destinations">Destinations</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
    </NavBarStyles>
  );
};

export default NavBar;
