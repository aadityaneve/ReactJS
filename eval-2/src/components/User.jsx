import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';

import {
    fetchJobs,
    sortAsc,
    sortDec,
    appliedJob,
} from '../features/action';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const { jobs, appliedJobs } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchJobs());
    }, []);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    /* const handleSort = (type) => {
        if (type === 'H') {
            jobs.sort((a, b) => b.salary - a.salary);
            console.log('jobs:', jobs);
        } else if (type === 'L') {
            jobs.sort((a, b) => a.salary - b.salary);
            console.log('jobs:', jobs);
        }
    }; */

    return (
        <Box>
            <Button
                onClick={() => dispatch(sortAsc())}
                variant='outlined'
                color='primary'
            >
                High To Low
            </Button>
            <Button
                onClick={() => dispatch(sortDec())}
                variant='outlined'
                color='primary'
            >
                Low To High
            </Button>
            {jobs.map((job) => {
                return (
                    <h5 key={job.id}>
                        {job.company_name} | {job.job_title} | {job.salary} LPA
                        | {job.location} | {job.job_type} | {job.range} RANGE{' '}
                        <Button
                            onClick={() => dispatch(appliedJob(job))}
                            variant='outlined'
                            color='primary'
                        >
                            APPLY
                        </Button>
                    </h5>
                );
            })}
        </Box>
    );
};

export default User;
