import React from 'react';
import Button from '@mui/material/Button';

const GroceryList = ({
    element: { item, status, id },
    groceries,
    setGroceries,
}) => {
    const toggleStatus = (id) => {
        let updatedGroceries = groceries.map((element) => {
            return element.id === id
                ? { ...element, status: !status }
                : element;
        });

        setGroceries(updatedGroceries);
    };

    return (
        <div>
            <h1>
                {item} - {status ? 'true' : 'false'}
            </h1>
            <Button onClick={() => toggleStatus(id)} variant='contained'>
                Toggle
            </Button>
        </div>
    );
};

export default GroceryList;
