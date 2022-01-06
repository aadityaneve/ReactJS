import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/Auth';

const Logout = () => {
    const { token, handleToken } = useContext(AuthContext);

    const handleClick = () => {
        handleToken('');
    };
    return (
        <>
            <button onClick={handleClick}>LOGOUT</button>
        </>
    );
};

export default Logout;
