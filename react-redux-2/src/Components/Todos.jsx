import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
    addTodoLoading,
    addTodoSuccess,
    addTodoError,
    getData,
    getTodoLoading,
    getTodoSuccess,
    getTodoError,
} from '../features/Todos/actions';

const Todos = () => {
    const [text, setText] = useState('');

    const { loading, todos, error } = useSelector((state) => state.todoState);

    const dispatch = useDispatch();

    useEffect(() => {
        getTodos();
    }, []);

    async function getTodos() {
        dispatch(getData());

        /* try {
            dispatch(getTodoLoading());
            const data = await fetch('http://localhost:3001/todos').then(
                (response) => response.json()
            );
            dispatch(getTodoSuccess(data));
        } catch (error) {
            dispatch(getTodoError(error));
        } */
    }

    return loading ? (
        <h3>Loading....</h3>
    ) : error ? (
        <h3>Something Went Wrong</h3>
    ) : (
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
                            getTodos();
                        })
                        .catch((error) => dispatch(addTodoError(error)));
                }}
            >
                Add Todo
            </button>
            <div>
                {todos[0]?.map((todo) => (
                    <h4 key={todo.id}>
                        {todo.title} - {String(todo.status)}
                    </h4>
                ))}
            </div>
        </div>
    );
};

export default Todos;
