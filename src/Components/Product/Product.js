import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, price } = props.product;
    return (
        <div className='product'>
            <div className="product-info">
                <img src={img} alt="" srcset="" />
                <h3>{name}</h3>
                <p>Price: {price}</p>
            </div>
            <button className='add-btn'>
                <h2>Add To Cart</h2>
            </button>

        </div>
    );
};

export default Product;