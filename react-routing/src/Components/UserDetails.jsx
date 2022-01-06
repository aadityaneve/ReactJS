import React, { useState, useEffect,  useContext } from 'react';
import { useParams, Navigate } from 'react-router-dom';

import { AuthContext } from '../Contexts/AuthContext';

const UserDetails = () => {
    const [user, setUser] = useState({});

    const { id } = useParams();

    const { token } = useContext(AuthContext);

    useEffect(() => {
        getData();
    }, [id]);

    const getData = () => {
        fetch(`https://reqres.in/api/users/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setUser(response.data);
                console.log('response.data:', response.data)
            });
    };

    if (!token) {
        return <Navigate to={'/login'} />;
    }

    return (
        <div>
            <img src={user.avatar} alt={user.first_name} />
            <h4>
                {user.first_name} {user.last_name}
            </h4>
            <h4>{user.email}</h4>
        </div>
    );
};

export default UserDetails;
