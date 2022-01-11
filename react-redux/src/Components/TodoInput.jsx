import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

import { addTodo } from '../Redux/action';

const TodoInput = () => {
    const [title, setTitle] = useState('');

    const dispatch = useDispatch();

    const handleAdd = () => {
        const payload = {
            title,
            status: false,
            id: uuidv4(),
        };

        const addTodoAction = addTodo(payload);
        dispatch(addTodoAction);
    };

    return (
        <div>
            <h3>ADD TODO</h3>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type='text'
                placeholder='Add Something'
            />
            <button onClick={handleAdd}>ADD</button>
        </div>
    );
};

export default TodoInput;
