import './Product.css'

const product = ({ addToCart, productDetails }) => {
  return (
    <div className="product">
      <div className="product__image">
        <img src={productDetails && productDetails.image_url} alt={productDetails && productDetails.title}/>
      </div>
      <div className="product__details">
        <h3>{productDetails && productDetails.title}</h3>
        <p>From ${ productDetails && productDetails.price }</p>
      </div>
      <div className="product__action">
        <button className="product__button" onClick={() => { addToCart(productDetails.id) }}>Add to Cart</button>
      </div>
    </div>
  )
}

export default product