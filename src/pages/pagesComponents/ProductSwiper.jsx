import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ProductCounter from './ProductCounter';
import ProductColors from './ProductColor';
import ProductSizes from './ProductSizes';
import { useParams } from 'react-router-dom';

const ProductSwiper = () => {

    const { id } = useParams();

    const [productDetails, setProductDetales] = useState(null);
    const [loading, setLoading] = useState(true);

    const getProductDetales = async () => {
        setLoading(true);
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();

            setProductDetales(data);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        getProductDetales();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!productDetails) return <div>Product not found!</div>;


    return (
        <div>
            <div className="flex justify-between max-w-[1116px] py-8  mx-auto">
                <div>
                    <div className="max-w-[534px] h-[574px] bg-[#F6F6F6]">

                        <Swiper pagination={true} className="mySwiper">
                            <SwiperSlide>
                                <img className="w-[288px] h-[404px] mt-[29px] ml-[123px]" src={productDetails.image} alt={productDetails.title} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="w-[288px] h-[404px] mt-[29px] ml-[123px]" src={productDetails.image} alt={productDetails.title} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="w-[288px] h-[404px] mt-[29px] ml-[123px]" src={productDetails.image} alt={productDetails.title} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="w-[288px] h-[404px] mt-[29px] ml-[123px]" src={productDetails.image} alt={productDetails.title} />
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>

                <div className="mt-[16px]">
                    <div className="w-[438px] flex mt-[12px] justify-between">
                        <h1 className="text-[24px] text-[#0E1422] font-bold">{productDetails.title}</h1>
                        <img src="/images/share.svg" alt="share icon" />
                    </div>
                    <div className="w-[272px] h-[28px] mt-[12px] flex gap-[8px]">
                        <div className="bg-[#F6F6F6] rounded-[100px] flex gap-[8px]">
                            <img className="w-[16px] h-[16px] ml-3 mt-1" src="/images/starfull.svg" alt="black star" />
                            <p className="w-[103px] text-[12px] mt-1 text-[#5C5F6A]">4.2 — 54 Reviews </p>
                        </div>
                        <button className='w-[89px] h-[28px] border-solid border-2 
                                rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK
                        </button>
                    </div>
                    <p className="text-[#0E1422] font-bold mt-[24px]">${productDetails.price}</p>
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