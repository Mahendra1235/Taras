import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../LOGO-TARAS.png';

function Header() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={Logo} alt="Company Logo" className="logo" />
        </Link>
      </div>
      <ul className="menu">
        <li><Link to="/solutions">Solutions</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
