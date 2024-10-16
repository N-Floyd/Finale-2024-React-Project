import React from 'react'
import Discount from '../components/Discount';
import Header from '../components/Header';
import AterpaymentOrder from './pagesComponents/AterpaymentOrder';
import FooterBG from './pagesComponents/FooterBG';
import BoxSucc from './pagesComponents/BoxSucc';

const AfterPaymentS = () => {
    return (
        <div>
            <Discount />
            <Header />
            <AterpaymentOrder />
            <BoxSucc />
            <FooterBG />
        </div>
    )
};

export default AfterPaymentS;