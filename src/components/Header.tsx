import React from 'react';
import logo from '../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
import { GrDown } from 'react-icons/gr';

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Snubes" />
        </div>
        <nav>
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
      </div>
    </header>
  );
};

export default Header;
