import React from 'react';
import { Link } from 'react-router-dom';

const links = [
    {
        to: '/',
        title: 'Home',
    },
    {
        to: '/about',
        title: 'About',
    },
    {
        to: '/users',
        title: 'Users',
    },
];

const Navbar = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {links.map(({ to, title }) => (
                <div style={{ padding: 5 }}>
                    <Link to={to}>{title}</Link>
                </div>
            ))}
        </div>
    );
};

export default Navbar;
