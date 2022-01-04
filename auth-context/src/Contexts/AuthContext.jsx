import React, {useState} from 'react'
import { createContext } from 'react'

export const AuthContext = createContext({isAuth: false, handleAuth: () => {}})

export const AuthContextProvider = ({children}) => {

    const [isAuth, setIsAuth] = useState('');

    const handleAuth = (value) => {
        setIsAuth(value);
    }

    return (
        <AuthContext.Provider value={{isAuth, handleAuth}}>
            {children}
        </AuthContext.Provider>
    )
}