import React from 'react';
import { Link } from 'react-router-dom';

import { Nav } from './Styles'

const Navbar = () => {
    return (
        <Nav>
            <Link to='/'>HOME</Link>
            <Link to='/products'>PRODUCTS</Link>
        </Nav>
    );
};

export default Navbar;
