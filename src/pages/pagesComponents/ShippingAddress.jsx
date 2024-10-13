import React from 'react'

const ShippingAddress = () => {
    return (
        <div className='flex justify-between max-w-[1116px] m-auto mt-[56px]'>
            <div className=''>
                <p className='text-[16px] text-[#0E1422] font-semibold'>Shipping Address</p>
                <div className=''>
                    <label className='block mt-[64px]' for="adr">Address</label>
                    <input className='border border-1 rounded-[6px] w-[534px] h-[45px]' type="text" name="address"></input>
                    <div className='flex gap-[16px] mt-[15px]'>
                        <div className='h-[69px]'>
                            <label className='block' for="adr">City</label>
                            <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type="text" name="address"></input>
                        </div>
                        <div className='h-[69px]'>
                            <label className='block' for="adr">State</label>
                            <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type="text" name="address"></input>
                        </div>
                    </div>
                    <div className='flex gap-[16px] mt-[15px]'>
                        <div className='h-[69px]'>
                            <label className='block' for="adr">Zip Code</label>
                            <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type="number" name="address"></input>
                        </div>
                        <div className='h-[69px]'>
                            <label className='block' for="adr">Country</label>
                            <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type="text" name="address"></input>
                        </div>
                    </div>
                    <div className='flex gap-[16px] mt-[51px]'>
                        <div className='h-[69px]'>
                            <label className='block' for="adr">Email</label>
                            <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type="email" name="address"></input>
                        </div>
                        <div className='h-[69px]'>
                            <label className='block' for="adr">Full name</label>
                            <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type="text" name="address"></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border border-1 w-[1px] h-[504px]'></div>
            <div className=''>
                <p className=' font-semibold mt-[16px]'>Your Order</p>
                <div className='flex justify-between mt-[64px]'>
                    <div className='flex gap-[12px]'>
                        <img className='w-[40px] h-[40px]' src="/images/check1.svg" alt="" />
                        <img className='w-[40px] h-[40px]' src="/images/check2.svg" alt="" />
                        <img className='w-[40px] h-[40px]' src="/images/check3.svg" alt="" />
                    </div>
                    <button className='w-[107px] h-[44px] border border-1 rounded-[4px] text-[#5C5F6A]'>Edit Cart</button>
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
                <button className='w-[372px] h-[44px] rounded-[4px] bg-[#0E1422] text-white mt-[24px]' type="submit" value="Submit">Place Order</button>
            </div>
        </div>
    )
};

export default ShippingAddress;