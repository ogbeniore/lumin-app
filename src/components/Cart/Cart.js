import './Cart.css'
import classNames from 'classnames'
import { useContext } from 'react'

import { ShopContext } from '../../context/ShopContext'


import CartHeader from './CartHeader';
import CartItem from './CartItem';
import CartFooter from './CartFooter';

const Cart = () => {
  const { cart, showCart } =  useContext(ShopContext)
  return (
    <div className={classNames("cart__container", showCart ? 'show' : '')}>
      <div className="cart__content">
        <div className="cart__body">
          <CartHeader />
          <section className="cart__list">
            {
              cart && cart.map(item => (
                <CartItem item={item} key={`cart-item-${item.id}`} />
              ))
            }
          </section>
        </div>
        <CartFooter />
      </div>  
    </div>
  )
}

export default Cart