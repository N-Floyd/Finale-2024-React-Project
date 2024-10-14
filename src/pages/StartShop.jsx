import React from 'react'
import Discount from '../components/Discount';
import Header from '../components/Header';
import MyAccount from './pagesComponents/MyAccount';
import StartShopping from './pagesComponents/StartShopping';
import FooterBG from './pagesComponents/FooterBG';

const StartShop = () => {
  return (
    <div>
        <Discount />
        <Header />
        <MyAccount />
        <StartShopping />
        <FooterBG />
    </div>
  )
};

export default StartShop;