import React from 'react'
import Discount from '../components/Discount';
import Header from '../components/Header';
import FooterBG from './pagesComponents/FooterBG';
import CheckoutCheck from './pagesComponents/CheckoutCheck';
import ShippingAddress from './pagesComponents/ShippingAddress';

const Checkout = () => {
    return (
        <div>
            <Discount />
            <Header />
            <CheckoutCheck />
            <ShippingAddress />
            <FooterBG />
        </div>
    )
};

export default Checkout;