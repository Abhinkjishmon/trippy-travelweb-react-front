import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>Trippy</h1>
            <ul className='nav-menu'>
                <li>
                    <Link className='nav-links' to='/'><i className='fa-solid fa-house'></i> Home</Link>
                </li>
                <li>
                    <Link className='nav-links' to='/about'><i className='fa-solid fa-circle-info'></i>About</Link>
                </li>
                <li>
                    <Link className='nav-links' to='/service'><i className='fa-solid fa-briefcase'></i>Service</Link>
                </li>
                <li>
                    <Link className='nav-links' to='/contact'><i className='fa-solid fa-address-book'></i>Contact</Link>
                </li>
                <li>
                    <Link className='nav-links-mobile' to='/signup'>Sign Up</Link>
                </li>
                <button>Sign Up</button>
            </ul>
        </nav>
    )
}

export default Navbar