import React from 'react'
import Discount from '../components/Discount'
import Header from '../components/Header'

const AfterPaymentFailed = () => {
  return (
    <div>
      <Discount />
      <Header />
      <div className='h-[704px]'>
        <div className=" bg-[#FBD9D0] h-[160px]">
          <div>
            <p className='w-[144px] h-[29px] text-[24px] pt-[35px] font-bold text-[#0E1422] ml-[175px]'>Failed Order</p>
            <div className="flex w-[228px] pt-11 ml-[175px]">
              <p className="w-[80px] h-[25px] text-[14px] text-[#5C5F6A]">Ecommerce</p>
              <img className="w-[24px] h-[24px] mr-2" src="/images/rightarrow.svg" alt="" />
              <p className="w-[83px] h-[25px] text-[14px] font-semibold text-[#0E1422]">Failed Order</p>
            </div>
            <img className='w-[160.93px] h-[159.73px] ml-[640px] mt-[160px]' src="/images/aftfailed.svg" alt="failed box" />
            <h2 className='w-[278px] h-[29px] ml-[570px] mt-[20.27px] text-[24px] text-[#0E1422] font-bold'>Thank you for shopping</h2>
            <p className='w-[356px] h-[50px] ml-[542px] mt-[16px] text-[14px] text-[#5C5F6A]'>Oops! There was a problem processing your order. Please review the details and try again.</p>
            <div>
              <div className="w-[132px] h-[44px] bg-[#0E1422] flex rounded-[4px] ml-[642px] mt-[48px]">
                <button className="w-[54px] h-[25px] text-[#FFFFFF] text-[14px] mt-2 ml-6">Reorder</button>
                <img className='w-[24px] h-[24px] mt-[10px]' src="/images/arrow.svg" alt="arrow icon" />
              </div>
            </div>
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
}

export default AfterPaymentFailed