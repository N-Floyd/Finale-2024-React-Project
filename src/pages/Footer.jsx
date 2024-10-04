const Footer = () => {
    return (
        <div className="h-[629px] mt-[150px]">
            <div className=" h-[200px] bg-[#F6F6F6]">
                <div className="flex justify-between w-[1116px] h-[82px] ml-[162px]">
                    <div className="w-[387px] h-[72px] mt-[64px]">
                       <h1 className="w-[234px] h-[23px] text-[24px] font-bold">Join Our Newsletter</h1>
                       <p className="w-[387px] h-[25px] text-[14px] text-[#5C5F6A] mt-[24px]">
                         We love to surprise our subscribers with occasional gifts.
                        </p>
                    </div>
                    <div className="w-[452px] h-[45px] mt-[78px]">
                        <input type="email" placeholder="Your email address" className="border-solid border-2 
                         w-[320px] h-[45px] rounded-[6px] px-[15px] py-[10px]">
                        </input>
                        <button className="w-[116px] h-[44px] rounded-[4px] bg-[#0E1422]
                         text-[#FFFFFF] text-[14px] px-[24px] py-[12px] ml-[16px]">Subscribe
                        </button>
                    </div>
                </div>
            </div>




            <div className="h-[429px]">
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

export default Footer;