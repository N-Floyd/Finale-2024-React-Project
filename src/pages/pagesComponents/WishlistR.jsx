import React from 'react'

const orders = [
    {
        img: "/images/ordersshirt1.png",
        alt: "black shirt",
        title: "Raw Black T-Shirt Lineup",
        date: "Added on: 27 July 2023",
        price: "$75.00",
        item: "Remove item"

    },
    {
        img: "/images/ordersshirt3.png",
        alt: "white shirt",
        title: "Essential Neutrals",
        date: "Added on: 27 July 2023",
        price: "$22.00",
        item: "Remove item"
    },
];
const WishlistR = () => {
    return (
        <div className='max-w-[617px]'>
            <div>
                <h4 className='text-[#0E1422] font-bold'>Wishlist</h4>
            </div>
            {orders.map((wishlist, index) => (
                <div key={index}>
                    <div className='flex gap-[134px] mt-[56px]'>
                        <div className='flex gap-[32px]'>
                            <img className='rounded-[4px] w-[80px] h-[80px] hover:scale-110 hover:-translate-y-1 duration-500' src={wishlist.img} alt={wishlist.alt} />
                            <div className='mt-[5px]'>
                                <p className='text-[#0E1422] font-semibold text-[14px]'>{wishlist.title}</p>
                                <p className='text-[#5C5F6A] text-[12px]'>{wishlist.date}</p>
                                <p className='font-semibold text-[12px]'>{wishlist.item}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-[32px]'>
                            <p className='font-semibold text-[14px]'>{wishlist.price}</p>
                            <a href="#"><button className='border-2 h-[44px] w-[124px] rounded-[4px] font-medium hover:scale-110 hover:-translate-y-1 duration-500'>Add to cart</button></a>
                        </div>
                    </div>

                    {index < orders.length - 1 && <hr className='mt-[32px]' />}
                </div>
            ))}

        </div>
    )
};

export default WishlistR;