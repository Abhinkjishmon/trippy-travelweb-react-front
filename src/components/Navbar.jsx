import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>Trippy</h1>
            <ul className='nav-menu'>
                <li className='nav-links'>
                    <Link to='/'><i className='fa-solid fa-house'></i> Home</Link>
                </li>
                <li className='nav-links'>
                    <Link to='/about'><i className='fa-solid fa-circle-info'></i>About</Link>
                </li>
                <li className='nav-links'>
                    <Link to='/service'><i className='fa-solid fa-briefcase'></i>Service</Link>
                </li>
                <li className='nav-links'>
                    <Link to='/contact'><i className='fa-solid fa-address-book'></i>Contact</Link>
                </li>
                <li className='nav-links-mobile'>
                    <Link to='/signup'>Sign Up</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar