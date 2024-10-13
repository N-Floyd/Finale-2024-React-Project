import React from 'react'
import Discount from '../components/Discount';
import Header from '../components/Header';
import MyAccount from './pagesComponents/MyAccount';
import OrdersOrders from './pagesComponents/OrdersOrders';
import FooterBG from './pagesComponents/FooterBG';

const Orders = () => {
  return (
    <div>
        <Discount />
        <Header />
        <MyAccount />
        <OrdersOrders />
        <FooterBG />
    </div>
  )
};

export default Orders;