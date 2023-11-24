import React from 'react'
import './Navbar.css';
import { NavLink, Route, Router } from 'react-router-dom';
import Classes from './Classes';

const Navbar = () => {
  return (
    <div>
      < div className="navbar">
        <h1>Suprimo</h1>
        <div className="navContent">
          <a>
            <NavLink to="/">Home</NavLink>
          </a>
          <a>
            <NavLink to="/Classes">Classes</NavLink>
          </a>
          <a>
            <NavLink to="/team">Team</NavLink>
          </a>
          <a>
            <NavLink to="/blog">Blog</NavLink>

          </a>
          <a>
            <NavLink to="/about">About Us</NavLink>
          </a>
          <button id="memberbtn">Membership Enquiry</button>

        </div>
      </div>
    </div>
  )
}

export default Navbar