import './App.css';
import React, { useState } from 'react';
import { SButton, Div } from './styles/Button';
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react';

function App() {
    const [theme, setTheme] = useState('light');

    return (
        <ChakraProvider>
                <Button colorScheme='blue'>Chakra Ui</Button>
            <ButtonGroup>
                <Button colorScheme='blue'>Chakra Ui</Button>
            </ButtonGroup>
            <Div>
                <p>Lorem Ipsum</p>
            </Div>
            <Div>
                <SButton theme={theme}>Click Me</SButton>
            </Div>

            <Div>
                <button
                    onClick={() =>
                        setTheme(theme === 'light' ? 'dark' : 'light')
                    }
                >
                    {' '}
                    Change Theme
                </button>
            </Div>
        </ChakraProvider>
    );
}

export default App;
