import React from 'react';

import "./Subtotal.css";
import { useStateValue } from '../../StateProvider/StateProvider';
import { getCartTotal } from '../../reducer';

function Subtotal() {
    const [{ cart }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <p>Subtotal ({cart.length} items): <strong>{`Subtotal: Rs. ${getCartTotal(cart)}`}</strong></p>
            <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
            </small>
            <button>Proceed to checkout.</button>
        </div>
    )
}

export default Subtotal
