import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const GroceryInput = ({ groceries, setGroceries }) => {
    const [item, setItem] = useState('');

    const handleBasket = (item) => {
        let payload = {
            item: item,
            status: false,
            id: uuidv4(),
        };

        setGroceries([...groceries, payload]);
    };

    return (
        <div>
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                    margin: 'auto',
                    marginTop: 1,
                }}
            >
                <TextField
                    onChange={(e) => setItem(e.target.value)}
                    label='Grocery'
                    id='fullWidth'
                />
                <Button
                    onClick={() => handleBasket(item)}
                    sx={{ marginTop: 1 }}
                    variant='contained'
                >
                    Add To Basket
                </Button>
            </Box>
        </div>
    );
};

export default GroceryInput;
