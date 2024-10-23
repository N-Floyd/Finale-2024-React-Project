import React, { useState } from 'react';

const ListingColor = () => {
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    const colors = ['#A3BEF8', '#FFD58A', '#83B18B', '#4078FF'];

    return (
        <div className="mt-[40px] h-[76px]">
            <h4 className="text-[#0E1422] font-semibold">Color</h4>
            <div className="flex justify-start gap-[10px] mt-[12px]">
                {colors.map((color) => (
                    <div key={color} className="relative transition hover:scale-110 hover:-translate-y-1 duration-500 cursor-pointer w-[24px] h-[24px] rounded-full"
                        onClick={() => handleColorClick(color)}> {selectedColor === color && (
                            <div className="w-[32px] h-[32px] absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%] inset-0 border-2 border-[#0E1422] rounded-full"></div>)}
                        <div
                            className="w-[24px] h-[24px] relative rounded-full" style={{ backgroundColor: color }}>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListingColor;

