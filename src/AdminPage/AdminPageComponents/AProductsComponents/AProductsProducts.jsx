import React from 'react'
import AProductsSidebar from './AProductsSidebar';
import AProductsR from './AProductsR';

const AProductsProducts = () => {
  return (
    <div className='flex max-w-[1140px] gap-[48px]'>
      <AProductsSidebar />
      <AProductsR />
    </div>
  )
};

export default AProductsProducts;