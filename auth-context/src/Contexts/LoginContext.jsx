import React, { useState} from 'react'
import { createContext } from 'react'

export const LoginContext = createContext({isLoggedIn: false, toggleIsLoggedIn: () => {}});

export const LoginContextProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const toggleIsLoggedIn = () => {
        setIsLoggedIn(true);
    }

    return (
        <LoginContext.Provider value={{isLoggedIn, toggleIsLoggedIn}}>
            {children}
        </LoginContext.Provider>
    )  
}