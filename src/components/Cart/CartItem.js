import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

const CartItem = ({ item }) => {
  const { removeFromCart, deleteProduct, addToCart } = useContext(ShopContext)

  return (
    <div className="cart__item">
      <button onClick={() => deleteProduct(item.id)} className="cart__item__close">x</button>
      <div className="cart__item__row">
        <p>{item && item.title}</p>
        <div className="cart__item__image">
          <img src={item && item.image_url} alt={item && item.title} />
        </div>
      </div>
      <div className="cart__item__row">
        <div className="counter">
          <button onClick={() => removeFromCart(item.id)}>-</button>
          <span>{item && item.quantity}</span>
          <button onClick={() => addToCart(item.id)}>+</button>
        </div>
        <p className="cart__item__price">
          ${item && item.price}
        </p>
      </div>
    </div>
  )
}
export default CartItem