import React from 'react'
import Discount from '../components/Discount';
import Header from '../components/Header';
import MyAccount from './pagesComponents/MyAccount';


const ShippingA = () => {
  return (
    <div>
        <Discount />
        <Header />
        <MyAccount />
        <ShippingA />
    </div>
  )
};

export default ShippingA;