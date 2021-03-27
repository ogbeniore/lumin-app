import classNames from 'classnames'
import { useQuery, gql } from '@apollo/client';
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

import './Cart.css'
import { ReactComponent as Caret } from '../../assets/svg/caret.svg';

const CURRENCIES = gql`
  query GetCurrencies {
    currency
  }
`;

const Cart = () => {
  const { data } = useQuery(CURRENCIES);
  const { cart, showCart, setShowCart, addToCart } =  useContext(ShopContext)
  const getTotal = () => {
    return cart.reduce((a, b) => a + (b.quantity * b.price), 0)
  }
  return (
    <div className={classNames("cart__container", showCart ? 'show' : '')}>
      <div className="cart__content">
        <div className="cart__body">
          <div className="cart__nav">
            <button onClick={() => { setShowCart(false) }}>
              <Caret />
            </button>
            Your Cart
          </div>
          <select name="currency" id="currency" defaultValue="USD">
            {
              data && data.currency && data.currency.map(currency => <option value={currency} key={currency}>{currency}</option> )
            }
          </select>
          <section className="cart__list">
            {
              cart && cart.map(item => (
                <div className="cart__item" key={`cart-item-${item.id}`}>
                  <button className="cart__item__close">x</button>
                  <div className="cart__item__row">
                    <p>{item && item.title}</p>
                    <div className="cart__item__image">
                      <img src={item && item.image_url} alt={item && item.title}/>
                    </div>
                  </div>
                  <div className="cart__item__row">
                    <div className="counter">
                      <button>-</button>
                      <span>{item && item.quantity}</span>
                      <button onClick={() => addToCart(item.id)}>+</button>
                    </div>
                    <p className="cart__item__price">
                      ${ item && item.price }
                    </p>
                  </div>
                </div>
              ))
            }
          </section>
        </div>
        <div className="cart__footer">
          <div className="cart__total">
            <p>Sub Total</p>
            <p>${getTotal()}</p>
          </div>
          <button className="cart__footer__button --alternate">make this a subscription ( save 20% )</button>
          <button className="cart__footer__button">Proceed to checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart