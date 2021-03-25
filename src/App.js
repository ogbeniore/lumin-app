import classNames from 'classnames'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Cart from './components/Cart'
import './App.css';

const numbers  = [1,2,3,4,5,6]
function App() {
  const [showCart, setShowCart] = useState(false)
  return (
    <div className={classNames("App", showCart ? "no-scroll" : '')}>
      <Navbar />
      <header className="App-header">
        <div className="container">
          <h1>All Products</h1>
          <p>A 360 degree look at Lumin</p>
        </div>
      </header>
      <section className="container products">
        {
          numbers.map((number) => <Product key={number} setShowCart={setShowCart} />)
        }
      </section>
      <Cart showCart={showCart} setShowCart={setShowCart} />
    </div>
  );
}

export default App;
