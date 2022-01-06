import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../contexts/Auth';

const PrivateRoutes = ({ children }) => {
    const { token } = useContext(AuthContext);

    if (!token) {
        return <Navigate to={'/login'} />
    }

    return children;
};

export default PrivateRoutes;
