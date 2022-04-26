import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-nav'>
        <h3 className='navname'>Mama Africa</h3>
        <ul className='navbar-links'>
            <li><Link to='/' className='Link'>Home</Link></li>
            <li><Link to='/products' className='Link'>Products</Link></li>
            <li><Link to='/about' className='Link'>About</Link></li>
            <li><Link to='/contact-us' className='Link'>Contact us</Link></li>
        </ul>
        </div>
        <img src='/food3.jpg'/>
    </div>
  )
}

export default Navbar