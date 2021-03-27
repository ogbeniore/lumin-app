import { useContext } from 'react'

import { ShopContext } from '../../context/ShopContext'

import './Shop.css'
import Product from '../Product'

const Shop = () => {
  const { products, addToCart } = useContext(ShopContext)
  return (
    <section className="container products">
      { products.length ? products.map(product => (
          <Product
            productDetails={product}
            key={`product-${product.id}`}
            addToCart={addToCart} />
          )) 
        : <p>Loading...</p>
      }
    </section>
  )
}

export default Shop