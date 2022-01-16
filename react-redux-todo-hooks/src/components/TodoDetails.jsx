import React, { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import {
    addTodoLoading,
    addTodoSuccess,
    addTodoError,
    getTodoLoading,
    getTodoSuccess,
    getTodoError,
    postTodo,
    getTodos,
    getTodoById,
    updateTodoById,
    deleteTodoById,
} from '../features/actions';
import { Button } from '@mui/material';

const TodoDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { todoById } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodoById(id));
    }, []);

    return (
        <div>
            <Button
                onClick={() => navigate(`/`)}
                variant='outlined'
                color='primary'
            >
                HOME
            </Button>
            {todoById.title ? (
                <h2>
                    {todoById.title} -{' '}
                    {todoById.status ? 'Completed' : 'Not Completed'}{' '}
                    <Button
                        onClick={() => {
                            dispatch(updateTodoById(id, todoById));
                            dispatch(getTodos());
                        }}
                        variant='outlined'
                        color='success'
                    >
                        TOGGLE
                    </Button>
                    <Button
                        onClick={() => {
                            dispatch(deleteTodoById(id));
                            dispatch(getTodos());
                        }}
                        variant='outlined'
                        color='error'
                    >
                        DELETE
                    </Button>
                </h2>
            ) : (
                <h2>Todo Not Found</h2>
            )}
        </div>
    );
};

export default TodoDetails;
