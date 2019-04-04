import React from 'react';
import './Navbar.css';
import piePic from '../../assets/piepic.jpg';
import Logout from './logout/Logout';

const Navbar = (props) => {
    return (
        <nav>
            <img className='nav-img' src={piePic} alt='Pie' />
            <h1>Pie Client</h1>
            <Logout />
        </nav>
    )
}

export default Navbar;