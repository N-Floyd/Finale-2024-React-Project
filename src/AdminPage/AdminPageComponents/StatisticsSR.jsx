import React from 'react'

const StatisticsSR = () => {
    return (
        <div className="w-[695px] h-[475px] border border-[#E9E9EB] rounded-[8px]">
        <div className='flex gap-[16px] px-6 mt-[40px]'>
            <p className='font-bold'>Recent Orders</p>
            <button className='bg-[#F6F6F6] w-[78px] h-[28px] rounded-[100px] text-[12px]'>View All</button>
        </div>
        <table className="min-w-full mt-[20px]">
            <thead className='border-t border-b'>
                <tr className="text-[#5C5F6A]">
                    <th className="py-3 px-6 text-left">Item</th>
                    <th className="text-[#5C5F6A] py-3 px-6 text-left">Date</th>
                    <th className="text-[#5C5F6A] py-3 px-6 text-left">Total</th>
                    <th className="text-[#5C5F6A] py-3 px-6 text-left">Status</th>
                </tr>
            </thead>
            <tbody className="">
                <tr className="border-b hover:bg-gray-100">
                    <td className="text-[#5C5F6A] py-3 px-6">Mens Black T-Shirts</td>
                    <td className="text-[#5C5F6A] py-3 px-6">20 Mar, 2023</td>
                    <td className="text-[#5C5F6A] py-3 px-6">$75.00</td>
                    <td className="text-[#5C5F6A] py-3 px-6">Processing</td>
                </tr>
                <tr className="border-b hover:bg-gray-100">
                    <td className="text-[#5C5F6A] py-3 px-6">Essential Neutrals</td>
                    <td className="text-[#5C5F6A] py-3 px-6">19 Mar, 2023</td>
                    <td className="text-[#5C5F6A] py-3 px-6">$22.00</td>
                    <td className="text-[#5C5F6A] py-3 px-6">Processing</td>
                </tr>
                <tr className="border-b hover:bg-gray-100">
                    <td className="text-[#5C5F6A] py-3 px-6">Sleek and Cozy Black</td>
                    <td className="text-[#5C5F6A] py-3 px-6">7 Feb, 2023</td>
                    <td className="text-[#5C5F6A] py-3 px-6">$57.00</td>
                    <td className="text-[#5C5F6A] py-3 px-6">Completed</td>
                </tr>
                <tr className="border-b hover:bg-gray-100">
                    <td className="text-[#5C5F6A] py-3 px-6">MOCKUP Black</td>
                    <td className="text-[#5C5F6A] py-3 px-6">29 Jan, 2023</td>
                    <td className="text-[#5C5F6A] py-3 px-6">$30.00</td>
                    <td className="text-[#5C5F6A] py-3 px-6">Completed</td>
                </tr>
                <tr className="border-b hover:bg-gray-100">
                    <td className="text-[#5C5F6A] py-3 px-6">Monochromatic Wardrobe</td>
                    <td className="text-[#5C5F6A] py-3 px-6">27 Jan, 2023</td>
                    <td className="text-[#5C5F6A] py-3 px-6">$27.00</td>
                    <td className="text-[#5C5F6A] py-3 px-6">Completed</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
};

export default StatisticsSR;