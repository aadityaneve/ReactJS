import React, { useEffect, useState } from 'react';

import { Box, TextField, Button } from '@mui/material';
import { FormGroup } from '@mui/material';

import { reqresAuth, postJob } from '../features/action';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { authToken } = useSelector((state) => state);

    const [form, setForm] = useState({});
    console.log('form:', form);

    const handleChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const loginFormStyle = {
        width: '200px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '3px',
        justifyContent: 'space-evenly',
    };

    return (
        <FormGroup sx={loginFormStyle}>
            <TextField
                onChange={handleChange}
                name='company_name'
                type='text'
                label='Company Name'
                variant='filled'
            />
            <TextField
                onChange={handleChange}
                name='job_title'
                type='text'
                label='Job Title'
                variant='filled'
            />
            <TextField
                onChange={handleChange}
                name='salary'
                type='text'
                label='Salary'
                variant='filled'
            />
            <TextField
                onChange={handleChange}
                name='range'
                type='text'
                label='Range'
                variant='filled'
            />
            <TextField
                onChange={handleChange}
                name='job_desc'
                type='text'
                label='Job Desc'
                variant='filled'
            />
            <TextField
                onChange={handleChange}
                name='location'
                type='text'
                label='Location'
                variant='filled'
            />
            <TextField
                onChange={handleChange}
                name='job_type'
                type='text'
                label='Job Type'
                variant='filled'
            />
            <Button
                onClick={() => {
                    dispatch(postJob(form));
                }}
                variant='contained'
                color='success'
            >
                ADD JOB
            </Button>
        </FormGroup>
    );
};

export default Admin;
