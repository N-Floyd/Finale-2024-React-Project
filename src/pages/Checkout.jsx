import React from 'react'
import Discount from '../components/Discount';
import Header from '../components/Header';

const Checkout = () => {
    return (
        <div>
            <Discount />
            <Header />
            <div>
                <div className=" bg-[#F6F6F6] h-[160px]">
                    <div>
                        <p className='w-[114px] h-[29px] text-[24px] pt-[35px] font-bold text-[#0E1422] ml-[175px]'>Checkout</p>
                        <div className="flex w-[159px] pt-11 ml-[175px]">
                            <p className="w-[80px] h-[25px] text-[14px] text-[#5C5F6A]">Ecommerce</p>
                            <img className="w-[24px] h-[24px] mr-2" src="/images/rightarrow.svg" alt="" />
                            <p className="w-[65px] h-[25px] text-[14px] font-semibold text-[#0E1422]">Checkout</p>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <p className='w-[137px] h-[19px] text-[16px] text-[#0E1422] mt-[72px] ml-[175px] font-semibold'>Shipping Address</p>
                        <div className='w-[536px] h-[237px] ml-[174px] mt-[64px]'>
                            <label className='block' for="adr">Address</label>
                            <input className='border border-1 rounded-[6px] w-[534px] h-[45px]' type="text" name="address"></input>
                            <div className='flex gap-[16px] h-[69px] mt-[15px]'>
                                <div className='w-[259px] h-[69px]'>
                                    <label className='block' for="adr">City</label>
                                    <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type="text" name="address"></input>
                                </div>
                                <div className=' h-[69px]'>
                                    <label className='block' for="adr">State</label>
                                    <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type="text" name="address"></input>
                                </div>
                            </div>
                            <div className='flex gap-[16px] h-[69px] mt-[15px]'>
                                <div className='w-[259px] h-[69px]'>
                                    <label className='block' for="adr">Zip Code</label>
                                    <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type="number" name="address"></input>
                                </div>
                                <div className=' h-[69px]'>
                                    <label className='block' for="adr">Country</label>
                                    <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type="text" name="address"></input>
                                </div>
                            </div>
                            <div className='flex gap-[16px] h-[69px] mt-[51px]'>
                                <div className='w-[259px] h-[69px]'>
                                    <label className='block' for="adr">Email</label>
                                    <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type="email" name="address"></input>
                                </div>
                                <div className=' h-[69px]'>
                                    <label className='block' for="adr">Full name</label>
                                    <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type="text" name="address"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border border-1 w-[1px] h-[504px] mt-[56px] ml-[119px]'></div>
                    <div className='ml-[64px] mt-[56px]'>
                        <p className='w-[84px] h-[19px] text-[16px] font-semibold mt-[16px]'>Your Order</p>
                        <div className='flex  mt-[64px]'>
                            <div className='flex w-[268px] h-[40px] gap-[12px]'>
                                <img className='w-[40px] h-[40px]' src="/images/check1.svg" alt="" />
                                <img className='w-[40px] h-[40px]' src="/images/check2.svg" alt="" />
                                <img className='w-[40px] h-[40px]' src="/images/check3.svg" alt="" />
                            </div>
                            <button className='w-[107px] h-[44px] border border-1 rounded-[4px] text-[14px] text-[#5C5F6A]'>Edit Cart</button>
                        </div>
                        <div className='mt-[64px]'>
                            <div className='flex justify-between w-[372px] h-[25px] mt-[12px]'>
                                <p className='text-[14px] text-[#5C5F6A]'>Subtotal</p>
                                <p className='text-[14px] text-[#0E1422] font-semibold'>$ 75.00</p>
                            </div>
                            <div className='flex justify-between w-[372px] h-[25px] mt-[12px]'>
                                <p className='text-[14px] text-[#5C5F6A]'>Shipping: </p>
                                <p className='text-[14px] text-[#0E1422] font-semibold'>Free</p>
                            </div>
                            <div className='flex justify-between w-[372px] h-[25px] mt-[12px]'>
                                <p className='text-[14px] text-[#5C5F6A]'>Tax: </p>
                                <p className='text-[14px] text-[#0E1422] font-semibold'>$ 3.00</p>
                            </div>
                        </div>
                        <div className='border-t border-[#E6E7E8] w-[372px] mt-[24px]'></div>
                        <div className='flex justify-between w-[372px] h-[25px] mt-[24px]'>
                            <p className='text-[14px] text-[#0E1422] font-semibold'>Total</p>
                            <p className='text-[14px] text-[#0E1422] font-semibold'>$ 100.00</p>
                        </div>
                        <button className='w-[372px] h-[44px] rounded-[4px] mt-[24px] bg-[#0E1422] text-[14px] text-white' type="submit" value="Submit">Place Order</button>
                    </div>
                </div>
            </div>

            <div className="h-[429px] bg-[#F6F6F6] mt-[135px]">
                <div className=" flex justify-between w-[1440px]">
                    <div className="w-[272px] h-[160px] mt-[88px] ml-[174px]">
                        <img className="w-[168px] h-[44px]" src="/images/footerloogo.png" alt="" />
                        <p className="w-[272px] h-[50px] text-[14px] text-[#5C5F6A] mt-[12px]">
                            DevCut is a YouTube channel for practical project-based learning.
                        </p>
                        <div className="flex justify-between w-[120px] h-[24px] mt-[40px]">
                            <img src="/images/githubicon.svg" alt="" />
                            <img src="/images/instaicon.svg" alt="" />
                            <img src="/images/youtubeicon.svg" alt="" />
                        </div>
                    </div>
                    <div className="flex justify-between w-[391px]">
                        <div className="w-[96px] h-[172px] mt-[72px]">
                            <p className="w-[67px] h-[25px] text-[#878A92] text-[14px] mb-[45px]">SUPPORT</p>
                            <div className="h-[107px]">
                              <p className="w-[28px] h-[25px] text-[#5C5F6A] text-[14px] mb-[16px]">FAQ</p>
                              <p className="w-[87px] h-[25px] text-[#5C5F6A] text-[14px] mb-[16px]">Terms of use</p>
                              <p className="w-[94px] h-[25px] text-[#5C5F6A] text-[14px]">Privacy Policy</p>
                            </div>
                        </div>
                        <div className="w-[72px] h-[172px] mt-[72px]">
                            <p className="w-[72px] h-[25px] text-[#878A92] text-[14px] mb-[45px]">COMPANY</p>
                            <div className="h-[107px]">
                              <p className="w-[61px] h-[25px] text-[#5C5F6A] text-[14px] mb-[16px]">About us</p>
                              <p className="w-[54px] h-[25px] text-[#5C5F6A] text-[14px] mb-[16px]">Contact</p>
                              <p className="w-[53px] h-[25px] text-[#5C5F6A] text-[14px]">Careers</p>
                            </div>
                        </div>
                        <div className="w-[72px] h-[172px] mt-[72px]">
                            <p className="w-[40px] h-[25px] text-[#878A92] text-[14px] mb-[45px]">SHOP</p>
                            <div className="h-[107px]">
                              <p className="w-[81px] h-[25px] text-[#5C5F6A] text-[14px] mb-[16px]">My Account</p>
                              <p className="w-[65px] h-[25px] text-[#5C5F6A] text-[14px] mb-[16px]">Checkout</p>
                              <p className="w-[30px] h-[25px] text-[#5C5F6A] text-[14px]">Cart</p>
                            </div>
                        </div>
                    </div>
                    <div className="mr-[169.97px] mt-[72px]">
                       <p className="w-[155px] h-[25px] text-[14px] text-[#878A92]">ACCEPTED PAYMENTS</p>
                       <div className="flex justify-between w-[176.03px] h-[32px] opacity-[80%] mt-[40px]">
                         <img src="/images/mastercard.svg" alt="" />
                         <img src="/images/amex.svg" alt="" />
                         <img src="/images/visa.svg" alt="" />
                       </div>
                    </div>
                </div>
            </div>


            <div className="h-[79px]">
                <div className="w-[1116px] border-t flex justify-center ml-[162px]"> 
                      <p className="w-[237px] h-[25px] text-[14px] text-[#5C5F6A] mt-[35px]">© 2023 DevCut. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
};

export default Checkout;