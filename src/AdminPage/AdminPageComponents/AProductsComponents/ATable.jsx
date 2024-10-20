import React from 'react'

const ATable = () => {
  return (
    <table className="mt-[24px] w-[1069px]">
    <thead className='border-t border-b'>
        <tr className="text-[#5C5F6A]">
            <img className='p-2 ml-[50px]' src="/images/a1sort.svg" alt="" />
            <th className="py-3 px-6 text-left">Name</th>
            <th className="text-[#5C5F6A] py-3 px-6 text-left">SKU</th>
            <th className="text-[#5C5F6A] py-3 px-6 text-left">Price</th>
            <th className="text-[#5C5F6A] py-3 px-6 text-left">Stock</th>
            <th className="text-[#5C5F6A] py-3 px-6 text-left">Categories</th>
            <th className="text-[#5C5F6A] py-3 px-6 text-left">Action</th>
        </tr>
    </thead>
    <tbody className="text-[14px]">
        <tr className="border-b hover:bg-gray-100">
            <img className='w-[48px] h-[48px] p-2 ml-[44px]' src="/images/a1.png" alt="" />
            <td className="text-[#5C5F6A] py-3 px-6">Raw Black T-Shirt Lineup</td>
            <td className="text-[#5C5F6A] py-3 px-6">47514501</td>
            <td className="text-[#5C5F6A] py-3 px-6">$75.00</td>
            <td className="text-[#5C5F6A] py-3 px-6">In Stock</td>
            <td className="text-[#5C5F6A] py-3 px-6">T-shirt, Men</td>
            <img className='py-3 px-6 ml-[28px]' src="/images/adots.svg" alt="" />
        </tr>
        <tr className="border-b hover:bg-gray-100">
            <img className='w-[48px] h-[48px] p-2 ml-[44px]' src="/images/a2.png" alt="" />
            <td className="text-[#5C5F6A] py-3 px-6">Classic Monochrome Tees</td>
            <td className="text-[#5C5F6A] py-3 px-6">47514501</td>
            <td className="text-[#5C5F6A] py-3 px-6">$35.00</td>
            <td className="text-[#5C5F6A] py-3 px-6">In Stock</td>
            <td className="text-[#5C5F6A] py-3 px-6">T-shirt, Men</td>
            <img className='py-3 px-6 ml-[28px]' src="/images/adots.svg" alt="" />
        </tr>
        <tr className="border-b hover:bg-gray-100">
            <img className='w-[48px] h-[48px] p-2 ml-[44px]' src="/images/a3 .png" alt="" />
            <td className="text-[#5C5F6A] py-3 px-6">Monochromatic Wardrobe</td>
            <td className="text-[#5C5F6A] py-3 px-6">47514501</td>
            <td className="text-[#5C5F6A] py-3 px-6">$27.00</td>
            <td className="text-[#5C5F6A] py-3 px-6">In Stock</td>
            <td className="text-[#5C5F6A] py-3 px-6">T-shirt</td>
            <img className='py-3 px-6 ml-[28px]' src="/images/adots.svg" alt="" />
        </tr>
        <tr className="border-b hover:bg-gray-100">
            <img className='w-[48px] h-[48px] p-2 ml-[44px]' src="/images/a4.png" alt="" />
            <td className="text-[#5C5F6A] py-3 px-6">Essential Neutrals</td>
            <td className="text-[#5C5F6A] py-3 px-6">47514501</td>
            <td className="text-[#5C5F6A] py-3 px-6">$22.00</td>
            <td className="text-[#5C5F6A] py-3 px-6">In Stock</td>
            <td className="text-[#5C5F6A] py-3 px-6">T-shirt, Raw</td>
            <img className='py-3 px-6 ml-[28px]' src="/images/adots.svg" alt="" />
        </tr>
        <tr className="border-b hover:bg-gray-100">
            <img className='w-[48px] h-[48px] p-2 ml-[44px]' src="/images/a5.png" alt="" />
            <td className="text-[#5C5F6A] py-3 px-6">UTRAANET Black</td>
            <td className="text-[#5C5F6A] py-3 px-6">47514501</td>
            <td className="text-[#5C5F6A] py-3 px-6">$43.00</td>
            <td className="text-[#5C5F6A] py-3 px-6">In Stock</td>
            <td className="text-[#5C5F6A] py-3 px-6">T-shirt, Trend</td>
            <img className='py-3 px-6 ml-[28px]' src="/images/adots.svg" alt="" />
        </tr>
        <tr className="border-b hover:bg-gray-100">
            <img className='w-[48px] h-[48px] p-2 ml-[44px]' src="/images/a6.png" alt="" />
            <td className="text-[#5C5F6A] py-3 px-6">Elegant Ebony Sweatshirts</td>
            <td className="text-[#5C5F6A] py-3 px-6">47514501</td>
            <td className="text-[#5C5F6A] py-3 px-6">$35.00</td>
            <td className="text-[#5C5F6A] py-3 px-6">In Stock</td>
            <td className="text-[#5C5F6A] py-3 px-6">T-shirt</td>
            <img className='py-3 px-6 ml-[28px]' src="/images/adots.svg" alt="" />
        </tr>
        <tr className="border-b hover:bg-gray-100">
            <img className='w-[48px] h-[48px] p-2 ml-[44px]' src="/images/a7.png" alt="" />
            <td className="text-[#5C5F6A] py-3 px-6">Sleek and Cozy Black</td>
            <td className="text-[#5C5F6A] py-3 px-6">47514501</td>
            <td className="text-[#5C5F6A] py-3 px-6">$57.00</td>
            <td className="text-[#5C5F6A] py-3 px-6">In Stock</td>
            <td className="text-[#5C5F6A] py-3 px-6">Hoodie</td>
            <img className='py-3 px-6 ml-[28px]' src="/images/adots.svg" alt="" />
        </tr>
        <tr className="hover:bg-gray-100">
            <img className='w-[48px] h-[48px] p-2 ml-[44px]' src="/images/a8.png" alt="" />
            <td className="text-[#5C5F6A] py-3 px-6">MOCKUP Black</td>
            <td className="text-[#5C5F6A] py-3 px-6">47514501</td>
            <td className="text-[#5C5F6A] py-3 px-6">$30.00</td>
            <td className="text-[#5C5F6A] py-3 px-6">In Stock</td>
            <td className="text-[#5C5F6A] py-3 px-6">T-shirt</td>
            <img className='py-3 px-6 ml-[28px]' src="/images/adots.svg" alt="" />
        </tr>
    </tbody>
</table>
  )
};

export default ATable;