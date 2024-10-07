import React from "react";
import Discount from "../components/Discount";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Product = () => {
    return (
        <div>
            <Discount />
            <Header />
            <div className="max-w-[1116px] mx-auto border-t">
                <div>
                    <div className="w-[227px] h-[25px]">
                        <div className="flex mt-7">
                            <p className="w-[80px] h-[25px] text-[14px] text-[#5C5F6A]">Ecommerce</p>
                            <img className="w-[24px] h-[24px] mr-2" src="/images/rightarrow.svg" alt="" />
                            <p className="w-[115px] h-[25px] text-[14px] font-semibold text-[#0E1422]">Black man t-shirt</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between max-w-[1116px] py-8  mx-auto">
                    <div>
                        <div className="w-[534px] h-[574px] bg-[#F6F6F6]">
                            <img className="w-[288px] h-[404px] mt-[29px] ml-[123px]" src="/images/shiirt.png" alt="" />
                        </div>
                    </div>

                    <div className="w-[438px] h-[564px] mt-8">
                        <div className="w-[438px] h-[29px] flex mt-[12px] justify-between">
                            <h1 className="w-[295px] h-[29px] text-[24px] text-[#0E1422] font-bold">Raw Black T-Shirt Lineup</h1>
                            <img className="w-[24px] h-[24px] mt-[10px]" src="/images/share.svg" alt="" />
                        </div>
                        <div className="w-[272px] h-[28px] mt-[15px] flex gap-[8px]">
                            <div className="w-[167px] h-[28px] bg-[#F6F6F6] rounded-[100px] flex gap-[8px]">
                                <img className="w-[24px] h-[24px] ml-3" src="images/sstar.svg" alt="" />
                                <p className="w-[103px] h-[24px] text-[12px] mt-1 text-[#5C5F6A]">4.2 — 54 Reviews </p>
                            </div>
                            <button className='w-[89px] h-[28px] border-solid border-2 
                                rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK
                            </button>
                        </div>
                        <p className="text=[18px] text-[#0E1422] font-bold mt-5">$75.00</p>
                        <div className="w-[152px] h-[76px]">
                            <h4 className="text-[12px] text-[#5C5F6A] mt-8">AVAILABLE COLORS</h4>
                            <div className="flex justify-between w-[116px] h-[32px] mt-4">
                                <div className="bg-[#A3BEF8] w-[24px] h-[24px] rounded-[100px]"></div>
                                <div className="bg-[#FFD58A] w-[24px] h-[24px] rounded-[100px]"></div>
                                <div className="bg-[#83B18B] w-[24px] h-[24px] rounded-[100px]"></div>
                            </div>
                            <div className="w-[243px] h-[76px]">
                                <h5 className="text-[12px] text-[#5C5F6A] mt-5">SELECT SIZE</h5>
                                <div className="flex justify-between w-[232px] h-[40px] mt-3">
                                    <div className="w-[40px] h-[40px] border rounded-[4px] flex justify-center p-2 text-[#5C5F6A] text-[12px]">S</div>
                                    <div className="w-[40px] h-[40px] border rounded-[4px] flex justify-center p-2 text-[#5C5F6A] text-[12px]">M</div>
                                    <div className="w-[40px] h-[40px] border rounded-[4px] flex justify-center p-2 text-[#5C5F6A] text-[12px]">L</div>
                                    <div className="w-[40px] h-[40px] border rounded-[4px] flex justify-center p-2 text-[#5C5F6A] text-[12px]">XL</div>
                                    <div className="w-[40px] h-[40px] border rounded-[4px] flex justify-center p-2 text-[#5C5F6A] text-[12px]">XXL</div>
                                </div>
                                <div className="w-[164px] h-[78px] mt-10">
                                    <h3 className="text-[12px] text-[#5C5F6A]">QUANTITY</h3>
                                    <div className="flex justify-between mt-3 w-[164px] h-[44px] pr-[16px] pl-[16px] border-solid border-2 rounded-[4px] border-[#E6E7E8]">
                                        <button className="text-[40px] text-[#5C5F6A]">-</button>
                                        <p className="text-[24px]">1</p>
                                        <button className="text-[40px] text-[#5C5F6A]">+</button>
                                    </div>
                                </div>
                                <div className="flex w-[343px] h-[43px] mt-8 gap-[16px]">
                                    <button className="w-[284px] px-[24px] py-[12px] rounded-[4px] bg-[#0E1422] text-[14px] text-white">Add to cart</button>
                                    <img className="w-[43] h-[43px]" src="/images/heart.svg" alt="" />
                                </div>
                                <p className="w-[235px] h-[24px] mt-5 text-[#5C5F6A] text-[12px]">— FREE SHIPPING ON ORDERS $100+</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex gap-[30px] mt-28">
                    <div className="w-[241px] h-[98px] mt-20">
                        <div className="flex w-[241px] h-[41px] px-[24px] py-[8px] gap-[10px] bg-[#F6F6F6] rounded-[8px]">
                            <img className="w-[24px] h-[24px]" src="/images/dots.svg" alt="" />
                            <p className="text-[14px] text-[#0E1422]">Details</p>
                        </div>
                        <div className="flex w-[241px] h-[41px] px-[24px] py-[8px] gap-[10px] rounded-[8px] mt-[16px]">
                            <img className="w-[24px] h-[24px]" src="/images/emptystar.svg" alt="" />
                            <p className="text-[14px] text-[#5C5F6A]">Reviews</p>
                        </div>
                    </div>
                    <div className="w-[727px] h-[323px]">
                        <div>
                            <h6 className="text-[#0E1422] text-[16px] font-bold">Detail</h6>
                            <p className="w-[727px] h-[125px] text-[14px] text-[#5C5F6A] mt-8">Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential
                                for modern men. Crafted with meticulous attention to detail and designed for comfort, these
                                versatile black tees are a must-have addition to your collection. <br></br>
                                The classic black color never goes out of style. Whether you're dressing up for a special occasion
                                or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.
                            </p>
                        </div>
                        <div className="w-[193px] h-[100px] text-[14px] text-[#5C5F6A] mt-14 ml-4">
                            <ul className="list-disc">
                                <li>Premium Quality</li>
                                <li>Versatile Wardrobe Staple</li>
                                <li>Available in Various Sizes</li>
                                <li>Tailored Fit</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-[1092px] h-[559px] mt-44">
                    <div>
                        <h2 className="w-[219px] h-[29px] text-[24px] text-[#0E1422] font-bold">You might also like</h2>
                        <p className="w-[127px] h-[24px] text-[12px] text-[#878A92] mt-3">SIMILAR PRODUCTS</p>
                    </div>

                    <div>
                        <div className='flex justify-between mt-10'>

                            <div className='w-[264px] h-[434px] rounded-[4px] 
                             px-[8px] py-[16px] '>

                                <img src="/images/shirt1.png" alt="" />
                                <p className='w-[176px] h-[25px] text-[#0E1422] 
                              text-[14px] font-bold mt-[20px]'>Classic Monochrome Tees
                                </p>
                                <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                                    <button className='w-[89px] h-[28px] border-solid border-2 
                                 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK
                                    </button>
                                    <p className='w-[47px] h-[25px] text-[#474B57] 
                                 text-[14px] mt-[3px]'>$35.00
                                    </p>
                                </div>
                            </div>

                            <div className='w-[256px] h-[434px] rounded-[4px]
                             px-[8px] py-[16px] ml-[10px]'>

                                <img src="/images/shirt2.png" alt="" />
                                <p className='w-[176px] h-[25px] text-[#0E1422] 
                              text-[14px] font-bold mt-[20px]'>Monochromatic Wardrobe
                                </p>
                                <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                                    <button className='w-[89px] h-[28px] border-solid border-2 
                                 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK
                                    </button>
                                    <p className='w-[47px] h-[25px] text-[#474B57] 
                                 text-[14px] mt-[3px]'>$27.00
                                    </p>
                                </div>
                            </div>

                            <div className='w-[256px] h-[434px] rounded-[4px]
                             px-[8px] py-[16px] ml-[10px]'>

                                <img src="/images/shirt3.png" alt="" />
                                <p className='w-[121px] h-[25px] text-[#0E1422] 
                              text-[14px] font-bold mt-[20px]'>Essential Neutrals
                                </p>
                                <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                                    <button className='w-[89px] h-[28px] border-solid border-2 
                                 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK
                                    </button>
                                    <p className='w-[47px] h-[25px] text-[#474B57] 
                                 text-[14px] mt-[3px]'>$22.00
                                    </p>
                                </div>
                            </div>

                            <div className='w-[256px] h-[434px] rounded-[4px]
                             px-[8px] py-[16px] ml-[10px]'>

                                <img src="/images/shirt4.png" alt="" />
                                <p className='w-[117px] h-[25px] text-[#0E1422] 
                              text-[14px] font-bold mt-[20px]'>UTRAANET Black
                                </p>
                                <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                                    <button className='w-[89px] h-[28px] border-solid border-2 
                                 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK
                                    </button>
                                    <p className='w-[47px] h-[25px] text-[#474B57] 
                                 text-[14px] mt-[3px]'>$43.00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Product;