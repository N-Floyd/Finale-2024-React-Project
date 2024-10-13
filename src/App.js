import './App.css';
import Main from './components/Main'
import { Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import Listing from './pages/Listing';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import AfterPaymentS from './pages/AfterPaymentS';
import AfterPaymentF from './pages/AfterPaymentF';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotP from './pages/ForgotP';
import ResetP from './pages/ResetP';
import Orders from './pages/Orders';
import Wishlist from './pages/Wishlist';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/Listing" element={<Listing />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/AfterPaymentS" element={<AfterPaymentS />} />
        <Route path="AfterPaymentF" element={<AfterPaymentF />} />
        <Route path="Login" element={<Login />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="ForgotP" element={<ForgotP />} />
        <Route path="ResetP" element={<ResetP />} />
        <Route path='Orders' element={<Orders />} />
        <Route path='Wishlist' element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
