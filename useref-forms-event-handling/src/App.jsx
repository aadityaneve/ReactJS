import logo from './logo.svg';
import './App.css';
import React, { useState, useRef } from 'react';
import Form from './components/Form';

/* 
 1. Variable, saves it's own state.
 2. change in variable, shouldn't cause a re-render
*/

function App() {
    const inputRef = useRef(null);

    return (
        <div className='App'>
            <input ref={inputRef} type='text' />
            <Form />

            <div
                style={{
                    width: '200px',
                    height: '400px',
                    backgroundColor: 'coral',
                }}
            >
                1
            </div>
            <div
                style={{
                    width: '200px',
                    height: '400px',
                    backgroundColor: 'aquamarine',
                }}
            >
                2
            </div>
            <div
                style={{
                    width: '200px',
                    height: '400px',
                    backgroundColor: 'coral',
                }}
            >
                3
            </div>
            <div
                style={{
                    width: '200px',
                    height: '400px',
                    backgroundColor: 'aquamarine',
                }}
            >
                4
            </div>

            <button
                onClick={() => {
                    // console.log(inputRef.current.value);
                    inputRef.current.scrollIntoView({
                        behavior: 'smooth',
                    });
                }}
            >
                Scroll To Top
            </button>
        </div>
    );
}
/* function App() {
    const test = useRef(1);
    const [dummy, setDummy] = useState(1);

    return (
        <div className='App'>
            <button
                onClick={() => {
                    test.current = test.current + 1;
                    console.log('Not Re-rendered: ', test);
                }}
            >
                Increment Test: {test.current}
            </button>

            <button
                // Force re-rendering
                onClick={() => {
                    setDummy((prevValue) => {
                        return prevValue + 1;
                    });
                    console.log('Re-rendered: ', test);
                }}
            >
                Increment Demo: {dummy}
            </button>
        </div>
    );
} */
/* function App() {
    const [mouse, setMouse] = useState('');

    return (
        <div className='App'>
            <div
                onMouseMove={(e) => {
                    setMouse(`${e.clientX, e.clientY}`);
                }}
                style={{
                    height: '500px',
                    width: '500px',
                    backgroundColor: 'orange',
                }}
            >
                {mouse}
            </div>
        </div>
    );
} */

export default App;
