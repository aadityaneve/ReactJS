import React, { useContext } from 'react';
import { useParams, Navigate, Route } from 'react-router-dom';

import { AuthContext } from '../Contexts/AuthContext';

const PrivateRoute = ({ path, children }) => {
    const { token } = useContext(AuthContext);

    if (!token) {
        return <Navigate to={'/login'} />;
    }

    return children;
};

export default PrivateRoute;
