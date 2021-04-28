import data from './data'
// import ShoppingCart from './ShoppingCart'

function ShoppingCartItem({ id }) {
    const { name, price } = data[id]

    return (
        <li>
            <strong>{name}</strong>
            {price}
            <button>
                Remove from Cart
            </button>
        </li>
    )
}

export default ShoppingCartItem