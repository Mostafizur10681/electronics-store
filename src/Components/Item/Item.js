import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Item.css'

const Item = ({ cart }) => {
    // console.log(cart)


    return (
        <div className='selected-item'>
            <h4> {cart}</h4>

        </div>
    );
};

export default Item;