import { useState, createContext } from 'react'
import { useQuery, gql } from '@apollo/client';
export const ShopContext = createContext({
  cart: [],
  showCart: false,
  products: [],
  addToCart: () => {},
  removeFromCart: () => {},
  deleteProduct: () => {},
  changeCurrency: () => {},
  currency: 'USD',
  setCurrency: () => {},
  rePriceCart: () => {}
})

const PRODUCTS = gql`
  query GetProducts($currency: Currency!) {
    products {
      id,
      title,
      image_url,
      price(currency: $currency)
    }
  }
`;
export const ShopProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [cart, setCart] = useState([])
  const [currency, setCurrency] = useState('USD')
  const { data = {} } = useQuery(PRODUCTS, { variables: { currency } });
  const { products = [] } = data
  const addToCart = (id) => {
    const itemInProducts = products.find(product => product.id === id)
    let itemInCart = cart.find(product => product.id === id)
    let cartCopy = [...cart]

    if (itemInCart) {
      let itemIndex = cart.indexOf(itemInCart);
      itemInCart.quantity++
      cartCopy[itemIndex] = itemInCart
      setCart(cartCopy)
    } else {
      setCart(oldCart => [...oldCart, {
        ...itemInProducts,
        quantity: 1
      }])
    }
    setShowCart(true)
  }
  const removeFromCart = (id) => {
    let itemInCart = cart.find(product => product.id === id)
    let cartCopy = [...cart]
    if (itemInCart && itemInCart.quantity > 1) {
      let itemIndex = cart.indexOf(itemInCart);
      itemInCart.quantity--
      cartCopy[itemIndex] = itemInCart
      setCart(cartCopy)
    } else {
      deleteProduct(id)
    }
  }
  const deleteProduct = (id) => {
    let cartCopy = [...cart]
    setCart(cartCopy.filter(item => item.id !== id))
  }
  const rePriceCart = () => {
    let cartCopy = [...cart]
    cartCopy.forEach(item => {
      item.price = products.find(product => product.id === item.id).price
    })
    setCart(cartCopy)
  }

  return (
    <ShopContext.Provider 
      value={{
        showCart,
        setShowCart,
        cart,
        addToCart,
        products,
        currency,
        setCurrency,
        removeFromCart,
        deleteProduct,
        rePriceCart }}>
      {children}
    </ShopContext.Provider>
  )
}