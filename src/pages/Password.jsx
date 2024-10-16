import React from 'react'
import Discount from '../components/Discount';
import Header from '../components/Header';
import MyAccount from './pagesComponents/MyAccount';
import PasswordChange from './pagesComponents/PasswordChange';
import FooterBG from './pagesComponents/FooterBG';

const Password = () => {
  return (
    <div>
        <Discount />
        <Header />
        <MyAccount />
        <PasswordChange />
        <FooterBG />
    </div>
  )
};

export default Password;