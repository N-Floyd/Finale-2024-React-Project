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
import Address from './pages/Address';
import Details from './pages/Details';
import Password from './pages/Password';
import StartShop from './pages/StartShop';
import AdminLogin from './AdminPage/AdminLogin';
import Dashboard from './AdminPage/Dashboard';
import AProducts from './AdminPage/AProducts';
import AddProducts from './AdminPage/AddProducts';
import AOrders from './AdminPage/AOrders';
import ACustumers from './AdminPage/ACustumers';
import AReviews from './AdminPage/AReviews';
import ASettings from './AdminPage/ASettings';
import AccountDetails from './pages/pagesComponents/AccountDetails';


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
        <Route path='/address' element={<Address />} />
        <Route path='/details' element={<Details />} />
        <Route path='/password' element={<Password />} />
        <Route path='/startShop' element={<StartShop />} />
        <Route path='/admilLogin' element={<AdminLogin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/aproducts' element={<AProducts />} />
        <Route path='/addproducts' element={<AddProducts />} />
        <Route path='/aorders' element={<AOrders />} />
        <Route path='/acustumers' element={<ACustumers />} />
        <Route path='/areviews' element={<AReviews />} />
        <Route path='/asettings' element={<ASettings />} />
        <Route path='/accdetail' element={<AccountDetails />} />
      </Routes>
    </div>
  );
}

export default App;
