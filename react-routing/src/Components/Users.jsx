import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetch('https://reqres.in/api/users', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setUsers(response.data);
            });
    };

    return (
        <div>
            {console.log('users:', users)}
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <h4>
                            <Link to={`/users/${user.id}`}>
                                {user.first_name} {user.last_name}
                            </Link>
                        </h4>
                    </div>
                );
            })}
        </div>
    );
};

export default Users;
