import React from 'react'
import AProductDash from '../AProductsComponents/AProductDash';
import AddProductsRFirst from './AddProductsRFirst';
import AddProductsRSecond from './AddProductsRSecond';

const AddProductsR = () => {
  return (
    <div>
      <AProductDash />
      <div className='h-[922px] w-[1068px] border-2 mt-[64px]'>
        <h2 className='font-semibold mt-[32px] ml-[48px]'>Add Product</h2>
        <hr className='mt-[32px]'></hr>
        <div className='mt-[64px] flex ml-[48px] gap-[74px]'>
        <AddProductsRFirst />
        <AddProductsRSecond />
        </div>
      </div>
    </div>
  )
};

export default AddProductsR;