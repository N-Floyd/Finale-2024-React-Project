import './App.css';
import Main from './components/Main'
import { Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import Listing from './pages/Listing';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/Listing" element={<Listing />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
