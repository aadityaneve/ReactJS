import React from 'react';

import { Box, TextField, Button } from '@mui/material';

import { reqresAuth } from '../features/action';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { authToken } = useSelector((state) => state);

    const loginFormStyle = {
        width: '200px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        justifyContent: 'space-evenly',
    };

    return (
        <Box sx={loginFormStyle}>
            <TextField type='username' label='username' variant='filled' />
            <TextField type='password' label='password' variant='filled' />
            <Button
                onClick={() => {
                    dispatch(reqresAuth());
                    navigate(`/user`);
                }}
                variant='contained'
                color='success'
            >
                LOGIN USER
            </Button>
            <Button
                onClick={() => {
                    dispatch(reqresAuth());
                    navigate(`/admin`);
                }}
                variant='contained'
                color='success'
            >
                LOGIN ADMIN
            </Button>
        </Box>
    );
};

export default Login;
