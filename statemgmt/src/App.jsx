import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Todo from './components/Todo';

function App() {
    return (
        <div className='App'>
            <Todo />
        </div>
    );
}

/* function App() {
    const [data, setData] = useState('');

    const handleData = (name) => {
        console.log('Hii', name);
        setData(name);
    };
    console.log('App');
    return (
        <div className='App'>
            <h1>Parent Component</h1>
            <Child1 handleData={handleData} />
            <Child2 data={data} />
        </div>
    );
}

function Child1({ handleData }) {
    const data = 'Aditya Neve';
    handleData(data);
    console.log('Child1');
    return (
        <div>
            <h1>Child1 Component </h1>
        </div>
    );
}

function Child2({ data }) {
    console.log('Child2');
    return (
        <div>
            <h1>Child2 Component: {data} </h1>
        </div>
    );
} */

export default App;
