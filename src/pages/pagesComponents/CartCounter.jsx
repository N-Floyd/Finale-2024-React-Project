import React, { useState } from 'react'

const CartCounter = () => {
    const [count, setCount] = useState(1);

    const plus = () => {
        setCount(count + 1);
    };
    const minus = () => {
        setCount(count - 1);
    };
    return (


    <div className="flex justify-between items-center w-[107px] h-[40px] pr-[16px] pl-[16px] border-solid border-2 rounded-[4px] border-[#E6E7E8]">
        <button onClick={minus} className="text-[#5C5F6A]">
            <img className="w-[16px] h-[16px]" src="/images/minus.svg" alt="remove icon" />
        </button>
        <p className="text-[14px]">{count}</p>
        <button onClick={plus} className="text-[#5C5F6A]">
            <img className="w-[16px] h-[16px]" src="/images/plus.svg" alt="add icon" />
        </button>
    </div>
    )
};

export default CartCounter;