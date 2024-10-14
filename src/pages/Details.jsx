import React from 'react'
import MyAccount from './pagesComponents/MyAccount';
import Header from '../components/Header';
import Discount from '../components/Discount';
import AccountDetails from './pagesComponents/AccountDetails';
import FooterBG from './pagesComponents/FooterBG';

const Details = () => {
  return (
    <div>
        <Discount />
        <Header />
        <MyAccount />
        <AccountDetails />
        <FooterBG />
    </div>
  )
};

export default Details;