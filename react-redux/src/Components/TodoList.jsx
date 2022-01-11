import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { updateStatus } from '../Redux/action';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);

    const dispatch = useDispatch();

    const toggleTodo = (todo) => {
        const payload = {
            id: todo.id,
            title: todo.title,
            status: !todo.status,
        };

        const updateStatusAction = updateStatus(payload);
        dispatch(updateStatusAction);
    };

    return (
        <div>
            {todos.map((todo) => {
                return (
                    <h3 key={todo.id}>
                        {todo.title} - {String(todo.status)}{' '}
                        <button onClick={() => toggleTodo(todo)}>TOGGLE</button>
                    </h3>
                );
            })}
        </div>
    );
};

export default TodoList;
