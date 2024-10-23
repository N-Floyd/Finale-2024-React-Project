import React from 'react'
import StartShopR from './StartShopR';
import OrdersAside from './OrdersAside';

const StartShopping = () => {
    return (
        <div className='flex max-w-[1116px] m-auto mt-[60px] '>
            <div className='flex gap-[280px]'>
                <div className='flex gap-[36px]'>
                <OrdersAside />
                <div className='border border-1 w-[1px] h-[504px]'></div>
                </div>
                <StartShopR />
            </div>
        </div>
    )
};

export default StartShopping;