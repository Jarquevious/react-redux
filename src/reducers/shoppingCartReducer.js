import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../actions";


const shoppingCartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload.id];

    case CLEAR_CART:
      return [];

    case REMOVE_FROM_CART:
      return [];

    default:
      return state;
  }
};

export default shoppingCartReducer;
