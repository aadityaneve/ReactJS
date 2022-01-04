import React from 'react';
import './Form.module.css';
import Form from './Form';
import { AppContext } from '../Context/AppContextProvider';

export const LoginForm = () => {
    const { setIsAuth, setToken } = React.useContext(AppContext);

    const onSubmit = (e) => {
        e.preventDefault();
        setIsAuth(true);
        setToken('asdfasdg32532523432uv4');
    };

    return (
        <div>
            <Form onSubmit={onSubmit} title='LOGIN'>
                <input type='text' placeholder='name' />
            </Form>
        </div>
    );
};

export default LoginForm;
