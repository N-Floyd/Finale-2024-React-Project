import React from 'react'

const FilterGrid = () => {
    const productlist = [
        {
            img: "/images/ltshirt1.png",
            title: "Classic Monochrome Tees",
            stock: "IN STOCK",
            price: "$35.00",
        },
        {
            img: "/images/ltshirt2.png",
            title: "UTRAANET Black",
            stock: "IN STOCK",
            price: "$43.00",
        },
        {
            img: "/images/ltshirt3.png",
            title: "Raw Black Tees",
            stock: "IN STOCK",
            price: "$19.00",
        },
        {
            img: "/images/ltshirt4.png",
            title: "Monochromatic Wardrobe",
            stock: "IN STOCK",
            price: "$27.00",
        },
        {
            img: "/images/ltshirt5.png",
            title: "Elegant Ebony Sweatshirts",
            stock: "IN STOCK",
            price: "$35.00",
        },
        {
            img: "/images/ltshirt6.png",
            title: "MOCKUP Black",
            stock: "IN STOCK",
            price: "$30.00",
        },
        {
            img: "/images/ltshirt7.png",
            title: "Essential Neutrals",
            stock: "IN STOCK",
            price: "$22.00",
        },
        {
            img: "/images/ltshirt8.png",
            title: "Sleek and Cozy Black",
            stock: "IN STOCK",
            price: "$57.00",
        },
        {
            img: "/images/ltshirt9.png",
            title: "Athletic Shirt",
            stock: "IN STOCK",
            price: "$35.00",
        },
    ]
    return (
        <div class="grid grid-rows-3 grid-flow-col gap-[24px] max-w-[1116px] mt-[16px]">
            {productlist.map((productlist, index) => (
                <div key={index}>
                    <div className="w-60 h-80 bg-neutral-100 rounded cursor-pointer transition hover:scale-110 duration-500">
                        <img src={productlist.img} />
                    </div>
                    <div>
                        <p className="font-medium text-sm mt-3">
                            {productlist.title}
                        </p>
                        <div className="flex items-center mt-2">
                            <button className="bg-white text-center w-20 h-7 rounded-full border text-xs font-medium mt-3 items-center">
                                {productlist.stock}
                            </button>
                            <div className="mt-3 ml-2 font-normal text-sm text-center">{productlist.price}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default FilterGrid;