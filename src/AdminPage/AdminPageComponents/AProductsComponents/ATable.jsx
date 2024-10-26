import React from 'react';

const ATable = () => {
  const products = [
    {
      name: "Raw Black T-Shirt Lineup",
      sku: "47514501",
      price: "$75.00",
      stock: "In Stock",
      categories: "T-shirt, Men",
      img: "/images/a1.png"
    },
    {
      name: "Classic Monochrome Tees",
      sku: "47514501",
      price: "$35.00",
      stock: "In Stock",
      categories: "T-shirt, Men",
      img: "/images/a2.png"
    },
    {
      name: "Monochromatic Wardrobe",
      sku: "47514501",
      price: "$27.00",
      stock: "In Stock",
      categories: "T-shirt",
      img: "/images/a3.png"
    },
    {
      name: "Essential Neutrals",
      sku: "47514501",
      price: "$22.00",
      stock: "In Stock",
      categories: "T-shirt, Raw",
      img: "/images/a4.png"
    },
    {
      name: "UTRAANET Black",
      sku: "47514501",
      price: "$43.00",
      stock: "In Stock",
      categories: "T-shirt, Trend",
      img: "/images/a5.png"
    },
    {
      name: "Elegant Ebony Sweatshirts",
      sku: "47514501",
      price: "$35.00",
      stock: "In Stock",
      categories: "T-shirt",
      img: "/images/a6.png"
    },
    {
      name: "Sleek and Cozy Black",
      sku: "47514501",
      price: "$57.00",
      stock: "In Stock",
      categories: "Hoodie",
      img: "/images/a7.png"
    },
    {
      name: "MOCKUP Black",
      sku: "47514501",
      price: "$30.00",
      stock: "In Stock",
      categories: "T-shirt",
      img: "/images/a8.png"
    },
  ];

  return (
    <table className="mt-[24px] w-[1069px]">
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
            <td className='p-2 ml-[44px]'><img className='w-[48px] h-[48px] ml-[48px]' src={product.img} alt={`${product.name} thumbnail`} /></td>
            <td className="text-[#5C5F6A] py-3 px-6">{product.name}</td>
            <td className="text-[#5C5F6A] py-3 px-6">{product.sku}</td>
            <td className="text-[#5C5F6A] py-3 px-6">{product.price}</td>
            <td className="text-[#5C5F6A] py-3 px-6">{product.stock}</td>
            <td className="text-[#5C5F6A] py-3 px-6">{product.categories}</td>
            <td className='py-3 px-6 ml-[28px]'><img src="/images/adots.svg" alt="Action Icon" /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ATable;