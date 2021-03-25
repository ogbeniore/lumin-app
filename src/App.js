import Navbar from './components/Navbar'
import Product from './components/Product'
import './App.css';

const numbers  = [1,2,3,4,5,6]
function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div className="container">
          <h1>All Products</h1>
          <p>A 360 degree look at Lumin</p>
        </div>
      </header>
      <section className="container products">
        {
          numbers.map((number) => <Product key={number} />)
        }
      </section>
    </div>
  );
}

export default App;
