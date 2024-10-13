import React from 'react'
import Discount from '../components/Discount'
import Header from '../components/Header'
import FooterBG from './pagesComponents/FooterBG'
import BoxFaild from './pagesComponents/BoxFaild'
import AfterpaymentOrderF from './pagesComponents/AfterpaymentOrderF'

const AfterPaymentF = () => {
  return (
    <div>
      <Discount />
      <Header />
      <AfterpaymentOrderF />
      <BoxFaild />
      <FooterBG />
    </div>
  )
};

export default AfterPaymentF;