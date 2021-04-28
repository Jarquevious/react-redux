import { useDispatch } from 'react-redux'
import data from './data'
// import ShoppingCart from './ShoppingCart'

function ShoppingCartItem({ id }) {
    const { name, price } = data[id]
    const dispatcher = useDispatch()
    return (
        <li>
            <strong>{name}</strong>
            <span>{price}</span>
            <button>
                Remove from Cart
            </button>
        </li>
    )
}

export default ShoppingCartItem