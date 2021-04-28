import data from './data'
import Product from './Product'

function ProductList() {
  return (
    <div className="Products">
      {data.map((item, i) => <Product id={i} />)}
    </div>
  )
}

export default ProductList