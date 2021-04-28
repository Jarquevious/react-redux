import { useSelector } from "react-redux";
// import data from "./data";
import TotalCost from "./TotalCost"
import ClearCartButton from "./ClearCartButton"
import ShoppingCartItem from './ShoppingCartItem'


function ShoppingCart() {
  const shoppingCart = useSelector((state) => state.shoppingCart);

  return (
    <div className="ShoppingCart">
      <h1>Your Cart</h1>
      <ul>
        {shoppingCart.map(id => <ShoppingCartItem id={id} />)}
      </ul>
      <TotalCost />
      <ClearCartButton />
    </div>
  );
}

export default ShoppingCart;
