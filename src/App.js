import './App.css';
import Discount from './components/Discount';
import Main from './components/Main'
import Header from './components/Header';
import Underheader from './components/Underheader';
import Shipping from './components/Shipping';
import Bestselling from './components/Bestselling';
import Browsing from './components/Browsing';
import Productlist from './components/Productlist';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/product" element={<Product />} />
      </Routes>
      <Discount />
      <Main />
      <Header />
      <Underheader />
      <Shipping />
      <Bestselling />
      <Browsing />
      <Productlist />
      <Footer />
    </div>
  );
}

export default App;
