import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const ProductSwiper = () => {
    return (
        <div>
            <div className="flex justify-between max-w-[1116px] py-8  mx-auto">
                <div>
                    <div className="max-w-[534px] h-[574px] bg-[#F6F6F6]">

                        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                            <SwiperSlide>
                                <img className="w-[288px] h-[404px] mt-[29px] ml-[123px]" src="/images/shiirt.png" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="w-[288px] h-[404px] mt-[29px] ml-[123px]" src="/images/shiirt.png" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="w-[288px] h-[404px] mt-[29px] ml-[123px]" src="/images/shiirt.png" alt="" />
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>

                <div className="mt-[16px]">
                    <div className="w-[438px] flex mt-[12px] justify-between">
                        <h1 className="text-[24px] text-[#0E1422] font-bold">Raw Black T-Shirt Lineup</h1>
                        <img src="/images/share.svg" alt="share icon" />
                    </div>
                    <div className="w-[272px] h-[28px] mt-[12px] flex gap-[8px]">
                        <div className="bg-[#F6F6F6] rounded-[100px] flex gap-[8px]">
                            <img className="w-[24px] h-[24px] ml-3" src="images/sstar.svg" alt="black star" />
                            <p className="w-[103px] text-[12px] mt-1 text-[#5C5F6A]">4.2 — 54 Reviews </p>
                        </div>
                        <button className='w-[89px] h-[28px] border-solid border-2 
                                rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK
                        </button>
                    </div>
                    <p className="text-[#0E1422] font-bold mt-[24px]">$75.00</p>
                    <div>
                        <h4 className="text-[#5C5F6A] mt-[32px]">AVAILABLE COLORS</h4>
                        <div className="flex justify-between w-[116px] mt-[10px]">
                            <div className="bg-[#A3BEF8] w-[24px] h-[24px] rounded-[100px]"></div>
                            <div className="bg-[#FFD58A] w-[24px] h-[24px] rounded-[100px]"></div>
                            <div className="bg-[#83B18B] w-[24px] h-[24px] rounded-[100px]"></div>
                        </div>
                        <div>
                            <h5 className="text-[#5C5F6A] mt-5">SELECT SIZE</h5>
                            <div className="flex justify-between w-[232px] h-[40px] mt-3">
                                <div className="w-[40px] h-[40px] border rounded-[4px] flex justify-center p-2 text-[#5C5F6A] text-[12px]">S</div>
                                <div className="w-[40px] h-[40px] border rounded-[4px] flex justify-center p-2 text-[#5C5F6A] text-[12px]">M</div>
                                <div className="w-[40px] h-[40px] border rounded-[4px] flex justify-center p-2 text-[#5C5F6A] text-[12px]">L</div>
                                <div className="w-[40px] h-[40px] border rounded-[4px] flex justify-center p-2 text-[#5C5F6A] text-[12px]">XL</div>
                                <div className="w-[40px] h-[40px] border rounded-[4px] flex justify-center p-2 text-[#5C5F6A] text-[12px]">XXL</div>
                            </div>
                            <div className="w-[164px] h-[78px] mt-[32px]">
                                <h3 className="text-[#5C5F6A]">QUANTITY</h3>
                                <div className="flex justify-between items-center mt-3 w-[164px] h-[44px] pr-[16px] pl-[16px] border-solid border-2 rounded-[4px] border-[#E6E7E8]">
                                    <button className="text-[#5C5F6A]">
                                        <img className="w-[20px] j-[20px]" src="/images/minus.svg" alt="remove icon" />
                                    </button>
                                    <p className="text-[24px]">1</p>
                                    <button className="text-[#5C5F6A]">
                                        <img className="w-[20px] j-[20px]" src="/images/plus.svg" alt="add icon" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex mt-8 gap-[16px]">
                                <button className="w-[284px]  rounded-[4px] bg-[#0E1422] text-white">Add to cart</button>
                                <img className="w-[43] h-[43px]" src="/images/heart.svg" alt="icon heart" />
                            </div>
                            <p className="mt-[12px] text-[#5C5F6A] text-[12px]">— FREE SHIPPING ON ORDERS $100+</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default ProductSwiper;