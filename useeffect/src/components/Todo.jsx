import React, { useState, useEffect } from 'react';

const Todo = () => {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getTodo();
    }, [page]);

    const getTodo = () => {
        fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setTodos(response);
            });
    };

    return (
        <div>
            <input
                value={text}
                type='text'
                onChange={(e) => setText(e.target.value)}
                placeholder='Enter Todo'
            />
            <button
                onClick={() => {
                    const payload = {
                        title: text,
                        status: false,
                    };

                    fetch('http://localhost:3001/todos', {
                        method: 'POST',
                        body: JSON.stringify(payload),
                        headers: { 'Content-Type': 'application/json' },
                    });
                    // setTodos(...todos, text);
                    getTodo();
                    setText('');
                }}
            >
                ADD TODO
            </button>

            <div>
                {todos.map((todo) => (
                    <h1 key={todo.id}>
                        {todo.title} - {`${todo.status}`}
                    </h1>
                ))}

                <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                    PREV
                </button>
                <button onClick={() => setPage(page + 1)}>NEXT</button>
            </div>
        </div>
    );
};

export default Todo;
