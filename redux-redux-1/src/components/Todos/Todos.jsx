import React, { useState, useEffect, useRef } from 'react';

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
    reqresAuth,
    saveTokenToLocalStorage,
    deleteTokenFromLocalStorage,
} from '../../features/actions';

import { Box, Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Todos = () => {
    const navigate = useNavigate();

    const { loading, todos, error } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [text, setText] = useState('');

    useEffect(() => {
        dispatch(getTodos());
    }, []);

    const inputStyle = {
        width: '60%',
        margin: 'auto',
        display: 'flex',
        flexContent: 'space-evenly',
    };

    const allTodos = {
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    };

    const handleOnInput = (e) => {
        setText(e.target.value);
    };

    const handleAddTodo = () => {
        let todo = {
            title: text,
            status: false,
        };

        dispatch(postTodo(todo));
    };

    const handleTodoClick = (id) => {
        // <Link to={`/todos/${id}`}></Link>;
        navigate(`/todos/${id}`);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    gap: '20px',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}
            >
                <Button
                    onClick={() => navigate(`/completed-todos`)}
                    variant='outlined'
                    color='primary'
                >
                    COMPLETED TODO'S
                </Button>
                {/* <Button
                    onClick={() => {
                        dispatch(deleteTokenFromLocalStorage());
                    }}
                    variant='outlined'
                    color='error'
                >
                    LOGOUT
                </Button> */}
            </Box>
            <Box style={inputStyle}>
                <TextField
                    onInput={handleOnInput}
                    fullWidth
                    label='Enter Todo'
                />
                <Button
                    onClick={handleAddTodo}
                    variant='contained'
                    disableElevation
                >
                    ADD
                </Button>
            </Box>
            <Box style={allTodos}>
                {todos.map((todo) => {
                    return (
                        <h3
                            onClick={() => handleTodoClick(todo.id)}
                            key={todo.id}
                        >
                            {todo.title} -{' '}
                            {todo.status ? 'Completed' : 'Not Completed'}{' '}
                        </h3>
                    );
                })}
            </Box>
        </Box>
    );
};

export default Todos;
