export const ADD_TO_CART = 'ADD_TO_CART'
export const CLEAR_CART = 'CLEAR_CART'
  
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    payload: { id }
  }
}

export const clearCart = ( () => {
  return {
    type: CLEAR_CART
  }
})