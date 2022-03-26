import React, { useState } from 'react';
import Item from '../Item/Item';
import './Cart.css'

const Cart = ({ cart }) => {
    // console.log(cart)

    const [choose, setChoose] = useState([])

    // const chooseHandle = (cart) => {
    //     const randomItem = cart[Math.floor(Math.random() * choose.length)];
    //     setChoose(randomItem)
    //     console.log(randomItem)
    // }


    return (
        <div className='cart'>
            <h2>Selected Item</h2>
            {
                cart.map(cart => <Item
                    key={cart.id}
                    cart={cart.name}
                ></Item>)
            }
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