import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
    Dashboard,
    Home,
    Login,
    Logout,
    Navbar,
    Settings,
} from '../components';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

export const AllRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />}></Route>

                <Route
                    path='/dashboard'
                    element={
                        <PrivateRoutes>
                            <Dashboard />
                        </PrivateRoutes>
                    }
                ></Route>

                <Route
                    path='/dashboard/settings'
                    element={
                        <PrivateRoutes>
                            <Settings />
                        </PrivateRoutes>
                    }
                ></Route>

                <Route path='/login' element={<Login />}></Route>

                <Route
                    path='/logout'
                    element={
                        <PublicRoutes>
                            <Logout />
                        </PublicRoutes>
                    }
                ></Route>
            </Routes>
        </>
    );
};
