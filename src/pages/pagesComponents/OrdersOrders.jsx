import React from 'react'
import OrdersAside from './OrdersAside';
import OrdersR from './OrdersR';

const OrdersOrders = () => {
    return (
        <div className='flex max-w-[1116px] m-auto mt-[60px] gap-[40px]'>
            <OrdersAside />
            <div className='border border-1 w-[1px] h-[504px]'></div>
            <OrdersR />
        </div>
    )
};

export default OrdersOrders;