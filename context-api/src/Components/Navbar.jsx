import React from 'react'
import Cart from './Cart'
import { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext'

const Navbar = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <div>
            Navbar
            Theme is : {theme}
            <Cart />
        </div>
    )
}

export default Navbar
