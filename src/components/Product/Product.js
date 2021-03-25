import './Product.css'

const Product = () => {
  return (
    <div className="product">
      <div className="product__image">
        <img src="https://source.unsplash.com/random/3000x3000" alt="Product Name"/>
      </div>
      <div className="product__details">
        <h3>Age Management Collection</h3>
        <p>From $48.00</p>
      </div>
      <div className="product__action">
        <button className="product__button">Add to Cart</button>
      </div>
    </div>
  )
}

export default Product