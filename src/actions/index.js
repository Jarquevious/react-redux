export const ADD_TO_CART = 'ADD_TO_CART'
export const CLEAR_CART = 'CLEAR_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const ADD_ONE = 'ADD_ONE'
export const REMOVE_ONE = 'REMOVE_ONE'

  
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    payload: { id }
  }
}
// Clear the entire Cart
export const clearCart = ( () => {
  return {
    type: CLEAR_CART
  }
})

// Remove from cart
export const removeFromCart = ( (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: { id }
  }
})
// Add to cart
export const addOne = ( (id) => {
  return {
    type: ADD_ONE,
    payload: { id }
  }
})

// Remove one from cart
export const removeOne = ( (id) => {
  return {
    type: REMOVE_ONE,
    payload: { id }
  }
})

