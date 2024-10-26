import React from 'react';

const orders = [
    {
        name: "Mens Black T-Shirts",
        data: "20 Mar, 2023",
        price: "$75.00",
        status: "Processing",
    },
    {
        name: "Essential Neutrals",
        data: "19 Mar, 2023",
        price: "$22.00",
        status: "Processing",
    },
    {
        name: "Sleek and Cozy Black",
        data: "7 Feb, 2023",
        price: "$57.00",
        status: "Completed",
    },
    {
        name: "MOCKUP Black",
        data: "29 Jan, 2023",
        price: "$30.00",
        status: "Completed",
    },
    {
        name: "Monochromatic Wardrobe",
        data: "27 Jan, 2023",
        price: "$27.00",
        status: "Completed",
    },
];

const StatisticsSR = () => {
    return (
        <div className="h-[475px] border border-[#E9E9EB] rounded-[8px]">
            <div className='flex gap-[16px] ml-[40px] mt-[32px]'>
                <p className='font-bold'>Recent Orders</p>
                <a href="#"><button className='bg-[#F6F6F6] w-[78px] h-[28px] rounded-[100px] text-[12px] hover:-translate-y-1 hover:scale-110 duration-500'>View All</button></a>
            </div>
            <table className="w-[693px] mt-[20px]">
                <thead className='border-t border-b'>
                    <tr className="text-[#5C5F6A]">
                        <th className="text-left py-3 px-[48px]">Item</th>
                        <th className="text-left py-3 px-6">Date</th>
                        <th className="text-left py-3 px-6">Total</th>
                        <th className="text-left py-3 px-6">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index} className="border-b hover:bg-gray-100 hover:-translate-y-1 hover:scale-110 duration-500">
                            <td className="text-[#5C5F6A] py-3 px-[48px]">{order.name}</td>
                            <td className="text-[#5C5F6A] py-3 px-6">{order.data}</td>
                            <td className="text-[#5C5F6A] py-3 px-6">{order.price}</td>
                            <td className="text-[#5C5F6A] py-3 px-6">{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StatisticsSR;
