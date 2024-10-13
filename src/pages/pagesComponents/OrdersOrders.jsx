import React from 'react'

const OrdersOrders = () => {
    return (
        <div className='flex max-w-[1116px] m-auto mt-[60px] gap-[40px]'>
            <div className='w-[212px] '>
                <div>
                    <div className='flex gap-[10px] bg-[#F6F6F6] rounded-[8px] px-[24px] py-[8px] mt-[60px]'>
                        <img className='w-[24px] h-[24px]' src="/images/orders1.svg" alt="shopping trolley" />
                        <a className='text-[#0E1422]' href='/orders'>Orders</a>
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
            <div className='w-[617px]'>
                <div>
                    <h4 className='text-[#0E1422] font-bold'>Orders</h4>
                </div>
                <div className='flex gap-[116px] mt-[56px]'>
                    <div className='flex gap-[32px]'>
                        <img className='rounded-[4px] w-[80px] h-[80px]' src="/images/ordersshirt1.png" alt="black shirt" />
                        <div className='mt-[5px]'>
                            <p className='text-[#0E1422] font-semibold text-[14px]'>Raw Black T-Shirt Lineup</p>
                            <p className='text-[#5C5F6A] text-[12px]'>Ordered on: 27 July 2023</p>
                            <p className='font-semibold text-[12px]'>$70.00</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-[32px]'>
                        <div className='border-b border-[#0E1422] h-[25px] font-medium'>Processing</div>
                        <button className='border-2 h-[44px] w-[114px] rounded-[4px] font-medium'>View item</button>
                    </div>
                </div>
                <hr className='mt-[32px]'></hr>
                <div className='flex gap-[116px] mt-[32px]'>
                    <div className='flex gap-[32px]'>
                        <img className='rounded-[4px] w-[80px] h-[80px]' src="/images/ordersshirt2.png" alt="brown shirt" />
                        <div className='mt-[5px]'>
                            <p className='text-[#0E1422] font-semibold text-[14px] w-[168px]'>Monochromatic Wardrobe</p>
                            <p className='text-[#5C5F6A] text-[12px]'>Ordered on: 9 march 2023</p>
                            <p className='font-semibold text-[12px]'>$27.00</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-[32px]'>
                        <div className='border-b border-[#0E1422] h-[25px] font-medium'>Completed</div>
                        <button className='border-2 h-[44px] w-[114px] rounded-[4px] font-medium'>View item</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OrdersOrders;