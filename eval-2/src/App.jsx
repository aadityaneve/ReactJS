import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Admin from './components/Admin';
import Register from './components/Register';
import User from './components/User'
import { useSelector, useDispatch } from 'react-redux';

function App() {
    const { authToken } = useSelector((state) => state);

    return (
        <div className='App'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route
                    path='/user'
                    element={authToken ? <User /> : <Login />}
                ></Route>
                <Route
                    path='/admin'
                    element={authToken ? <Admin /> : <Login />}
                ></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
            </Routes>
        </div>
    );
}

export default App;
