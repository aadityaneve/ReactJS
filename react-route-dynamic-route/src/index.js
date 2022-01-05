import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ProductsContextProvider } from './Contexts/Products';

ReactDOM.render(
    <React.StrictMode>
        <ProductsContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ProductsContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
