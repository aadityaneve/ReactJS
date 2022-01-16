import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

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

const TodoOptions = ({ todoId, setOptionsPopup, optionsPopup }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        getTodos()
    }, [optionsPopup])

    const { loading, todos, error } = useSelector(
        (state) => ({
            loading: state.loading,
            todos: state.todos[0],
            error: state.error,
        }),
        function (prevState, currState) {
            if (
                prevState.loading === currState.loading &&
                prevState.todos === currState.todos &&
                prevState.error === currState.error
            ) {
                return true;
            }
            return false;
        }
    );

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

    const updateTodo = (id, todo) => {
        axios
            .put(`http://localhost:3001/todos/${id}`, {
                ...todo,
                status: !todo.status,
            })
            .then((response) => {
                dispatch(addTodoSuccess(response.data));
            })
            .catch((error) => {
                dispatch(addTodoError(error));
            });
    };

    const todo = todos.filter((todo) => todo.id === todoId);

    const style = {
        backgroundColor: 'white',
        border: '1px solid black',
        position: 'absolute',
        zIndex: '1',
        width: '300px',
        left: '40%',
    };

    const close = {
        position: 'absolute',
        zIndex: '1',
        right: '5px',
        top: '-25px',
        cursor: 'pointer',
    };

    return (
        <div style={style}>
            <h2 style={close} onClick={() => setOptionsPopup(!optionsPopup)}>X</h2>
            <h4>{todo[0].title}</h4>
            <h4>Toggle Status: {String(todo[0].status)} </h4>
            <Button
                variant='contained'
                color='secondary'
                onClick={() => {
                    updateTodo(todoId, todo[0]);
                    getTodos();
                }}
            >
                TOGGLE
            </Button>
        </div>
    );
};

export default TodoOptions;
