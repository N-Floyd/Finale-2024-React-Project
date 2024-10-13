import React from 'react'
import Discount from '../components/Discount';
import Header from '../components/Header';
import ForgotPass from './pagesComponents/ForgotPass';
import ForgotpassEM from './pagesComponents/ForgotpassEM';
import FooterBG from './pagesComponents/FooterBG';

const ForgotP = () => {
  return (
    <div>
        <Discount />
        <Header />
        <ForgotPass />
        <ForgotpassEM />
        <FooterBG />
    </div>
  )
};

export default ForgotP;