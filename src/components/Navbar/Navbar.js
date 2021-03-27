import './Navbar.css';
import CartIcon from '../../assets/svg/cart.svg'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
const Navbar = () => {
  const { cart } = useContext(ShopContext)
  return (
    <nav className="nav">
      <div className="nav__menu">
        <div className="logo">
         LUMIN
        </div>
        <div className="nav__menu__item">
          <a href="/">Shop</a>
        </div>
        <div className="nav__menu__item">
          <a href="/">Learn</a>
        </div>
      </div>
      <div className="nav__menu">
        <div className="nav__menu__item">
          <a href="/">Account</a>
        </div>
        <div className="nav__menu__item">
          <button className="nav__button">
            <img src={CartIcon} alt="Cart button"/>
            <p>
              {
                cart.length ? cart.length : ''
              }
            </p>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar