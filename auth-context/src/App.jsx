import './App.css';
import { useContext } from 'react';

import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Register from './Components/Register/Register';

import { AuthContext } from './Contexts/AuthContext';
import { LoginContext } from './Contexts/LoginContext';

function App() {
    const { isAuth } = useContext(AuthContext);
    const { isLoggedIn } = useContext(LoginContext);

    return (
        <div className='App'>
            <Navbar />
            <h1>{isAuth ? 'Home Page' : <Login />}</h1>
            <h1>{isAuth ? `User LoggedIn : Token : ${isAuth}` : null}</h1>
            {/* {isAuth && isLoggedIn ? '<h1>Please Login/Register</h1>' : null} */}
            {/* {isLoggedIn ? null : <Register />} */}
        </div>
    );
}

export default App;
