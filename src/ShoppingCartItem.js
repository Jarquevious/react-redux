import { useDispatch } from 'react-redux'
import { addOne, removeFromCart } from './actions'
import data from './data'
// import ShoppingCart from './ShoppingCart'

function ShoppingCartItem({ id, count, index }) {
    const { name, price } = data[id]
    const dispatcher = useDispatch()
    return (
        <li>
            <strong>{name}</strong>
            <span> * {count}</span>
            <span>{price}</span>
            <button
            onClick = {() => {} }
            >-</button>
            <button
                onClick={ () => dispatcher(removeFromCart(index) )}>
                Remove from Cart
            </button>
            <button
            onClick={ () => dispatcher(addOne(index) )}>
            Add from Cart
            </button>

        </li>
    )
}

export default ShoppingCartItem