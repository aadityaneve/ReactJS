import React from 'react';
import axios from 'axios';

import { Form, Input } from './Styles';
import { useContext } from 'react';

import { AuthContext } from '../../Contexts/AuthContext';
import { LoginContext } from '../../Contexts/LoginContext';

const Login = () => {
    const { isAuth, handleAuth } = useContext(AuthContext);
    const { isLoggedIn, toggleIsLoggedIn } = useContext(LoginContext);

    const loginUser = async (payload) => {
        axios
            .post('https://reqres.in/api/login', payload)
            .then((response) => {
                // console.log(response.data.token);
                handleAuth(response.data.token)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = e.target;

        let payload = {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka',
        };

        loginUser(payload);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <Input name='email' type='email' required={true} />
            <Input name='password' type='password' required={true} />
            <Input type='reset' value='RESET' />
            <Input type='submit' value='SUBMIT' />
        </Form>
    );
};

export default Login;
