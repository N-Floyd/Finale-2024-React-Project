import React from 'react'
import Discount from '../components/Discount';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartCart from './pagesComponents/CartCart';
import FooterF from '../components/FooterF';
import YourCart from './pagesComponents/YourCart';

const Cart = () => {
    return (
        <div>
            <Discount />
            <Header />
            <CartCart />
            <YourCart />
            <FooterF />
            <Footer />
        </div>
    )
};

export default Cart;