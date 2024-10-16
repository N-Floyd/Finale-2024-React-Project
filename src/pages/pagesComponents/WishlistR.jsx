import React from 'react'

const WishlistR = () => {
    return (
        <div className='max-w-[617px]'>
            <div>
                <h4 className='text-[#0E1422] font-bold'>Wishlist</h4>
            </div>
            <div className='flex gap-[134px] mt-[56px]'>
                <div className='flex gap-[32px]'>
                    <img className='rounded-[4px] w-[80px] h-[80px]' src="/images/ordersshirt1.png" alt="black shirt" />
                    <div className='mt-[5px]'>
                        <p className='text-[#0E1422] font-semibold text-[14px]'>Raw Black T-Shirt Lineup</p>
                        <p className='text-[#5C5F6A] text-[12px]'>Ordered on: 27 July 2023</p>
                        <p className='font-semibold text-[12px]'>Remove item</p>
                    </div>
                </div>
                <div className='flex items-center gap-[32px]'>
                    <p className='font-semibold text-[14px]'>$75.00</p>
                    <button className='border-2 h-[44px] w-[124px] rounded-[4px] font-medium'>Add to cart</button>
                </div>
            </div>
            <hr className='mt-[32px]'></hr>
            <div className='flex gap-[134px] mt-[56px]'>
                <div className='flex gap-[32px]'>
                    <img className='rounded-[4px] w-[80px] h-[80px]' src="/images/ordersshirt3.png" alt="white shirt" />
                    <div className='mt-[5px]'>
                        <p className='text-[#0E1422] font-semibold text-[14px]'>Raw Black T-Shirt Lineup</p>
                        <p className='text-[#5C5F6A] text-[12px]'>Ordered on: 27 July 2023</p>
                        <p className='font-semibold text-[12px]'>Remove item</p>
                    </div>
                </div>
                <div className='flex items-center gap-[32px]'>
                    <p className='font-semibold text-[14px]'>$22.00</p>
                    <button className='border-2 h-[44px] w-[124px] rounded-[4px] font-medium'>Add to cart</button>
                </div>
            </div>
        </div>
    )
};

export default WishlistR;