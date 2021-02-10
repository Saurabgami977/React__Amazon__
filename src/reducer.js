export const initialState = {
    cart: [],
};

export const getCartTotal = cart => {
    return cart?.reduce((amount, item) => item.price + amount, 0)
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item]
            }
        case 'REMOVE_FROM_CART':
            let newCart = [...state.cart];
            const index = state.cart.findIndex(item => item.id === action.id);
            if (index >= 0) {
                newCart.splice(index, 1)

            }
            return { ...state, cart: newCart }
        default:
            return state
    }
}

export default reducer;