import React, { useEffect, useState } from 'react';

import { Box, TextField, Button } from '@mui/material';
import { FormGroup } from '@mui/material';

import { reqresAuth, postJob } from '../features/action';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAppliedJobs } from '../features/action';

const Admin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { authToken, appliedJobs } = useSelector((state) => state);
    console.log('appliedJobs:', appliedJobs);

    const [form, setForm] = useState({});
    const [showForm, setShowForm] = useState(false);
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
        <Box>
            <Button
                onClick={() => {
                    dispatch(getAppliedJobs());
                }}
                variant='outlined'
                color='success'
            >
                SHOW APPLIED JOBS
            </Button>

            {appliedJobs.map((job) => (
                <h5 key={job.id}>
                    {job.company_name} | {job.job_title} | {job.salary} LPA |{' '}
                    {job.location} | {job.job_type} | {job.range} RANGE{' '}
                </h5>
            ))}

            <Button
                onClick={() => setShowForm((prevState) => !prevState)}
                variant='outlined'
                color='success'
            >
                ADD NEW JOB
            </Button>

            {showForm ? (
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
            ) : null}
        </Box>
    );
};

export default Admin;
