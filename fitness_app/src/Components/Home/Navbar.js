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
          <a>
            <Link to="/">Home</Link>
          </a>
          <a>
            <Link to="/Classes">Classes</Link>
          </a>
          <a>
            <Link to="/team">Team</Link>
          </a>
          <a>
            <Link to="/blog">Blog</Link>

          </a>
          <a>
            <Link to="/about">About Us</Link>
          </a> 
          <button id="memberbtn">Membership Enquiry</button>

        </div>
      </div>
    </div>
  )
}

export default Navbar