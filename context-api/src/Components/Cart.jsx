import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext'

const Cart = () => {

    const {cartItems} = useContext(CartContext);

    return (
        <div>
            No Of Cart Items: {cartItems}
        </div>
    )
}

export default Cart
