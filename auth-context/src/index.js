import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './Contexts/AuthContext';
import { LoginContextProvider } from './Contexts/LoginContext';

ReactDOM.render(
    <LoginContextProvider>
        <AuthContextProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </AuthContextProvider>
    </LoginContextProvider>,
    document.getElementById('root')
);
