import React, { useState } from 'react';

const ProductColors = () => {
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    const colors = ['#A3BEF8', '#FFD58A', '#83B18B'];

    return (
        <div>
            <h4 className="text-[#5C5F6A] mt-[32px]">AVAILABLE COLORS</h4>
            <div className="flex justify-between w-[116px] mt-[10px]">
                {colors.map((color, index) => (
                    <div key={index}
                        className={`relative transition hover:scale-110 hover:-translate-y-1 duration-500 cursor-pointer w-[24px] h-[24px] rounded-full`}
                        onClick={() => handleColorClick(color)}>
                        {selectedColor === color && (
                            <div className="w-[32px] h-[32px] absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%] inset-0 border-2 border-[#0E1422] rounded-[100px]"></div>
                        )}
                        <div className="w-[24px] h-[24px] relative rounded-[100px]" style={{ backgroundColor: color }}></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductColors;

