import { Link } from 'react-router-dom';

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
                            <Link to="https://github.com/" className="transition hover:scale-110 hover:-translate-y-1 duration-500"><img src="/images/githubicon.svg" alt="github icon" /></Link>
                            <Link to="https://www.instagram.com/" className="transition hover:scale-110 hover:-translate-y-1 duration-500"><img src="/images/instaicon.svg" alt="instagram icon" /></Link>
                            <Link to="https://www.youtube.com/" className="transition hover:scale-110 hover:-translate-y-1 duration-500"><img src="/images/youtubeicon.svg" alt="youtube icon" /></Link>
                        </div>
                    </div>
                    <div className="grid grid-row-3 grid-flow-col gap-16 mt-10">
                        <div className="grid gap-[40px]">
                            <p className=" text-[#878A92]">SUPPORT</p>
                            <div className="grid gap-[16px]">
                              <a href="#" className="transition hover:scale-110 hover:-translate-y-1 duration-500 text-[#5C5F6A]">FAQ</a>
                              <a href="#" className="transition hover:scale-110 hover:-translate-y-1 duration-500 text-[#5C5F6A]">Terms of use</a>
                              <a href="#" className="transition hover:scale-110 hover:-translate-y-1 duration-500 text-[#5C5F6A]">Privacy Policy</a>
                            </div>
                        </div>
                        <div className="grid gap-[40px]">
                            <p className="text-[#878A92] text-[14px]">COMPANY</p>
                            <div className="grid gap-[16px]">
                              <a href="#" className="transition hover:scale-110 hover:-translate-y-1 duration-500 text-[#5C5F6A]">About us</a>
                              <a href="#" className="transition hover:scale-110 hover:-translate-y-1 duration-500 text-[#5C5F6A]">Contact</a>
                              <a href="#" className="transition hover:scale-110 hover:-translate-y-1 duration-500 text-[#5C5F6A]">Careers</a>
                            </div>
                        </div>
                        <div className="grid gap-[40px]">
                            <p className="text-[#878A92]">SHOP</p>
                            <div className="grid gap-[16px]">
                              <a href="#" className="transition hover:scale-110 hover:-translate-y-1 duration-500 text-[#5C5F6A]">My Account</a>
                              <a href="#" className="transition hover:scale-110 hover:-translate-y-1 duration-500 text-[#5C5F6A]">Checkout</a>
                              <a href="#" className="transition hover:scale-110 hover:-translate-y-1 duration-500 text-[#5C5F6A]">Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="">
                       <p className="text-[#878A92]">ACCEPTED PAYMENTS</p>
                       <div className="flex justify-between opacity-[80%] mt-[40px]">
                         <a className="transition hover:scale-110 hover:-translate-y-1 duration-500" href="#"><img src="/images/mastercard.svg" alt="" /></a>
                         <a className="transition hover:scale-110 hover:-translate-y-1 duration-500" href="#"><img src="/images/amex.svg" alt="" /></a>
                         <a className="transition hover:scale-110 hover:-translate-y-1 duration-500" href="#"><img src="/images/visa.svg" alt="" /></a>
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