import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import {
    addTodoLoading,
    addTodoSuccess,
    addTodoError,
    getTodoLoading,
    getTodoSuccess,
    getTodoError,
} from '../features/Todo/actions';

import { Button, TextField } from '@mui/material';

const TodoInput = () => {
    const style = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    };

    const [text, setText] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        getTodos();
    }, []);

    const postTodos = () => {
        axios
            .post('http://localhost:3001/todos', {
                title: text,
                status: false,
            })
            .then((response) => {
                dispatch(addTodoSuccess(response.data));
            })
            .catch((error) => {
                dispatch(addTodoError(error));
            });
    };

    const getTodos = () => {
        axios
            .get('http://localhost:3001/todos')
            .then((response) => {
                dispatch(getTodoSuccess(response.data));
            })
            .catch((error) => {
                dispatch(getTodoError(error));
            });
    };

    return (
        <div style={style}>
            <TextField
                onChange={(e) => {
                    setText(e.target.value);
                }}
                fullwidth='true'
                label='Enter Todo'
                varient='filled'
            />
            <Button
                onClick={() => {
                    dispatch(addTodoLoading());
                    postTodos();
                    getTodos();
                }}
                variant='contained'
            >
                ADD
            </Button>
        </div>
    );
};

export default TodoInput;
