import React, { createContext, useState } from 'react';

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    /* const [product, setProduct] = useState({}); */

    const handleProducts = (value) => {
        setProducts((prevState) => (prevState = value));
    };

    /* const handleProduct = (value) => {
        setProduct((prevState) => prevState = value)
    } */

    return (
        <ProductsContext.Provider
            value={{
                products,
                handleProducts,
                /* product, handleProduct */
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};
