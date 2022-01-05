import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const [user, setUser] = useState({});

    const { id } = useParams();

    useEffect(() => {
        getData();
    }, []);

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
            });
    };

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
