import { ShopProvider } from './context/ShopContext'

import Navbar from './components/Navbar'
import PageHeader from './components/Header'
import Shop from './components/Shop'
import Cart from './components/Cart'

import './App.css';

function App() {
  return (
    <div className="App">
      <ShopProvider>
        <Navbar />
        <PageHeader />
        <Shop />
        <Cart />
      </ShopProvider>
    </div>
  );
}

export default App;
