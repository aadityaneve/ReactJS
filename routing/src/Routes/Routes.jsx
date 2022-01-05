import React from 'react';
import { Route } from 'react-router-dom';
import {Navbar} from './Navbar';
import { Home } from './Home';
import { About } from './About';
import { Users } from './Users';

const Routes = () => {
    return (
        <>
            <Navbar />
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/users'>
                <Users />
            </Route>
        </>
    );
};

export default Routes;
