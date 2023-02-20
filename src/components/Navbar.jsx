import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>Trippy</h1>
            <ul className='nav-menu'>
                <li>
                    <Link to='/'><i className='fa-solid fa-house'></i> Home</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar