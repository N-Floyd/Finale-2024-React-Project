import React from 'react';

const AordersTable = () => {
  const products = [
    {
      name: "Raw Black T-Shirt Lineup",
      date: "20 Mar, 2023",
      price: "$75.00",
      status: "Processing",
      img: "/images/a1.png"
    },
    {
        name: "Classic Monochrome Tees",
        date: "19 Mar, 2023",
        price: "$35.00",
        status: "Processing",
        img: "/images/a2.png"
      },
      {
        name: "Monochromatic Wardrobe",
        date: "7 Feb, 2023",
        price: "$27.00",
        status: "Completed",
        img: "/images/a3.png"
      },
      {
        name: "Essential Neutrals",
        date: "29 Jan, 2023",
        price: "$22.00",
        status: "Completed",
        img: "/images/a4.png"
      },
      {
        name: "UTRAANET Black",
        date: "27 Jan, 2023",
        price: "$43.00",
        status: "Processing",
        img: "/images/a5.png"
      },
      {
        name: "Elegant Ebony Sweatshirts",
        date: '4 Jan, 2023',
        price: "$35.00",
        status: "Cancelled",
        img: "/images/a6.png"
      },
      {
        name: "Sleek and Cozy Black",
        date: "28 Dec, 2022",
        price: "$57.00",
        status: "Completed",
        img: "/images/a7.png"
      },
      {
        name: "MOCKUP Black",
        date: "20 Dec, 2022",
        price: "$75.00",
        status: "Processing",
        img: "/images/a8.png"
      },
  ];

  return (
    <table className="mt-[24px] w-[1069px]">
      <thead className='border-t border-b'>
        <tr className="text-[#5C5F6A]">
          <th className="py-3 px-6 text-left"><img className='p-2 ml-[40px]' src="/images/a1sort.svg" alt="Sort Icon" /></th>
          <th className="py-3 px-6 text-left">Order</th>
          <th className="py-3 px-6 text-left">Date</th>
          <th className="py-3 px-6 text-left">Total</th>
          <th className="py-3 px-6 text-left">Status</th>
          <th className="py-3 px-6 text-left">Action</th>
        </tr>
      </thead>
      <tbody className="text-[14px]">
        {products.map((product, index) => (
          <tr key={index} className="border-b hover:bg-gray-100 hover:-translate-y-1 hover:scale-110 duration-500">
            <td className='p-2 ml-[44px]'><img className='w-[48px] h-[48px] ml-[48px]' src={product.img} alt={`${product.name} thumbnail`} /></td>
            <td className="text-[#5C5F6A] py-3 px-6">{product.name}</td>
            <td className="text-[#5C5F6A] py-3 px-6">{product.date}</td>
            <td className="text-[#5C5F6A] py-3 px-6">{product.price}</td>
            <td className="text-[#5C5F6A] py-3 px-6">{product.status}</td>
            <td className='py-3 px-6 ml-[28px]'><img src="/images/adots.svg" alt="Action Icon" /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AordersTable;