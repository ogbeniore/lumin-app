import './Navbar.css';
import CartIcon from '../../assets/svg/cart.svg'
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__menu">
        <div className="logo">
         LUMIN
        </div>
        <div className="nav__menu__item">
          <a href="#">Shop</a>
        </div>
        <div className="nav__menu__item">
          <a href="#">Learn</a>
        </div>
      </div>
      <div className="nav__menu">
        <div className="nav__menu__item">
          <a href="#">Account</a>
        </div>
        <div className="nav__menu__item">
          <button className="nav__button">
            <img src={CartIcon} alt="Cart button"/>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar