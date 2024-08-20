import React from 'react'
import { Link } from 'react-router-dom';
import "../Style/Navbar.css"



function Navbar() {
  return (
<div className='navbar-container'>
    <nav className="navbar">

      <div className="navbar-title">Logo</div>
      <div className='navbar-links'>
      
      <Link to="/">Home</Link>
        <Link to="/solutions">Solutions</Link>
        <Link to="/cloud">Cloud</Link>
        <Link to="/ouradvantage">Our Advantage</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>

      
      
        </div>
       
      
    </nav>
    </div>
  )
}

export default Navbar