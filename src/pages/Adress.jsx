import React from 'react'
import Discount from '../components/Discount';
import Header from '../components/Header';
import MyAccount from './pagesComponents/MyAccount';
import AdressShipping from './pagesComponents/AdressShipping';
import FooterBG from './pagesComponents/FooterBG';

const Adress = () => {
  return (
    <div>
        <Discount />
        <Header />
        <MyAccount />
        <AdressShipping />
        <FooterBG />
    </div>
  )
};

export default Adress;