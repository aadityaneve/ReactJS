import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth';

const Navbar = () => {
    const { token } = useContext(AuthContext);

    return (
        <div
            style={{
                width: '100vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
            }}
        >
            <Link to='/'>HOME</Link>
            <Link to='/dashboard'>DASHBOARD</Link>
            <Link to='/dashboard/settings'>SETTINGS</Link>

            {token ? (
                <Link to='/logout'>LOGOUT</Link>
            ) : (
                <Link to='/login'>LOGIN</Link>
            )}
        </div>
    );
};

export default Navbar;
