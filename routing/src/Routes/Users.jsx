import React from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    return (
        <>
            <h3>Users</h3>
            {[1, 2, 3].map((id) => (
                <Link to={`/users/${id}`}>User {id}</Link>
            ))}
        </>
    );
};

export default Users;
