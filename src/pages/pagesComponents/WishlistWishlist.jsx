import React from 'react'
import WishlistAside from './WishlistAside';
import WishlistR from './WishlistR';

const WishlistWishlist = () => {
  return (
    <div className='flex max-w-[1116px] m-auto mt-[60px] gap-[40px]'>
        <WishlistAside />
        <div className='border border-1 w-[1px] h-[504px]'></div>
        <WishlistR />
    </div>
  )
};

export default WishlistWishlist;