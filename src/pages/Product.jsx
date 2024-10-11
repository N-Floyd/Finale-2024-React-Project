import React from "react";
import Discount from "../components/Discount";
import Header from "../components/Header";
import Footer from "../components/Footer"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import BlackManTshirt from "./pagesComponents/BlackManTshirt";
import ProductSwiper from "./pagesComponents/ProductSwiper";
import Reviews from "./pagesComponents/Reviews";
import SimilarProducts from "./pagesComponents/SimilarProducts";
import FooterF from "../components/FooterF";


const Product = () => {
    return (
        <div>
            <Discount />
            <Header />
            {/* <div className="max-w-[1116px] mx-auto border-t"> */}
            <BlackManTshirt />
            <ProductSwiper /> 
            <Reviews />
            <SimilarProducts />
            {/* </div> */}
            <FooterF />
            <Footer />
        </div>
    )
};

export default Product;