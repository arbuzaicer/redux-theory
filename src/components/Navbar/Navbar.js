import React from 'react';
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className='navbar'>
                <Link to="/">Home</Link>
                <Link to="/contacts">Contacts</Link>
                <Link to="/about">About</Link>
        </nav>
    );
};

export default Navbar;