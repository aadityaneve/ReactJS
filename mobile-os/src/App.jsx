import React from 'react';
import './App.css';
import { List } from './components';

function App() {
    const mobileOS = ['Android', 'BlackBerry', 'iPhone', 'Windows Phone'];
    const mobileManufactures = ['Samsung', 'HTC', 'Micromax', 'Apple'];

    return (
        <div className='App'>
            <header>
                <h1>Mobile Operating System</h1>
                <List props={mobileOS} />

                <h1>Mobile Manufacturer</h1>
                <List props={mobileManufactures} />
            </header>
        </div>
    );
}

export default App;
