import './App.css';
import { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import Todos from './components/Todos/Todos';
import TodoDetails from './components/Todos/TodoDetails';
import CompletedTodos from './components/Todos/CompletedTodos';
import Login from './components/Login/Login';

import { useSelector, useDispatch } from 'react-redux';
import {
    saveTokenToLocalStorage,
    deleteTokenFromLocalStorage,
    reqresAuth,
    fetchTokenFromLocalStorage,
} from './features/actions';

function App() {
    const { authToken } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTokenFromLocalStorage());
    }, []);

    return (
        <div className='App'>
            <Routes>
                <Route
                    path='/'
                    element={authToken ? <Todos /> : <Login />}
                ></Route>
                <Route path='/todos/:id' element={<TodoDetails />}></Route>
                <Route
                    path='/completed-todos'
                    element={<CompletedTodos />}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
