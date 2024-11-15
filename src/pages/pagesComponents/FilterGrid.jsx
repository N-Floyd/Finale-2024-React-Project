import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const FilterGrid = () => {
    const [products, setProducts] = useState([]);
    const { category_id } = useParams();

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


    const fetchProductsByCategory = async () => {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/category/${category_id}`);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();

            setProducts(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {

        if (category_id) {
            fetchProductsByCategory()
        }else{
            fetchProducts()
        }
    }, [category_id]);

    return (
        <div class="grid grid-rows-3 grid-flow-col gap-[24px] max-w-[1116px] mt-[16px]">
            {products.slice(1, 10).map((productlist, index) => (
                <div key={index}>
                    <Link to={`/product/${productlist.id}`}>
                        <div className="cursor-pointer transition hover:scale-110 duration-500 hover:animate-bounce">
                            <img className='w-[248px] h-[312px] px-5 py-5' src={productlist.image} />
                        </div>
                        <div>
                            <p className="font-medium text-sm mt-3 w-[248px] h-[40px]">
                                {productlist.title}
                            </p>
                            <div className="flex items-center mt-2 gap-[16px]">
                                <button className="text-center w-20 h-7 rounded-full border text-xs font-medium mt-3 items-center">
                                    IN STOCK{productlist.stock}
                                </button>
                                <div className="mt-3 ml-2 font-normal text-sm text-center">${productlist.price}</div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
};

export default FilterGrid;