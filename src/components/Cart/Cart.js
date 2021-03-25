import classNames from 'classnames'
import './Cart.css'
import { ReactComponent as Caret } from '../../assets/svg/caret.svg';

const Cart = ({ showCart, setShowCart }) => {
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
          <select name="currency" id="currency">
            <option value="USD" selected>USD</option>
            <option value="NGN">NGN</option>
            <option value="AUD">AUD</option>
          </select>
          <section className="cart__list">
            <div className="cart__item">
              <button className="cart__item__close">x</button>
              <div className="cart__item__row">
                <p>Dark Circle Defense</p>
                <div className="cart__item__image">
                  <img src="https://source.unsplash.com/random/3000x3000" alt="Product name"/>
                </div>
              </div>
              <div className="cart__item__row">
                <div className="counter">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
                <p className="cart__item__price">
                  $10.00
                </p>
              </div>
            </div>
            <div className="cart__item">
              <button className="cart__item__close">x</button>
              <div className="cart__item__row">
                <p>Dark Circle Defense</p>
                <div className="cart__item__image">
                  <img src="https://source.unsplash.com/random/3000x3000" alt="Product name" />
                </div>
              </div>
              <div className="cart__item__row">
                <div className="counter">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
                <p className="cart__item__price">
                  $10.00
                </p>
              </div>
            </div>
            <div className="cart__item">
              <button className="cart__item__close">x</button>
              <div className="cart__item__row">
                <p>Dark Circle Defense</p>
                <div className="cart__item__image">
                  <img src="https://source.unsplash.com/random/3000x3000" alt="Product name" />
                </div>
              </div>
              <div className="cart__item__row">
                <div className="counter">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
                <p className="cart__item__price">
                  $10.00
                </p>
              </div>
            </div>
            <div className="cart__item">
              <button className="cart__item__close">x</button>
              <div className="cart__item__row">
                <p>Dark Circle Defense</p>
                <div className="cart__item__image">
                  <img src="https://source.unsplash.com/random/3000x3000" alt="Product name" />
                </div>
              </div>
              <div className="cart__item__row">
                <div className="counter">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
                <p className="cart__item__price">
                  $10.00
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="cart__footer">
          <div className="cart__total">
            <p>Sub Total</p>
            <p>$61.00</p>
          </div>
          <button className="cart__footer__button --alternate">make this a subscription ( save 20% )</button>
          <button className="cart__footer__button">Proceed to checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart