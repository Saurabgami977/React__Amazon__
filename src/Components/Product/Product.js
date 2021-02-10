import React from 'react';
import { useStateValue } from '../../StateProvider/StateProvider';

import './Product.css';

const Product = ({ id, title, image, price, rating }) => {

    const [{ cart }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, index) => (
                                <p key={index}>⭐</p>
                            ))
                    }
                </div>
            </div>
            <img src={image} alt={title} />
            <button onClick={addToBasket}>Add to cart</button>
        </div>
    )
}

export default Product
