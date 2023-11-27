import React from 'react'
import './Navbar.css';
import { NavLink, Route, Router ,Link} from 'react-router-dom';
import Classes from './Classes';

const Navbar = () => {
  return (
    <div>
      < div className="navbar">
        <h1>Suprimo</h1>
        <div className="navContent">
            <Link to="/">Home</Link>
            <Link to="/Classes">Classes</Link>
            <Link to="/team">Team</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About Us</Link>
          <button id="memberbtn">Membership Enquiry</button>

        </div>
      </div>
    </div>
  )
}

export default Navbar