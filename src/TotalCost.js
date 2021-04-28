import { useSelector } from 'react-redux';
import data from './data'

function TotalCost() {
    const shoppingCart = useSelector( state => state.shoppingCart)
    const total = shoppingCart.reduce((acc, id) => {
        const price = parseFloat(data[id].price.slice(1) )
        return acc + price
    }, 0)

    return (
        <div className="TotalCost">
            Total: ${total.toFixed(2)}
        </div>
    )
}

export default TotalCost