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
import Adress from './pages/Adress';
import Details from './pages/Details';
import Password from './pages/Password';
import StartShop from './pages/StartShop';
import AdminLogin from './AdminPage/AdminLogin';
import Dashboard from './AdminPage/Dashboard';
import AProducts from './AdminPage/AProducts';
import AddProducts from './AdminPage/AddProducts';


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
        <Route path='/addproducts' element={<AddProducts />} />
      </Routes>
    </div>
  );
}

export default App;
