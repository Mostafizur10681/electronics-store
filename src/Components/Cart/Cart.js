import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props
    return (
        <div className='cart'>
            <h2>Selected Item</h2>
            <h6>name: {cart.name}</h6>
            <button className='choose-btn'>
                <p>CHOOSE 1 FOR ME</p>
            </button>
            <button className='choose-again'>
                <p>CHOOSE AGAIN</p>
            </button>
        </div>
    );
};

export default Cart;