import { Link } from 'react-router-dom';

import React from 'react'
import Cart from '../Cart';

const SimilarProducts = () => {
    const products = [
        {
            img: "/images/shirt1.png",
            title: "Classic Monochrome Tees",
            stock: "IN STOCK",
            price: "$35.00",
        },

        {
            img: "/images/shirt2.png",
            title: "Monochromatic Wardrobe",
            stock: "IN STOCK",
            price: "$27.00",
        },
        {
            img: "/images/shirt3.png",
            title: "Essential Neutrals",
            stock: "IN STOCK",
            price: "$22.00",
        },
        {
            img: "/images/shirt4.png",
            title: "UTRAANET Black",
            stock: "IN STOCK",
            price: "$43.00",
        }
    ]
  return (
    <div>
        <div>
            <div className="mt-[136px] max-w-[1116px] mx-auto">
                <div>
                    <p className=" text-[#0E1422] text-[24px] font-bold">You might also like</p>
                    <h5 className="text-[#878A92] text-[12px] mt-1">SIMILAR PRODUCTS</h5>
                </div>
            </div>

            <div className='flex justify-between max-w-[1116px] m-auto mt-[56px]'>

            {products.map((product, index) => (
                    <div key={index}>
                        <Link to="/product">
                            <div className="w-60 h-80 bg-neutral-100 rounded cursor-pointer transition hover:scale-110 duration-500">
                                <img src={product.img} />
                            </div>
                            <div>
                                <p className="font-medium text-sm mt-3">
                                    {product.title}
                                </p>
                                <div className="flex items-center mt-2">
                                    <button className="bg-white text-center w-20 h-7 rounded-full border text-xs font-medium mt-3 items-center">
                                        {product.stock}
                                    </button>
                                    <div className="mt-3 ml-2 font-normal text-sm text-center">{product.price}</div>
                                </div>
                            </div></Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
};

export default SimilarProducts;