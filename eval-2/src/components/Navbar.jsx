import React from 'react';

import { Box, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import Login from '../components/Login';
import Register from '../components/Register';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTokenFromLocalStorage } from '../features/action';

const Navbar = () => {
    const { authToken } = useSelector((state) => state);
    const dispatch = useDispatch();

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
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(`/`)}
                variant='h6'
                component='h6'
            >
                HOME
            </Typography>
            {!authToken ? (
                <Typography
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate(`/login`)}
                    variant='h6'
                    component='h6'
                >
                    LOGIN
                </Typography>
            ) : null}

            {!authToken ? (
                <Typography
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate(`/register`)}
                    variant='h6'
                    component='h6'
                >
                    REGISTER
                </Typography>
            ) : null}

            {authToken ? (
                <Typography
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                        dispatch(deleteTokenFromLocalStorage());
                        navigate(`/`);
                    }}
                    variant='h6'
                    component='h6'
                >
                    LOGOUT
                </Typography>
            ) : null}
        </Box>
    );
};

export default Navbar;
