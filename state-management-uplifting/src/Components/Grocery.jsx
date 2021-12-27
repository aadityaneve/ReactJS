import React, { useState } from 'react';
import GroceryInput from './GroceryInput';
import GroceryList from './GroceryList';

const Grocery = () => {
    const [groceries, setGroceries] = useState([]);

    return (
        <div>
            <GroceryInput setGroceries={setGroceries} groceries={groceries} />
            {groceries.map((element) => (
                <GroceryList
                    key={element.id}
                    element={element}
                    groceries={groceries}
                    setGroceries={setGroceries}
                />
            ))}
        </div>
    );
};

export default Grocery;
