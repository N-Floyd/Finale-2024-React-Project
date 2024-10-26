import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProductCounter from './ProductCounter';
import ProductColors from './ProductColor';
import ProductSizes from './ProductSizes';

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

                        <div>
                            <ProductColors />
                            <ProductSizes />
                            <ProductCounter />

                            <div className="flex mt-8 gap-[16px]">
                                <button className="w-[284px] rounded-[4px] bg-[#0E1422] text-white hover:scale-110 duration-500">Add to cart</button>
                                <img className="w-[43] h-[43px] hover:scale-110 duration-500" src="/images/heart.svg" alt="icon heart" />
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