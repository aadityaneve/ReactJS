import React, { useState } from 'react';
import { createContext } from 'react';

export const ThemeContext = createContext({theme: '', toggleTheme: () => {}});

export const ThemContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
