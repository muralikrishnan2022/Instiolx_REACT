import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
    const { cartItems } = useContext(CartContext);

    return (
        <div>
            <h1>Your Cart</h1>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - ₹{item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;
