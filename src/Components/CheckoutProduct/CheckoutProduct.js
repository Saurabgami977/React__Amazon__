import React from 'react';
import { useStateValue } from '../../StateProvider/StateProvider';
import './CheckoutProduct.css'

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="title" />
            <div className="checkoutProduct__info">
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, index) => (
                                <p key={index}>⭐</p>
                            ))
                    }
                </div>
                <button onClick={removeFromCart} className="checkoutProduct__button">Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
