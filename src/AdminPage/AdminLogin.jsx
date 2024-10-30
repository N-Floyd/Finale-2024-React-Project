import React from 'react'
import LoginAdmin from './AdminPageComponents/LoginAdmin';
import Discount from '../components/Discount';
import Header from '../components/Header';
import FooterF from '../components/FooterF';
import Footer from '../components/Footer';
import LoginLogin from './AdminPageComponents/LoginLogin';

const AdminLogin = () => {
  return (
    <div>
      <Discount />
      <Header />
      <LoginLogin />
      <LoginAdmin />
      <FooterF />
      <Footer />
    </div>
  )
};

export default AdminLogin;