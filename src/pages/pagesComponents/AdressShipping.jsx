import React from 'react'

const AdressShipping = () => {
  return (
    <div className='flex max-w-[1116px] m-auto mt-[60px] gap-[40px]'>
            <div className='w-[212px] '>
                <div>
                    <div className='flex gap-[10px] rounded-[8px] px-[24px] py-[8px] mt-[60px]'>
                        <img className='w-[24px] h-[24px]' src="/images/orders1.svg" alt="shopping trolley" />
                        <a className='text-[#0E1422]' href='/orders'>Orders</a>
                    </div>
                    <div className='flex gap-[10px] rounded-[8px] px-[24px] py-[8px] mt-[16px]'>
                        <img className='w-[24px] h-[24px]' src="/images/orders2.svg" alt="heart" />
                        <a className='text-[#5C5F6A]' href='wishlist'>Wishlist</a>
                    </div>
                    <div className='flex gap-[10px] bg-[#F6F6F6] rounded-[8px] px-[24px] py-[8px] mt-[16px]'>
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
            <div className='w-[534px]'>
                <div>
                    <h4 className='text-[#0E1422] font-bold'>Shipping Address</h4>
                </div>
                <div className=''>
                    <label className='block mt-[40px]' for="adr">Street Address</label>
                    <input className='border border-1 rounded-[6px] w-[534px] h-[45px] px-[15px]' type="text" placeholder='2436 Naples Avenue' name="address"></input>
                    <div className='flex gap-[16px] mt-[15px]'>
                        <div className='h-[68px]'>
                            <label className='block' for="adr">City</label>
                            <input className='border border-1 rounded-[6px] w-[259px] h-[45px] px-[15px]' type="text" placeholder='Panama City' name="address"></input>
                        </div>
                        <div className='h-[68px]'>
                            <label className='block' for="adr">State</label>
                            <input className='border border-1 rounded-[6px] w-[259px] h-[45px] px-[15px]' type="text" placeholder='FL' name="address"></input>
                        </div>
                    </div>
                    <div className='flex gap-[16px] mt-[15px]'>
                        <div className='h-[68px]'>
                            <label className='block' for="adr">Zip Code</label>
                            <input className='border border-1 rounded-[6px] w-[259px] h-[45px] px-[15px]' type="number" placeholder='32405' name="address"></input>
                        </div>
                        <div className='h-[68px]'>
                            <label className='block' for="adr">Country</label>
                            <input className='border border-1 rounded-[6px] w-[259px] h-[45px] px-[15px]' type="text" placeholder='United States' name="address"></input>
                        </div>
                    </div>
                    <button className='w-[144px] h-[44px] rounded-[4px] bg-[#0E1422] text-white mt-[64px]' type="submit" value="Submit">Save Changes</button>
                </div>
            </div>
        </div>
  )
};

export default AdressShipping;