import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div>
            <h2>Selected Item</h2>
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