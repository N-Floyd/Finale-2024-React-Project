import React from 'react'
import Discount from '../components/Discount';
import Header from '../components/Header';
import ResetPass from './pagesComponents/ResetPass';
import ResetNewPass from './pagesComponents/ResetNewPass';
import FooterBG from './pagesComponents/FooterBG';

const ResetP = () => {
  return (
    <div>
        <Discount />
        <Header />
        <ResetPass />
        <ResetNewPass />
        <FooterBG />
    </div>
  )
};

export default ResetP;