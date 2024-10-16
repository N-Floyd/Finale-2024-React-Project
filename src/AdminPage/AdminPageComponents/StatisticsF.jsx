import React from 'react'

const StatisticsF = () => {
    return (
        <div className='flex justify-between h-[187px] mt-[56px] gap-[38px]'>
            <div className='max-w-[328px] h-full border border-[#E9E9EB] rounded-[8px] py-[24px] px-[27px]'>
                <div className='flex gap-[100px]'>
                    <div className=''>
                        <p className='font-semibold'>Total Sales</p>
                        <p className=' text-[#5C5F6A] text-[12px] mt-[6px]'>THIS MONTH</p>
                    </div>
                    <p className='text-[24px] font-bold'>$ 4,235</p>
                </div>
                <img className='w-[274px] h-[46px] mt-[44px]' src="/images/dashbord1.png" alt="" />
            </div>
            <div className='max-w-[328px] h-full border border-[#E9E9EB] rounded-[8px] py-[24px] px-[27px]'>
                <div className='flex gap-[126px]'>
                    <div>
                        <p className='font-semibold'>Customers</p>
                        <p className=' text-[#5C5F6A] text-[12px] mt-[6px]'>THIS MONTH</p>
                    </div>
                    <p className='text-[24px] font-bold'>2,571</p>
                </div>
                <img className='w-[274px] h-[46px] mt-[44px]' src="/images/dashbord2.png" alt="" />
            </div>
            <div className='max-w-[328px] h-full border border-[#E9E9EB] rounded-[8px] py-[24px] px-[27px]'>
                <div className='flex gap-[68px]'>
                    <div>
                        <p className='font-semibold'>Orders</p>
                        <p className=' text-[#5C5F6A] text-[12px] w-[158px] mt-[6px]'>Monthly GOALS : 1,000</p>
                    </div>
                    <p className='text-[24px] font-bold'>734</p>
                </div>
                <h6 className="text-[#5C5F6A] mt-[58px] text-[12px]">266 Left</h6>
                <input className="w-[272px]" type="range" id="vol" name="vol" min="0" max="1000"></input>
            </div>
        </div>
    )
};

export default StatisticsF;