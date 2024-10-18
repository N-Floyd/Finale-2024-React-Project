import './App.css';
import Main from './src/components/Main'
import { Routes, Route } from 'react-router-dom';
import Product from './src/pages/Product';
import Listing from './src/pages/Listing';
import Cart from './src/pages/Cart';
import Checkout from './src/pages/Checkout';
import AfterPaymentS from './src/pages/AfterPaymentS';
import AfterPaymentF from './src/pages/AfterPaymentF';
import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';
import ForgotP from './src/pages/ForgotP';
import ResetP from './src/pages/ResetP';
import Orders from './src/pages/Orders';
import Wishlist from './src/pages/Wishlist';
import Adress from './src/pages/Adress';
import Details from './src/pages/Details';
import Password from './src/pages/Password';
import StartShop from './src/pages/StartShop';
import AdminLogin from './src/AdminPage/AdminLogin';
import Dashboard from './src/AdminPage/Dashboard';
import AProducts from './src/AdminPage/AProducts';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/afterPaymentS" element={<AfterPaymentS />} />
        <Route path="/afterPaymentF" element={<AfterPaymentF />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgotP" element={<ForgotP />} />
        <Route path="/resetP" element={<ResetP />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/adress' element={<Adress />} />
        <Route path='/details' element={<Details />} />
        <Route path='/password' element={<Password />} />
        <Route path='/startShop' element={<StartShop />} />
        <Route path='/adminLogin' element={<AdminLogin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/aproducts' element={<AProducts />} />
      
      </Routes>
    </div>
  );
}

export default App;
