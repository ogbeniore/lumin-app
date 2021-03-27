import { useContext } from 'react'

import { ShopContext } from '../../context/ShopContext'

const CartFooter  = () => {
  const { cart } = useContext(ShopContext)
  const getTotal = () => {
    return cart.reduce((a, b) => a + (b.quantity * b.price), 0)
  }

  return (
    <div className="cart__footer">
      <div className="cart__total">
        <p>Sub Total</p>
        <p>${getTotal()}</p>
      </div>
      <button className="cart__footer__button --alternate">make this a subscription ( save 20% )</button>
      <button className="cart__footer__button">Proceed to checkout</button>
    </div>
  )
}

export default CartFooter