/* Context API */
import { createContext, useState } from 'react';

/* Step-1 */
export const CartContext = createContext(); // Context Type

/* Step-2 */
export const CartContextProvider = ({children}) => { // Context Provider

    const [cartItems, setCartItems] = useState(0);

    const handleCart = (value) => {
        setCartItems(cartItems + value)
    }

    return <CartContext.Provider value={{cartItems, handleCart}}>
        {children}
    </CartContext.Provider>
}