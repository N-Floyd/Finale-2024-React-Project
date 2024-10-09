import React from 'react'
import Discount from '../components/Discount'
import Header from '../components/Header'

const Login = () => {
    return (
        <div>
            <Discount />
            <Header />
            <div>
                <div className=" bg-[#F6F6F6] h-[160px]">
                    <div>
                        <p className='w-[65px] h-[29px] text-[24px] pt-[35px] font-bold text-[#0E1422] ml-[175px]'>Login</p>
                        <div className="flex w-[159px] pt-11 ml-[175px]">
                            <a className="w-[80px] h-[25px] text-[14px] text-[#5C5F6A]" href='/' >Ecommerce</a>
                            <img className="w-[24px] h-[24px] mr-2" src="/images/rightarrow.svg" alt="" />
                            <a className="w-[37px] h-[25px] text-[14px] font-semibold text-[#0E1422]" href='/login'>Login</a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex justify-center gap-[8px] ml-[560px] mt-[128px] border border-1 border-[#B6B7BC] w-[320px] h-[44px] rounded-[4px]'>
                        <img className='w-[24px] h-[24px] mt-[9.5px] ' src="/images/google.svg" alt="google icon" />
                        <p className='w-[145px] h-[25px] text-[14px] text-[#5C5F6A] mt-[9.5px]'>Continue with Google</p>
                    </div>
                    <div className='flex justify-center w-[320px] h-[24px] ml-[560px] mt-[32px] gap-[16px]'>
                        <hr className='w-[136px] mt-2' />
                        <p className='w-[18px] h-[24px] text-[12px] text-[#5C5F6A]'>OR</p>
                        <hr className='w-[136px] mt-2' />
                    </div>
                    <div className='w-[320px] h-[69px] ml-[560px] mt-[34px]'>
                        <label className='block' for="adr">Email</label>
                        <input className='border border-1 rounded-[6px] w-[320px] h-[45px]' type="email" name="address"></input>
                    </div>
                    <div className='w-[320px] h-[69px] ml-[560px] mt-[15px]'>
                        <label className='block' for="adr">Password</label>
                        <input className='border border-1 rounded-[6px] w-[320px] h-[45px]' type="password" name="address"></input>
                    </div>
                    <p className='text-[#474B57] ml-[777px] mt-[16px] text-[12px] font-semibold'>Forgot Password?</p>
                        <button className='w-[318px] h-[44px] bg-[#0E1422] text-white rounded-[4px] ml-[561px] mt-[64px]'>Login
                    </button>
                    <p className='text-[#5C5F6A] w-[209px] text-[14px] ml-[615px] mt-[24px]'>Don't have an account? Sign up</p>
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
        </div>
    )
};

export default Login;