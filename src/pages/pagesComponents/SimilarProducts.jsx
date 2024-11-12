import { Link } from 'react-router-dom';
import { useState } from 'react';

import React from 'react'

const SimilarProducts = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();

            setProducts(data);
        } catch (error) {
            console.error(error);
        }
    };
    useState(() => {
    fetchProducts();
    }, []);

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

            {products.slice(12, 16).map((product, index) => (
                    <div key={index}>
                        <Link key={product.id} to={`/product/${product.id}`}>
                            <div className="cursor-pointer transition hover:scale-110 duration-500 hover:animate-bounce">
                                <img className='w-[248px] h-[312px] px-5 py-5' src={product.image} />
                            </div>
                            <div>
                                <p className="font-medium text-sm mt-3 w-[248px] h-[40px]">
                                    {product.title}
                                </p>
                                <div className="flex items-center mt-10 gap-[16px]">
                                    <button className="text-center w-20 h-7 rounded-full border text-xs font-medium mt-3 items-center">
                                        IN STOCK{product.stock}
                                    </button>
                                    <div className="mt-3 ml-2 font-normal text-sm text-center">${product.price}</div>
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