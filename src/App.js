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
import Bestselling from './components/Bestselling';
import ProductSwiper from './pages/pagesComponents/ProductSwiper';
import ListingAsideCategory from './pages/pagesComponents/ListingAsideCategory';
import FilterGrid from './pages/pagesComponents/FilterGrid';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/listing/:category_id" element={<Listing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/afterpayments" element={<AfterPaymentS />} />
        <Route path="/afterpaymentf" element={<AfterPaymentF />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotp" element={<ForgotP />} />
        <Route path="/resetp" element={<ResetP />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/address' element={<Address />} />
        <Route path='/details' element={<Details />} />
        <Route path='/password' element={<Password />} />
        <Route path='/startshop' element={<StartShop />} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/aproducts' element={<AProducts />} />
        <Route path='/addproducts' element={<AddProducts />} />
        <Route path='/aorders' element={<AOrders />} />
        <Route path='/acustumers' element={<ACustumers />} />
        <Route path='/areviews' element={<AReviews />} />
        <Route path='/asettings' element={<ASettings />} />
        <Route path='/accdetail' element={<AccountDetails />} />
        <Route path="/bestselling" element={<Bestselling /> } />
        <Route path="/productswiper" element={<ProductSwiper /> } />
        <Route path="/productswiper/:id" element={<ProductSwiper />} />
        <Route path="/listingasidecategory" element={<ListingAsideCategory /> } />
        <Route path='/filtergrid' element={<FilterGrid />} />
        <Route path='/filtergrid/:category_id' element={<FilterGrid />} />
        
      </Routes>
    </div>
  );
}

export default App;
