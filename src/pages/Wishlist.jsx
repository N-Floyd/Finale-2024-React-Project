import React from 'react'
import Discount from '../components/Discount';
import Header from '../components/Header';
import MyAccount from './pagesComponents/MyAccount';
import WishlistWishlist from './pagesComponents/WishlistWishlist';
import FooterBG from './pagesComponents/FooterBG';

const Wishlist = () => {
  return (
    <div>
        <Discount />
        <Header />
        <MyAccount />
        <WishlistWishlist />
        <FooterBG />
    </div>
  )
};

export default Wishlist;