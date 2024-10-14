import React from 'react'

const AccountDetails = () => {
    return (
        <div className='flex max-w-[1116px] m-auto mt-[60px] gap-[40px]'>
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
                    <div className='flex gap-[10px] rounded-[8px] px-[24px] py-[8px] mt-[16px]'>
                        <img className='w-[24px] h-[24px]' src="/images/orders3.svg" alt="shippings car" />
                        <a className='text-[#5C5F6A]' href='adress'>Address</a>
                    </div>
                    <div className='flex gap-[10px] rounded-[8px] px-[24px] py-[8px] mt-[16px]'>
                        <img className='w-[24px] h-[24px]' src="/images/orders4.svg" alt="key" />
                        <a className='text-[#5C5F6A]' href='password'>Password</a>
                    </div>
                    <div className='flex gap-[10px] bg-[#F6F6F6] font-semibold rounded-[8px] px-[24px] py-[8px] mt-[16px]'>
                        <img className='w-[24px] h-[24px]' src="/images/orders5d.svg" alt="account icon" />
                        <a className='text-[#0E1422]' href='AccDetail'>Account Detail</a>
                    </div>
                    <div className='flex gap-[10px] rounded-[8px] px-[24px] py-[8px] mt-[16px]'>
                        <img className='w-[24px] h-[24px]' src="/images/orders6.svg" alt="logout icon" />
                        <a className='text-[#5C5F6A]' href='logout'>Logout</a>
                    </div>
                </div>
            </div>
            <div className='border border-1 w-[1px] h-[504px]'></div>
            <div className='w-[534px]'>
                <h4 className='text-[#0E1422] font-bold'>Account Details</h4>
                <div className="bg-[#F0F1FF] w-[48px] h-[48px] relative rounded-[100px] mt-[40px]">
                    <div className="text-[#4078FF] absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%]">AN</div>
                </div>
                <div className='mt-[32px]'>
                    <label className='block' for="adr">Full Name</label>
                    <input className='border border-1 rounded-[6px] w-[320px] h-[45px]' type="text" name="address"></input>
                </div>
                <div className='mt-[16px]'>
                    <label className='block' for="adr">Email</label>
                    <input className='border border-1 rounded-[6px] w-[320px] h-[45px]' type="email" name="address"></input>
                </div>
                <button className='w-[144px] h-[44px] rounded-[4px] bg-[#0E1422] text-white mt-[64px]' type="submit" value="Submit">Save Changes</button>
            </div>
        </div>
    )
};

export default AccountDetails;