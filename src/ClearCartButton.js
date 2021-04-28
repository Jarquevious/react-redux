import { clearCart } from './actions'
import { useDispatch } from 'react-redux'

function ClearCartButton() {
    const dispatcher = useDispatch()



    return (<button
        className="ClearCartButton"
        onClick={() => dispatcher( clearCart() )}
        >Clear Cart</button>
    )}

export default ClearCartButton