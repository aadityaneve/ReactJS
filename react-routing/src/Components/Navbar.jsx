import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Link to='/'>HOME</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/contact'>CONTACT</Link>
            <Link to='/products'>PRODUCTS</Link>
            <Link to='/users'>USERS</Link>
        </div>
    );
};

/* https://reqres.in/api/users?page=2 */

export default Navbar;
