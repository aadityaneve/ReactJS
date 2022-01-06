import React, { useState, createContext } from 'react';

export const AuthContext = createContext({ token: '', handleToken: () => {} });

const AuthContextProvider = ({ children }) => {
    const [token, setToken] = useState('');
    const handleToken = (token) => {
        setToken(token);
    };

    return (
        <div>
            <AuthContext.Provider value={{ token, handleToken }}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthContextProvider;
