import { Box, TextField, Typography, Button } from '@mui/material';
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { reqresAuth } from '../../features/actions';

const Login = () => {
    const dispatch = useDispatch();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }}
        >
            <Typography variant='h1'>Login</Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}
            >
                <TextField type='text' label='User Name' variant='filled' />
                <TextField type='password' label='Password' variant='filled' />
            </Box>
            <Button
                onClick={() => {
                    dispatch(reqresAuth());
                }}
                variant='contained'
                color='success'
            >
                Login
            </Button>
        </Box>
    );
};

export default Login;
