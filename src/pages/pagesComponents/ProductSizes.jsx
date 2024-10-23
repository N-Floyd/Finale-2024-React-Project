import { useState } from "react";

const ProductSizes = () => {
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

    return (
        <div>
            <h5 className="text-[#5C5F6A] mt-5">SELECT SIZE</h5>
            <div className="flex justify-between w-[232px] h-[40px] mt-3">
                {sizes.map((size) => (
                    <div key={size}
                        className={`relative transition hover:scale-110 hover:-translate-y-1 duration-500 cursor-pointer w-[40px] h-[40px] border rounded-[4px] flex justify-center p-2 text-[#5C5F6A] text-[12px]`}
                        onClick={() => handleSizeClick(size)}>
                        {selectedSize === size && (
                            <div className="w-[45px] h-[45px] absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%] inset-0 border-2 border-[#0E1422]"></div>
                        )}
                        <div className="w-[40px] h-[40px] relative mt-[100%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%]">{size}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductSizes;
