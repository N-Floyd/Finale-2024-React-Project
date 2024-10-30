import { Link } from 'react-router-dom';

const Productlist = () => {

    const productlist = [

        {
            img: "/images/black1.png",
            title: "Elegant Ebony Sweatshirts",
            stock: "IN STOCK",
            price: "$35.00",
        },
        {
            img: "/images/black2.png",
            title: "Sleek and Cozy Black",
            stock: "IN STOCK",
            price: "$57.00",
        },
        {
            img: "/images/black3.png",
            title: "Raw Black Tees",
            stock: "IN STOCK",
            price: "$19.00",
        },
        {
            img: "/images/black4.png",
            title: "MOCKUP Black",
            stock: "IN STOCK",
            price: "$30.00",
        },
    ]
    return (
        <div className="mt-[152px]">
            <div>

                <div className="flex justify-center gap-[24px]">
                    <button className="w-[92px] h-[31px] font-semibold border-solid border-2 rounded-[100px] border-[#E9E9EB] text-[14px] hover:scale-110 hover:bg-gray-200 duration-500">Featured</button>
                    <button className="text-[14px] text-[#5C5F6A] hover:scale-110 duration-500">Latest</button>
                </div>

                <div className='flex justify-between max-w-[1116px] m-auto mt-[80px]'>
                    {productlist.map((productlist, index) => (
                        <div key={index}>
                            <Link to="/product">
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
                            </Link>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
};

export default Productlist;