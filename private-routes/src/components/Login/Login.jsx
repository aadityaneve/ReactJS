import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth';

const Login = () => {
    const { token, handleToken } = useContext(AuthContext);

    // const location = useLocation();
    const navigate = useNavigate();

    // navigate(-1);

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    handleToken(e.target.username.value);
                    navigate('/dashboard');
                }}
            >
                <input name='username' type='text' placeholder='Username' />
                <input name='password' type='text' placeholder='Password' />
                <input type='submit' value='SUBMIT' />
            </form>
        </div>
    );
};

export default Login;
