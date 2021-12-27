import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoInput = ({ lists, setLists }) => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleClick = () => {
        const payload = {
            title: text,
            status: false,
            id: uuidv4(),
        };

        setLists([...lists, payload]);
    };

    return (
        <div>
            <input
                type='text'
                placeholder='Enter Todo'
                onChange={handleChange}
            />
            <button onClick={handleClick}>Add Todo</button>
        </div>
    );
};

export default TodoInput;
