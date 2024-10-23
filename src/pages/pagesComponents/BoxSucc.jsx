import React from 'react'

const BoxSucc = () => {
    return (
        <div className='h-[703px] py-[160px]'>
            <div className='flex justify-center '>
                <img className='' src="/images/aftsucces.svg" alt="succsses box" />
            </div>
            <div className='flex justify-center'>
                <h2 className='text-[#0E1422] font-bold mt-[21px] text-[24px]'>Thank you for shopping</h2>
            </div>
            <div className='flex justify-center mt-[16px]'>
                <p className='text-[#5C5F6A] max-w-[379px]'>Your order has been successfully placed and is now being processed.</p>
            </div>
            <div className='flex justify-center mt-[48px]'>
                <div>
                    <a href='#' className="bg-[#0E1422] flex justify-center rounded-[4px] w-[196px] h-[44px] gap-[6px] hover:scale-110 duration-500">
                        <button className="text-[#FFFFFF]">Go to my account</button>
                        <img className='w-[24px]' src="/images/arrow.svg" alt="arrow icon" />
                    </a>
                </div>
            </div>
        </div>
    )
};

export default BoxSucc;