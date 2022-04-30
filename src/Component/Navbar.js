import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
         <nav>
          <Link to="/home">Home</Link>
          <Link to="/review">Reviews</Link>
          <Link to="/dash">Dashboards</Link>
          <Link to="/about">About</Link>
          </nav>
       
        </div>
    );
};

export default Navbar;