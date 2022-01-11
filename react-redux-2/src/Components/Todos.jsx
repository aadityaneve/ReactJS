import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
    addTodo,
    removeTodo,
    addTodoLoading,
    addTodoSuccess,
    addTodoError,
    getTodoLoading,
    getTodoSuccess,
    getTodoError,
} from '../Store/actions';

const Todos = () => {
    const [text, setText] = useState('');
    /* const state = useSelector((state) => state);
    console.log('state:', state) */

    const { loading, todos: todoss, error } = useSelector((state) => state);
    const todos = todoss[0];
    /* console.log('loading:', loading);
    console.log('todos:', todos);
    console.log('error:', error); */

    const dispatch = useDispatch();

    useEffect(() => {
        getTodos();
    }, []);

    async function getTodos() {
        try {
            dispatch(getTodoLoading());
            const data = await fetch('http://localhost:3001/todos').then(
                (response) => response.json()
            );
            dispatch(getTodoSuccess(data));
        } catch (error) {
            dispatch(getTodoError());
        }
    }

    return (
        <div>
            <input
                onChange={(e) => setText(e.target.value)}
                type='text'
                placeholder='Enter Todo'
            />
            <button
                onClick={() => {
                    dispatch(addTodoLoading());

                    fetch('http://localhost:3001/todos', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ title: text, status: false }),
                    })
                        .then((response) => response.json())
                        .then((response) => {
                            dispatch(addTodoSuccess(response));
                            console.log('response:', response);
                            getTodos();
                        })
                        .catch((error) => dispatch(addTodoError(error)));

                    getTodos();
                    // dispatch(addTodo(text))
                }}
            >
                Add Todo
            </button>
            <div>
                {todos?.map((todo) => (
                    <h4 key={todo.id}>
                        {todo.title} - {String(todo.status)}
                    </h4>
                ))}
            </div>
        </div>
    );
};

export default Todos;
