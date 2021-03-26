import { useState } from 'react'
import classNames from 'classnames'
import { useQuery, gql } from '@apollo/client';

import Navbar from './components/Navbar'
import Product from './components/Product'
import Cart from './components/Cart'

import './App.css';

const numbers  = [1,2,3,4,5,6]

const PRODUCTS = gql`
  query GetProducts {
    products {
      id,
      title,
      image_url,
      price(currency:USD)
    }
  }
`;
function App() {
  const [showCart, setShowCart] = useState(false)
  const [cart, updateCart] = useState([])
  const { loading, error, data } = useQuery(PRODUCTS);

  const addToCart = (id) => {
    const itemInProducts = data.products.find(product => product.id === id)
    let itemInCart = cart.find(product => product.id === id)
    let cartCopy = cart

    if(itemInCart) {
      let itemIndex = cart.indexOf(itemInCart);
      itemInCart.quantity++
      cartCopy[itemIndex] = itemInCart
    } else {
      cartCopy.push({
        ...itemInProducts,
        quantity: 1
      })
    }
    updateCart(cartCopy)
    setShowCart(true)
  }
  return (
    <div className={classNames("App", showCart ? "no-scroll" : '')}>
      <Navbar />
      <header className="App-header">
        <div className="container">
          <h1>All Products</h1>
          <p>A 360 degree look at Lumin</p>
        </div>
      </header>
      <section className="container products">
        { loading && 'Loading...' }
        { error && 'Error while fetching products' }
        {data && data.products && data.products.map(product => <Product productDetails={product} key={`product-${product.id}`} addToCart={addToCart} />) }
      </section>
      <Cart showCart={showCart} setShowCart={setShowCart} cart={cart} />
    </div>
  );
}

export default App;
