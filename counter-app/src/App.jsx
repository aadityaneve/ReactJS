import React, { useState } from 'react';
import { Container } from '@mui/material';
import { Counter } from './components';

function App() {
    return (
        <div className='App'>
            <Container maxWidth='md'>
                <Counter />
            </Container>
        </div>
    );
}

export default App;
