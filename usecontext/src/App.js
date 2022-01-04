import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import React, { useState } from 'react';
import Status from './Components/Status';
import LoginForm from './Components/LoginForm';

function App() {
    const [isAuth, setIsAuth] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        alert('Trying to submit');
    };

    return (
        <div className='App'>
            <h1>Container</h1>
            {/* <Form title='LOGIN' onSubmit={onSubmit}>form</Form> */}
            <LoginForm />
            <Status />
        </div>
    );
}

export default App;
