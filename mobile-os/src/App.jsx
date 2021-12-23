import React from 'react';
import './App.css';
import Button from '@mui/material/Button';

import { useStyles } from './styles';
import { List } from './components';

function App() {
    const classes = useStyles();
    const mobileOS = ['Android', 'BlackBerry', 'iPhone', 'Windows Phone'];
    const mobileManufactures = ['Samsung', 'HTC', 'Micromax', 'Apple'];

    return (
        <div className='App'>
            <header className={classes.root}>
                <h1>Mobile Operating System</h1>
                <List props={mobileOS} />

                <h1>Mobile Manufacturer</h1>
                <List props={mobileManufactures} />
            </header>
        </div>
    );
}

export default App;
