const Footer = () => {
    return (
        <div>
            <div className="h-[429px] ">
                <div className="flex justify-between items-center max-w-[1116px] m-auto">
                    <div className="mt-[88px]">
                        <img className="w-[168px] h-[44px]" src="/images/footerloogo.png" alt="" />
                        <p className="text-[#5C5F6A] w-[272px] mt-[12px]">
                            DevCut is a YouTube channel for practical project-based learning.
                        </p>
                        <div className="flex justify-between w-[120px] mt-[32px]">
                            <img src="/images/githubicon.svg" alt="github icon" />
                            <img src="/images/instaicon.svg" alt="instagram icon" />
                            <img src="/images/youtubeicon.svg" alt="youtube icon" />
                        </div>
                    </div>
                    <div className="grid grid-row-3 grid-flow-col gap-16 mt-10">
                        <div className="grid gap-[40px]">
                            <p className=" text-[#878A92]">SUPPORT</p>
                            <div className="grid gap-[16px]">
                              <p className="text-[#5C5F6A]">FAQ</p>
                              <p className="text-[#5C5F6A]">Terms of use</p>
                              <p className="text-[#5C5F6A]">Privacy Policy</p>
                            </div>
                        </div>
                        <div className="grid gap-[40px]">
                            <p className="text-[#878A92] text-[14px]">COMPANY</p>
                            <div className="grid gap-[16px]">
                              <p className="text-[#5C5F6A]">About us</p>
                              <p className="text-[#5C5F6A]">Contact</p>
                              <p className="text-[#5C5F6A]">Careers</p>
                            </div>
                        </div>
                        <div className="grid gap-[40px]">
                            <p className="text-[#878A92]">SHOP</p>
                            <div className="grid gap-[16px]">
                              <p className="text-[#5C5F6A]">My Account</p>
                              <p className="text-[#5C5F6A]">Checkout</p>
                              <p className="text-[#5C5F6A]">Cart</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                       <p className="text-[#878A92]">ACCEPTED PAYMENTS</p>
                       <div className="flex justify-between opacity-[80%] mt-[40px]">
                         <img src="/images/mastercard.svg" alt="" />
                         <img src="/images/amex.svg" alt="" />
                         <img src="/images/visa.svg" alt="" />
                       </div>
                    </div>
                </div>
            </div>


            <div className="items-center max-w-[1116px] m-auto h-[79px]">
                <hr></hr>
                 <p className="text-[#5C5F6A] flex justify-center mt-[27px]">© 2023 DevCut. All rights reserved.</p>
            </div>

        </div>
    )
};

export default Footer;