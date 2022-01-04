import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { Nav, Button } from './Styles';

const Navbar = () => {
    const { isAuth, handleAuth } = useContext(AuthContext);

    return (
        <Nav>
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Contacts</h3>
            <h3>Faq</h3>
            <Button onClick={() => handleAuth('')}>{isAuth ? 'Logout' : 'Login'}</Button>
        </Nav>
    );
};

export default Navbar;
