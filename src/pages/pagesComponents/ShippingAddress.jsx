import React from 'react'
import ShippAddress from './ShippAdress';
import { Link } from 'react-router-dom';

const ShippingAddress = () => {
    return (
        <div className='flex justify-between max-w-[1116px] m-auto mt-[56px]'>
        <ShippAddress />
            <div className='border border-1 w-[1px] h-[504px]'></div>
            <div className=''>
                <p className=' font-semibold mt-[16px]'>Your Order</p>
                <div className='flex justify-between w-[372px] mt-[64px]'>
                    <div className='flex gap-[12px]'>
                        <img className='w-[40px] h-[40px] transition hover:scale-110 hover:-translate-y-1 duration-500' src="/images/check1.svg" alt="" />
                        <img className='w-[40px] h-[40px] transition hover:scale-110 hover:-translate-y-1 duration-500' src="/images/check2.svg" alt="" />
                        <img className='w-[40px] h-[40px] transition hover:scale-110 hover:-translate-y-1 duration-500' src="/images/check3.svg" alt="" />
                    </div>
                    <Link to="/cart"><button className='w-[107px] h-[44px] border border-1 rounded-[4px] text-[#5C5F6A] hover:scale-110 hover:-translate-y-1 duration-500'>Edit Cart</button></Link>
                </div>
                <div>
                    <div className='flex justify-between mt-[64px]'>
                        <p className='text-[#5C5F6A]'>Subtotal</p>
                        <p className='text-[#0E1422] font-semibold'>$ 75.00</p>
                    </div>
                    <div className='flex justify-between mt-[12px]'>
                        <p className='text-[#5C5F6A]'>Shipping: </p>
                        <p className='text-[#0E1422] font-semibold'>Free</p>
                    </div>
                    <div className='flex justify-between mt-[12px]'>
                        <p className='text-[#5C5F6A]'>Tax: </p>
                        <p className='text-[#0E1422] font-semibold'>$ 3.00</p>
                    </div>
                </div>
                <hr className='mt-[24px]'></hr>
                <div className='flex justify-between mt-[24px]'>
                    <p className='text-[#0E1422] font-semibold'>Total</p>
                    <p className='text-[#0E1422] font-semibold'>$ 78.00</p>
                </div>
                <Link to="/orders"><button className='w-[372px] h-[44px] rounded-[4px] bg-[#0E1422] text-white mt-[24px] hover:scale-110 duration-500' type="submit" value="Submit">Place Order</button></Link>
            </div>
        </div>
    )
};

export default ShippingAddress;