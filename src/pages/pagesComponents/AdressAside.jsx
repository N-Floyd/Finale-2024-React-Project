import React from 'react'

const AdressAside = () => {
    return (
        <div className='w-[212px] '>
            <div>
                <div className='flex gap-[10px] rounded-[8px] px-[24px] py-[8px] mt-[60px]'>
                    <img className='w-[24px] h-[24px]' src="/images/orders1.svg" alt="shopping trolley" />
                    <a className='text-[#5C5F6A]' href='/orders'>Orders</a>
                </div>
                <div className='flex gap-[10px] rounded-[8px] px-[24px] py-[8px] mt-[16px]'>
                    <img className='w-[24px] h-[24px]' src="/images/orders2.svg" alt="heart" />
                    <a className='text-[#5C5F6A]' href='wishlist'>Wishlist</a>
                </div>
                <div className='flex gap-[10px] bg-[#F6F6F6] rounded-[8px] px-[24px] py-[8px] mt-[16px]'>
                    <img className='w-[24px] h-[24px]' src="/images/orders3d.svg" alt="shippings car" />
                    <a className='text-[#0E1422] font-semibold' href='adress'>Address</a>
                </div>
                <div className='flex gap-[10px] rounded-[8px] px-[24px] py-[8px] mt-[16px]'>
                    <img className='w-[24px] h-[24px]' src="/images/orders4.svg" alt="key" />
                    <a className='text-[#5C5F6A]' href='password'>Password</a>
                </div>
                <div className='flex gap-[10px] rounded-[8px] px-[24px] py-[8px] mt-[16px]'>
                    <img className='w-[24px] h-[24px]' src="/images/orders5.svg" alt="account icon" />
                    <a className='text-[#5C5F6A]' href='AccDetail'>Account Detail</a>
                </div>
                <div className='flex gap-[10px] rounded-[8px] px-[24px] py-[8px] mt-[16px]'>
                    <img className='w-[24px] h-[24px]' src="/images/orders6.svg" alt="logout icon" />
                    <a className='text-[#5C5F6A]' href='logout'>Logout</a>
                </div>
            </div>
        </div>
    )
};

export default AdressAside;