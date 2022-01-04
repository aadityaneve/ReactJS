import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
import { ThemeContext } from '../Contexts/ThemeContext';

const Body = () => {
    const { handleCart } = useContext(CartContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <button
                onClick={() => {
                    handleCart(1);
                }}
            >
                Buy this laptop
            </button>
            <button
                onClick={() => {
                    toggleTheme((prevTheme) =>
                        prevTheme === 'light'
                            ? prevTheme === 'dark'
                            : prevTheme === 'light'
                    );
                }}
            >
                Change Theme
            </button>
        </div>
    );
};

export default Body;
