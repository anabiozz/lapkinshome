import {
  ADD_PRODUCT_TO_CART,
  LOAD_CART,
  REMOVE_PRODUCT_FROM_CART,
  DECREASE_CART_ITEM,
  ADD_PRODUCT_TO_CART_RESET
} from '../constant';

const initialState = {
  cartItems: [],
  errors: '',
  click: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_CART:
      // localStorage.clear();
      return {
        ...state,
        cartItems: JSON.parse(localStorage.getItem('cartProducts')) || []
      };
    case ADD_PRODUCT_TO_CART:

        const cartItem = {
          product: {},
          count: 1,
        }

        let instateProduct = state.cartItems.filter(cartItem => cartItem.product.name === action.payload.name)[0]

        if (instateProduct) {
          let newState = state.cartItems.map(cartItem => {
            let tmp = Object.assign({}, cartItem);
            if (tmp.product.name === action.payload.name) {
              tmp.product = action.payload
              tmp.count++
            }
            return tmp
          })

          localStorage.setItem('cartProducts', JSON.stringify(newState))

          return {...state, cartItems: newState, click: true }
        } 

        cartItem.product = action.payload
        localStorage.setItem('cartProducts', JSON.stringify([...state.cartItems, cartItem]))
        return { ...state, cartItems: [...state.cartItems, cartItem], click: true }

      case REMOVE_PRODUCT_FROM_CART:
        localStorage.setItem('cartProducts', JSON.stringify(state.cartItems.filter(cartItem => cartItem.product.name != action.payload.name)));
        return {
          ...state, cartItems: state.cartItems.filter(cartItem => cartItem.product.name != action.payload.name)};
          
      case DECREASE_CART_ITEM:
        let newState = state.cartItems.map(cartItem => {
          if (cartItem.count == 1) return cartItem;
          let tmp = Object.assign({}, cartItem);
          if (tmp.product.name === action.payload.name) {
            tmp.product = action.payload
            tmp.count--
          }
          return tmp
        })
        localStorage.setItem('cartProducts', JSON.stringify(newState))
        return {
          ...state,
          cartItems: newState,
        }

      case ADD_PRODUCT_TO_CART_RESET:
        return { ...state, click: false }
      default:
        return state;
  }
}