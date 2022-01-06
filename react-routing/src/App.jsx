import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Products from './Components/Products';
import Users from './Components/Users';
import UserDetails from './Components/UserDetails';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                {/* <Route path='/products' element={<Products />}></Route> */}

                <Route
                    path='/users/:id'
                    element={
                        <PrivateRoute>
                            <UserDetails />
                        </PrivateRoute>
                    }
                ></Route>

                <Route
                    path='/products'
                    element={
                        <PrivateRoute>
                            <Products />
                        </PrivateRoute>
                    }
                ></Route>

                {/* <Route
                    path='/users'
                    element={
                        <PrivateRoute>
                            <Users />
                        </PrivateRoute>
                    }
                ></Route> */}

                <Route path='/products/:id' element={<Products />}></Route>
                <Route path='/users' element={<Users />}></Route>
                {/* <Route path='/users/:id' element={<UserDetails />}></Route> */}
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </div>
    );
}

export default App;
