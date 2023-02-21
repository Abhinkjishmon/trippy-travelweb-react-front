import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = ()=>{
        setClicked(!clicked)
    }

    return (
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>Trippy</h1>
            <div className='menu-icons'>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"} onClick={handleClick}></i>
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                <li className='nav-list-links'>
                    <Link className='nav-links' to='/'><i className='fa-solid fa-house'></i> Home</Link>
                </li>
                <li className='nav-list-links'>
                    <Link className='nav-links' to='/about'><i className='fa-solid fa-circle-info'></i>About</Link>
                </li>
                <li className='nav-list-links'>
                    <Link className='nav-links' to='/service'><i className='fa-solid fa-briefcase'></i>Service</Link>
                </li>
                <li className='nav-list-links'>
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