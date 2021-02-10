import React from 'react'

import { useStateValue } from '../../StateProvider/StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css'

function Checkout() {
    const [{ cart }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">

                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="banner advertisement"
                />
                {
                    cart?.length === 0 ? (
                        <div>
                            <h2>Your cart is empty</h2>
                            <p>You have no items in your cart. To buy one or more items, click "Add to cart" next to the item.</p>
                        </div>
                    ) : (
                            <div>
                                <h2>Your shopping cart is</h2>
                                { cart.map(item => (
                                    <CheckoutProduct
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />
                                ))
                                }
                            </div>
                        )
                }
            </div>
            {
                cart.length > 0 && (
                    <div className="checkout__right">
                        <Subtotal />
                    </div>
                )
            }
        </div>
    )
}

export default Checkout
