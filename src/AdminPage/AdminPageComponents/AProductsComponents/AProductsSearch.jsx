import React from 'react'

const AProductsSearch = () => {
    return (
        <div className='flex mt-[24px] px-[48px]'>
            <h2 className='font-bold'>Products</h2>
            <div className='flex justify-end w-full gap-[16px]'>
                <button className='w-[124px] h-[40px] px-[20px] py-[12px] rounded-[4px] text-[14px] bg-[#0E1422] text-[#FFFFFF] '>Add product</button>
                <div className='flex items-center border-2 rounded-[6px]'>
                    <img src="/images/search.svg" className='w-[24px] h-[24px] ml-2' alt="search" />
                    <input type="text" placeholder="Search products" className='w-full h-full ml-2' />
                </div>
            </div>
        </div>
    )
};

export default AProductsSearch;