import React, { useState } from 'react'

const ProductCounter = () => {
    const [count, setCount] = useState(1);

    const plus = () => {
        setCount(count + 1);
    };
    const minus = () => {

        if (count === 1) {
            return null
        }

        setCount(count - 1);
    };
    return (
        <div className="w-[164px] h-[78px] mt-[32px]">
            <h3 className="text-[#5C5F6A]">QUANTITY</h3>
            <div className="flex justify-between items-center mt-3 w-[164px] h-[44px] pr-[16px] pl-[16px] border-solid border-2 rounded-[4px] border-[#E6E7E8]">
                <button onClick={minus} className="text-[#5C5F6A]">
                    <img className="w-[20px] h-[20px]" src="/images/minus.svg" alt="remove icon" />
                </button>
                <p className="text-[24px]">{count}</p>
                <button onClick={plus} className="text-[#5C5F6A]">
                    <img className="w-[20px] h-[20px]" src="/images/plus.svg" alt="add icon" />
                </button>
            </div>
        </div>
    )
};

export default ProductCounter;