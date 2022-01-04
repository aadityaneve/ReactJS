import React from 'react';
import axios from 'axios';

import { Form, Input } from './Styles';

const Register = () => {
    const registerUser = async (payload) => {
        axios
            .post('https://reqres.in/api/register', payload)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = e.target;

        const payload = {
            email: email.value,
            password: password.value,
        };

        registerUser(payload);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h3>Register</h3>
            <Input name='email' type='email' required={true} />
            <Input name='password' type='password' required={true} />
            <Input type='reset' value='RESET' />
            <Input type='submit' value='SUBMIT' />
        </Form>
    );
};

export default Register;
