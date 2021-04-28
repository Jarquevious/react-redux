import data from './data'

import { useDispatch } from 'react-redux'
import { addToCart } from './actions'

function Product({ id }) {
 const dispatcher = useDispatch()
 const { name, category, price } = data[id]

 return (
  <div>
    <h1>{name}</h1>
    <p>{price}</p>
    <small>{category}</small>
      <button
        onClick={() => dispatcher(addToCart(id))}
      >Add to Cart</button>
  </div>
 )
}

export default Product