import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';

const CompletedTodos = () => {
    const navigate = useNavigate();

    const { todos } = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div>
            <Button onClick={() => navigate(`/`)}>HOME</Button>
            <div>
                {todos.map((todo) => {
                    return todo.status ? (
                        <h3 key={todo.id}>
                            {todo.title} -{' '}
                            {todo.status ? 'Completed' : 'Not Completed'}{' '}
                        </h3>
                    ) : null;
                })}
            </div>
        </div>
    );
};

export default CompletedTodos;
