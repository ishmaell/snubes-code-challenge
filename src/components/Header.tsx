import React from 'react';
import logo from '../assets/images/logo.svg';
import logoText from '../assets/images/logo-text.svg';
import { NavLink } from 'react-router-dom';
import { GrDown } from 'react-icons/gr';
import { FiMenu } from 'react-icons/fi';

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img className="main-logo" src={logo} alt="Snubes" />
          <img className="mobile-logo" src={logoText} alt="Snubes" />
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink to="./">About Us</NavLink>
            </li>
            <li>
              <NavLink to="./">How it works</NavLink>
            </li>
            <li>
              <NavLink to="./">Become a Partner</NavLink>
            </li>
            <li>
              <NavLink className="has-menu" to="./">
                EUR <GrDown />
              </NavLink>
            </li>
            <li>
              <NavLink className="has-menu" to="./">
                EU <GrDown />
              </NavLink>
            </li>
            <li>
              <NavLink to="./">Sign In</NavLink>
            </li>
            <li>
              <NavLink to="./">Get Accesss</NavLink>
            </li>
          </ul>
        </nav>
        <div className="hamburger-menu">
          <FiMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
