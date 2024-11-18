
import React, { useEffect, useState } from 'react';

const ATable = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllProductsAndUserCart = async () => {
    setIsLoading(true);
    try {
      const products_res = await fetch('https://fakestoreapi.com/products');
      const products_data = await products_res.json();

      const cart_res = await fetch('https://fakestoreapi.com/carts/1');
      const cart_products = await cart_res.json();


      let cart_products_data = [];

      for (let index = 0; index < cart_products.products.length; index++) {
        const element = cart_products.products[index];

        products_data.find((product) => {
          if (product.id === element.productId) {
            cart_products_data.push(product);
          }
        });
      }

      setProducts(cart_products_data);

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    getAllProductsAndUserCart();
  }, []);


  // const products = [
  //   {
  //     name: "Raw Black T-Shirt Lineup",
  //     sku: "47514501",
  //     price: "$75.00",
  //     stock: "In Stock",
  //     categories: "T-shirt, Men",
  //     img: "/images/a1.png"
  //   },
  //   {
  //     name: "Classic Monochrome Tees",
  //     sku: "47514501",
  //     price: "$35.00",
  //     stock: "In Stock",
  //     categories: "T-shirt, Men",
  //     img: "/images/a2.png"
  //   },
  //   {
  //     name: "Monochromatic Wardrobe",
  //     sku: "47514501",
  //     price: "$27.00",
  //     stock: "In Stock",
  //     categories: "T-shirt",
  //     img: "/images/a3.png"
  //   },
  //   {
  //     name: "Essential Neutrals",
  //     sku: "47514501",
  //     price: "$22.00",
  //     stock: "In Stock",
  //     categories: "T-shirt, Raw",
  //     img: "/images/a4.png"
  //   },
  //   {
  //     name: "UTRAANET Black",
  //     sku: "47514501",
  //     price: "$43.00",
  //     stock: "In Stock",
  //     categories: "T-shirt, Trend",
  //     img: "/images/a5.png"
  //   },
  //   {
  //     name: "Elegant Ebony Sweatshirts",
  //     sku: "47514501",
  //     price: "$35.00",
  //     stock: "In Stock",
  //     categories: "T-shirt",
  //     img: "/images/a6.png"
  //   },
  //   {
  //     name: "Sleek and Cozy Black",
  //     sku: "47514501",
  //     price: "$57.00",
  //     stock: "In Stock",
  //     categories: "Hoodie",
  //     img: "/images/a7.png"
  //   },
  //   {
  //     name: "MOCKUP Black",
  //     sku: "47514501",
  //     price: "$30.00",
  //     stock: "In Stock",
  //     categories: "T-shirt",
  //     img: "/images/a8.png"
  //   },
  // ];

  console.log(products);

  return (
    <table className="mt-[24px] w-[1069px]">

      {isLoading && <p>Loading...</p>}

      <thead className='border-t border-b'>
        <tr className="text-[#5C5F6A]">
          <th className="py-3 px-6 text-left"><img className='p-2 ml-[40px]' src="/images/a1sort.svg" alt="Sort Icon" /></th>
          <th className="py-3 px-6 text-left">Name</th>
          <th className="py-3 px-6 text-left">SKU</th>
          <th className="py-3 px-6 text-left">Price</th>
          <th className="py-3 px-6 text-left">Stock</th>
          <th className="py-3 px-6 text-left">Categories</th>
          <th className="py-3 px-6 text-left">Action</th>
        </tr>
      </thead>
      <tbody className="text-[14px]">
        {products.map((product, index) => (
          <tr key={index} className="border-b hover:bg-gray-100 hover:-translate-y-1 hover:scale-110 duration-500">
            <td className='p-2 ml-[44px]'><img className='w-[48px] h-[48px] ml-[48px]' src={product.image} alt={`${product.name} thumbnail`} /></td>
            <td className="text-[#5C5F6A] py-3 px-6">{product.title}</td>
            <td className="text-[#5C5F6A] py-3 px-6">{product.id}</td>
            <td className="text-[#5C5F6A] py-3 px-6">{product.price}</td>
            <td className="text-[#5C5F6A] py-3 px-6">{product.rating.count}</td>
            <td className="text-[#5C5F6A] py-3 px-6">{product.category}</td>
            <td className='py-3 px-6 ml-[28px]'><img src="/images/adots.svg" alt="Action Icon" /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ATable;