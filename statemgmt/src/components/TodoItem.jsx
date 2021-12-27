import React from 'react';

const TodoItem = ({ title, status, id, handleToggle }) => {
    return (
        <div>
            <h2>
                {title} - {status ? 'Done' : 'Not Done'}
            </h2>
            <button onClick={() => handleToggle(id)}>Toggle</button>
        </div>
    );
};

export default TodoItem;
