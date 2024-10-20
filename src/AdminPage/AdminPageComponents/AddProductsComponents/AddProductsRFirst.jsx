import React from 'react'

const AddProductsRFirst = () => {
    return (
        <div className='w-[320px]'>
            <div>
                <label className='block'>Title</label>
                <input className='border border-1 rounded-[6px] w-full h-[45px]' type="text"></input>
            </div>
            <div>
                <label className='block mt-[16px]'>Price</label>
                <input className='border border-1 rounded-[6px] w-full h-[45px]' type="number"></input>
            </div>
            <div>
                <label className='block mt-[16px]'>Category</label>
                <input className='border border-1 rounded-[6px] w-full h-[45px]' type="text"></input>
            </div>
            <div>
                <label className='block mt-[16px]'>Slug</label>
                <input className='border border-1 rounded-[6px] w-full h-[45px]' type="text"></input>
            </div>
            <div>
                <label className='block mt-[16px]'>SKU</label>
                <input className='border border-1 rounded-[6px] w-full h-[45px]' type="text"></input>
            </div>
            <div>
                <label className='block mt-[16px]'>Description</label>
                <input className='border border-1 rounded-[6px] w-full h-[128px]' type="text"></input>
            </div>
            <button type='submit' className='bg-[#0E1422] w-[138px] h-[44px] mt-[51px] rounded-[4px] text-[#FFFFFF] '>Save Product</button>
        </div>
    )
};

export default AddProductsRFirst;