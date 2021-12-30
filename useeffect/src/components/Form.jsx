import React, { useState, useEffect } from 'react';

const Form = () => {
    const [counter, setCounter] = useState(0);

    console.log('Before Mounting');

    // Will execute every time
    useEffect(() => {
        console.log('First Effect');
    });

    // Will execute only once when component is mounting
    useEffect(() => {
        console.log('Second Effect');
    }, []);

    // Will execute when component is mounting
    // and 2nd time onward it will execute when counter(dependenies) changes
    useEffect(() => {
        console.log('Third Effect');
    }, [counter]);

    console.log('After Mounting');

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
    );
};

export default Form;
