import React from 'react'

const StatisticSL = () => {
    return (
        <div className='w-[328px] h-[475px] border border-[#E9E9EB] rounded-[8px]'>
            <div className='mt-[32px] px-[32px]'>
                <p className='font-semibold'>Best Selling</p>
                <p className=' text-[#5C5F6A] text-[12px] mt-[6px]'>THIS MONTH</p>
            </div>
            <hr className='mt-[24px]'></hr>
            <div className='flex gap-[8px] items-center mt-[32px] px-[32px]'>
                <p className='text-[24px] font-bold'>$2,400</p>
                <p className='text-[#5C5F6A]'>—</p>
                <p className=' text-[#5C5F6A]'>Total Sales</p>
            </div>
            <div className='px-[32px]'>
                <div className='flex items-center h-[28px] w-[270px] rounded-[100px] border-2 gap-[8px] mt-[26px]'>
                    <p className='text-[12px]'>Classic Monochrome Tees</p>
                    <p className='text-[12px]'>—</p>
                    <p className='text-[12px] font-semibold'>$940 Sales</p>
                </div>
                <div className='flex items-center h-[28px] w-[270px] rounded-[100px] border-2 gap-[8px] mt-[12px]'>
                    <p className='text-[12px]'>Monochromatic Wardrobe</p>
                    <p className='text-[12px]'>—</p>
                    <p className='text-[12px] font-semibold'>$790 Sales</p>
                </div>
                <div className='flex items-center h-[28px] w-[270px] rounded-[100px] border-2 gap-[8px] mt-[12px]'>
                    <p className='text-[12px]'>Essential Neutrals</p>
                    <p className='text-[12px]'>—</p>
                    <p className='text-[12px] font-semibold'>$740 Sales</p>
                </div>
                <img className='mt-[32px] w-[96px] h-[96px]' src="/images/dashbord3.png" alt="" />
            </div>
        </div>
    )
};

export default StatisticSL;