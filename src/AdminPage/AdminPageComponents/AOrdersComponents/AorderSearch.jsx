import React from 'react'

const AorderSearch = () => {
    return (
        <div className='flex mt-[24px] px-[48px]'>
            <h2 className='font-semibold'>Orders</h2>
            <div className='flex justify-end w-full gap-[16px]'>
                <div className='flex items-center border-2 rounded-[6px] h-[40px] hover:scale-110 duration-500'>
                    <img src="/images/search.svg" className='w-[24px] h-[24px] ml-2' alt="search" />
                    <input type="search" placeholder="Search products" className='w-full h-full ml-2' />
                </div>
            </div>
        </div>
    )
};

export default AorderSearch;