import React, { useState, useEffect } from 'react';

import { useStyles } from '../styles';
import {
    Container,
    Box,
    OutlinedInput,
    FormControl,
    InputAdornment,
} from '@mui/material';

let timer = undefined;
const Timer = () => {
    const classes = useStyles();

    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    const startTimer = () => {
        if (hour !== 0 || minute !== 0 || second !== 0) {
            timer = setInterval(() => {
                setSecond((prevState) => prevState - 1);
            }, 1000);
        }
    };

    const stopTimer = () => {
        clearInterval(timer);
    };

    useEffect(() => {
        if (second === 0 && minute === 0 && hour === 0) {
            clearInterval(timer);
        } else {
            if (second < 0) {
                setMinute((prevState) => prevState - 1);
                setSecond(59);
            } else if (minute < 0) {
                setHour((prevState) => prevState - 1);
                setMinute(59);
            } else if (hour < 0) {
                setHour(0);
            }
        }

        return () => {
            console.log('Component Unmounted && Timer Cleared By useEffect');
        };
    }, [second]);

    return (
        <div>
            <Container className={classes.container} maxWidth='sm'>
                <Box className={classes.textFieldContainer}>
                    <FormControl
                        className={classes.formControl}
                        sx={{ m: 1, width: '17ch' }}
                        variant='outlined'
                    >
                        <OutlinedInput
                            className={classes.outlinedInput}
                            type='number'
                            value={hour}
                            onChange={(e) => {
                                let num = Number(e.target.value);
                                if (num <= 24 && num >= 0) {
                                    setHour(num);
                                } else if (num > 24) {
                                    setHour(24);
                                } else if (num < 0 || num === /[^0]+$/) {
                                    setHour(0);
                                }
                            }}
                            endAdornment={
                                <InputAdornment position='end'>
                                    H
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl
                        className={classes.formControl}
                        sx={{ m: 1, width: '17ch' }}
                        variant='outlined'
                    >
                        <OutlinedInput
                            className={classes.outlinedInput}
                            type='number'
                            value={minute}
                            onChange={(e) => {
                                let num = Number(e.target.value);
                                if (num <= 60 && num >= 0) {
                                    setMinute(num);
                                } else if (num > 60) {
                                    setMinute(60);
                                } else if (num < 0 || num === /[^0]+$/) {
                                    setMinute(0);
                                }
                            }}
                            endAdornment={
                                <InputAdornment position='end'>
                                    M
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl
                        className={classes.formControl}
                        sx={{ m: 1, width: '17ch' }}
                        variant='outlined'
                    >
                        <OutlinedInput
                            className={classes.outlinedInput}
                            type='number'
                            value={second}
                            onChange={(e) => {
                                let num = Number(e.target.value);
                                if (num <= 60 && num >= 0) {
                                    setSecond(num);
                                } else if (num > 60) {
                                    setSecond(60);
                                } else if (num < 0 || num === /[^0]+$/) {
                                    setSecond(0);
                                }
                            }}
                            endAdornment={
                                <InputAdornment position='end'>
                                    S
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </Box>
                <Box className={classes.buttonContainer}>
                    <button
                        className={classes.coralButton}
                        type='button'
                        onClick={startTimer}
                    >
                        START
                    </button>
                    <button
                        className={classes.oceanButton}
                        type='button'
                        onClick={stopTimer}
                    >
                        STOP
                    </button>
                </Box>
            </Container>
        </div>
    );
};

export default Timer;
