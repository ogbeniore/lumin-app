import { useState } from 'react'
import classNames from 'classnames'
import { useQuery, gql } from '@apollo/client';

import { ShopContext } from './context/ShopContext'

import Navbar from './components/Navbar'
import PageHeader from './components/Header'
import Shop from './components/Shop'
import Cart from './components/Cart'

import './App.css';

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
  const { data = {} } = useQuery(PRODUCTS);
  const { products = [] } = data

  const addToCart = (id) => {
    const itemInProducts = products.find(product => product.id === id)
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
      <ShopContext.Provider value={{ showCart, setShowCart, cart, addToCart, products }}>
        <Navbar />
        <PageHeader />
        <Shop />
        <Cart />
      </ShopContext.Provider>
    </div>
  );
}

export default App;
