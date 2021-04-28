import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, ADD_ONE, REMOVE_ONE } from "../actions";


const shoppingCartReducer = (state = [], action) => {
  switch (action.type) {
    // Search the array for the id
    // if id is found
    // count += 1
    // else v
    case ADD_TO_CART:
      for ( let i = 0; i < state.length; i+= 1 ) {

      }

      return [...state, { id: action.payload.id, count: 1 }];

    case CLEAR_CART:
      return [];

    case REMOVE_FROM_CART:
      return state.filter((item,i) =>  i !== action.payload.id);

    case ADD_ONE:
      return state.map( (item, i) => {
        if (action.payload.id === i ) {
          item.count += 1
        }
        return item
      })

      case REMOVE_ONE:
        return [];

        default:
      return state;
  }
};

export default shoppingCartReducer;
