import { useQuery, gql } from '@apollo/client';
import { useContext } from 'react'

import { ShopContext } from '../../context/ShopContext'
import { ReactComponent as Caret } from '../../assets/svg/caret.svg';

const CURRENCIES = gql`
  query GetCurrencies {
    currency
  }
`;
const CartHeader = () => {
  const { data = {} } = useQuery(CURRENCIES);
  const { currency = [] } = data
  const { setShowCart, setCurrency, rePriceCart } = useContext(ShopContext)
  const updateCurrency = (e) => {
    setCurrency(e.target.value)
    setTimeout(() => {
      rePriceCart()
    }, 500);
  } 
  return (
    <>
      <div className="cart__nav">
        <button onClick={() => { setShowCart(false) }}>
          <Caret />
        </button>
        Your Cart
      </div>
      <select name="currency" id="currency" defaultValue="USD" onChange={updateCurrency}>
        {
          currency.map(currency => <option value={currency} key={currency}>{currency}</option> )
        }
      </select>
    </>
  )
}
export default CartHeader