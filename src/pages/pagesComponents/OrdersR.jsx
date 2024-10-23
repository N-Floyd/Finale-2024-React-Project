import React from 'react'

const orders = [
    {
        img: "/images/ordersshirt1.png",
        alt: "black shirt",
        title: "Raw Black T-Shirt Lineup",
        date: "Ordered on: 27 July 2023",
        price: "$70.00",
        status: "Processing"
    },
    {
        img: "/images/ordersshirt2.png",
        alt: "brown shirt",
        title: "Monochromatic Wardrobe",
        date: "Ordered on: 9 March 2023",
        price: "$27.00",
        status: "Completed"
    }
];


const OrdersR = () => {
    return (
        <div className='max-w-[617px]'>
            <div>
                <h4 className='text-[#0E1422] font-bold'>Orders</h4>
            </div>
            {orders.map((order, index) => (
                <div key={index}>
                    <div className='flex gap-[116px] mt-[32px]'>
                        <div className='flex gap-[32px]'>
                            <img className='rounded-[4px] w-[80px] h-[80px] hover:scale-110 hover:-translate-y-1 duration-500' src={order.img} alt={order.alt} />
                            <div className='mt-[5px]'>
                                <p className='text-[#0E1422] font-semibold text-[14px]'>{order.title}</p>
                                <p className='text-[#5C5F6A] text-[12px]'>{order.date}</p>
                                <p className='font-semibold text-[12px]'>{order.price}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-[32px]'>
                            <div className='border-b border-[#0E1422] h-[25px] font-medium hover:scale-110 hover:-translate-y-1 duration-500'>{order.status}</div>
                            <a href="#"><button className='border-2 h-[44px] w-[114px] rounded-[4px] font-medium hover:scale-110 hover:-translate-y-1 duration-500'>View item</button></a>
                        </div>
                    </div>
                    {index < orders.length - 1 && <hr className='mt-[32px]' />}
                </div>
            ))}
        </div>
    )
};

export default OrdersR;