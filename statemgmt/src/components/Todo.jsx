import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const Todo = () => {
    const [lists, setLists] = useState([]);

    const handleToggle = (id) => {
        let updatedLists = lists.map((list) =>
            list.id === id ? { ...list, status: !list.status } : list
        );
        setLists(updatedLists);
    };
    return (
        <div>
            <TodoInput setLists={setLists} lists={lists} />
            {lists.map((list) => (
                <TodoItem key={list.id} {...list} handleToggle={handleToggle} />
            ))}
        </div>
    );
};

export default Todo;
