import React, { useState } from 'react';

import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleCount = (value) => {
        if (value === 2) {
            setCount((prevCount) => prevCount * value);
        } else {
            setCount((prevCount) => prevCount + value);
        }
    };

    return (
        <div>
            <Container sx={{ bgcolor: '#cfe8fc' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                    }}
                >
                    <h1>{count % 2 === 0 ? <h1>Even</h1> : <h1>Odd</h1>}</h1>
                    <h1>{count}</h1>
                    {count < 10 ? (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                width: '30%',
                            }}
                        >
                            <Button
                                onClick={() => handleCount(-1)}
                                variant='outlined'
                                color='error'
                            >
                                <RemoveSharpIcon />
                            </Button>
                            <Button
                                onClick={() => handleCount(1)}
                                variant='outlined'
                                color='success'
                            >
                                <AddSharpIcon />
                            </Button>
                            <Button
                                onClick={() => handleCount(2)}
                                variant='outlined'
                                color='secondary'
                            >
                                <LooksTwoIcon />
                            </Button>
                        </Box>
                    ) : (
                        <h1>Max Count Reached </h1>
                    )}
                </Box>
            </Container>
        </div>
    );
};

export default Counter;
