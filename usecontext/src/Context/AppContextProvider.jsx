import React, { useState }from 'react';

const AppContext = React.createContext();

const AppContextProvider = ({children}) => {

    const [isAuth, setIsAuth] = useState(false)
    const [token, setToken] = useState('abcde')

    // console.log(children)

    const value = { isAuth,setIsAuth, token, setToken}
    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContextProvider, AppContext }