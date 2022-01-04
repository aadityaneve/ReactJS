import React, {useState} from 'react'
import { createContext } from 'react';

export const RegisterContext = createContext();

export const RegisterContextProvider = ({children}) => {

    const [isRegister, setIsRegister] = useState(false)

    return (
        <RegisterContext.Provider value={{isRegister, setIsRegister}}>
            {children}
        </RegisterContext.Provider>
    )
}