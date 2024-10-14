import React from 'react'

const StartShopping = () => {
    return (
        <div className='flex max-w-[1116px] m-auto mt-[60px] '>
            <div className='flex gap-[280px]'>
                <div className='flex gap-[36px]'>
                    <div className='w-[212px] '>
                        <div>
                            <div className='flex gap-[10px] bg-[#F6F6F6] rounded-[8px] px-[24px] py-[8px] mt-[60px]'>
                                <img className='w-[24px] h-[24px]' src="/images/orders1d.svg" alt="shopping trolley" />
                                <a className='text-[#0E1422] font-semibold' href='/orders'>Orders</a>
                            </div>
                            <div className='flex gap-[10px] rounded-[8px] px-[24px] py-[8px] mt-[16px]'>
                                <img className='w-[24px] h-[24px]' src="/images/orders2.svg" alt="heart" />
                                <a className='text-[#5C5F6A]' href='wishlist'>Wishlist</a>
                            </div>
                            <div className='flex gap-[10px] rounded-[8px] px-[24px] py-[8px] mt-[16px]'>
                                <img className='w-[24px] h-[24px]' src="/images/orders3.svg" alt="shippings car" />
                                <a className='text-[#5C5F6A]' href='adress'>Address</a>
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
                    <div className='border border-1 w-[1px] h-[504px]'></div>
                </div>
                <div className='mt-[135px]'>
                    <div className='flex justify-center'>
                        <img className='' src="/images/startshop.png" alt="" />
                    </div>
                    <p className='text-[#5C5F6A] mt-[24px]'>Your order history is waiting to be filled.</p>
                    <div className='flex justify-center'>
                    <div className="bg-[#0E1422] flex justify-center rounded-[4px] mt-[24px] w-[179px] h-[44px] gap-[6px]">
                        <button className="text-[#FFFFFF]">Start Shopping</button>
                        <img className='w-[24px]' src="/images/arrow.svg" alt="arrow icon" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default StartShopping;