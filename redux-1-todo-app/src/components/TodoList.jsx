import { Button } from '@mui/material';
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
import TodoOptions from './TodoOptions';

const TodoList = () => {
    const dispatch = useDispatch();

    const [optionsPopup, setOptionsPopup] = useState(false);
    const [todoId, setTodoId] = useState('');

    const [finalTodos, setFinalTodos] = useState([]);

    const { loading, todos, error } = useSelector(
        (state) => ({
            loading: state.loading,
            todos: state.todos[0],
            error: state.error,
        }),
        function (prevState, currState) {
            if (
                prevState.loading === currState.loading &&
                prevState.error === currState.error &&
                prevState.todos === currState.todos
            ) {
                return true;
            }
            return false;
        }
    );

    useEffect(() => {
        getTodos();
    }, [optionsPopup]);

    const getTodos = () => {
        axios
            .get('http://localhost:3001/todos')
            .then((response) => {
                dispatch(getTodoSuccess(response.data));
                setFinalTodos(response.data);
            })
            .catch((error) => {
                dispatch(getTodoError(error));
            });
    };

    return loading ? (
        <h3>Loading....</h3>
    ) : error ? (
        <h3>Something Went Wrong</h3>
    ) : todos ? (
        <div>
            {optionsPopup && (
                <TodoOptions
                    todoId={todoId}
                    optionsPopup={optionsPopup}
                    setOptionsPopup={setOptionsPopup}
                />
            )}
            {finalTodos.map((todo) => {
                return (
                    <h3 key={todo.id}>
                        {todo.title} - {String(todo.status)}{' '}
                        <Button
                            variant='contained'
                            color='success'
                            onClick={() => {
                                setOptionsPopup((state) => !state);
                                setTodoId(todo.id);
                                getTodos();
                            }}
                        >
                            EDIT
                        </Button>
                    </h3>
                );
            })}
        </div>
    ) : null;
};

export default TodoList;
