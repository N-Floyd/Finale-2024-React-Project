import React from 'react'

const StartShopR = () => {
    return (
        <div className='mt-[135px]'>
            <div className='flex justify-center'>
                <img className='' src="/images/startshop.png" alt="" />
            </div>
            <p className='text-[#5C5F6A] mt-[24px]'>Your order history is waiting to be filled.</p>
            <div className='flex justify-center'>
                <div className="bg-[#0E1422] flex justify-center rounded-[4px] mt-[24px] w-[179px] h-[44px] gap-[6px]">
                    <button className="text-[#FFFFFF]">Start Shopping</button>
                    <img className='w-[24px]' src="/images/arrow.svg" alt="arrow icon" />
                </div>
            </div>
        </div>
    )
};

export default StartShopR;