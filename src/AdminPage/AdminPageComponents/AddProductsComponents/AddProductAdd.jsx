import React from 'react'
import AProductsSidebar from '../AProductsComponents/AProductsSidebar';
import AddProductsR from './AddProductsR';

const AddProductAdd = () => {
  return (
    <div className='flex max-w-[1140px] gap-[48px]'>
      <AProductsSidebar />
      <AddProductsR />
    </div>
  )
};

export default AddProductAdd;