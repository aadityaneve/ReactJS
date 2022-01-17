import React from 'react';

import { Box, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import Login from '../components/Login';
import Register from '../components/Register';

const Navbar = () => {
    const navigate = useNavigate();

    const navbarStyle = {
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    };

    return (
        <Box sx={navbarStyle}>
            <Typography
                onClick={() => navigate(`/`)}
                variant='h6'
                component='h6'
            >
                HOME
            </Typography>
            <Typography
                onClick={() => navigate(`/login`)}
                variant='h6'
                component='h6'
            >
                LOGIN
            </Typography>
            <Typography
                onClick={() => navigate(`/register`)}
                variant='h6'
                component='h6'
            >
                REGISTER
            </Typography>
        </Box>
    );
};

export default Navbar;
