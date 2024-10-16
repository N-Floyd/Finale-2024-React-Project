import React from 'react'

const StatisticsS = () => {
    return (
        <div className='flex gap-[38px] mt-[40px]'>
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
            <div className='w-[695px] h-[475px] border border-[#E9E9EB] rounded-[8px]'>
                <div className='flex gap-[16px]  px-[40px] mt-[40px]'>
                    <p className='font-bold'>Recent Orders</p>
                    <button className='bg-[#F6F6F6] w-[78px] h-[28px] rounded-[100px] text-[12px]'>View All</button>
                </div>
                <div>
                    <table className='w-full mt-[20px] '>
                        <tr className='border-t border-b h-[45px] border-[#E9E9EB]'>
                            <td className='px-[48px]'>Item</td>
                            <td>Date</td>
                            <td>Total</td>
                            <td>Status</td>
                        </tr>
                        <tr className='h-[57px] border-b-2'>
                            <td className='px-[48px]'>Mens Black T-Shirts</td>
                            <td>20 Mar, 2023</td>
                            <td>$75.00</td>
                            <td>Processing</td>
                        </tr>
                        <tr className='h-[57px] border-b-2'>
                            <td className='px-[48px]'>Essential Neutrals</td>
                            <td>19 Mar, 2023</td>
                            <td>$22.00</td>
                            <td>Processing</td>
                        </tr>
                        <tr className='h-[57px] border-b-2'>
                            <td className='px-[48px]'>Sleek and Cozy Black</td>
                            <td>7 Feb, 2023</td>
                            <td>$57.00</td>
                            <td>Completed</td>
                        </tr>
                        <tr className='h-[57px] border-b-2'>
                            <td className='px-[48px]'>MOCKUP Black</td>
                            <td>29 Jan, 2023</td>
                            <td>$30.00</td>
                            <td>Completed</td>
                        </tr>
                        <tr className='h-[57px] border-b-2'>
                            <td className='px-[48px]'>Monochromatic Wardrobe</td>
                            <td>27 Jan, 2023</td>
                            <td>$27.00</td>
                            <td>Completed</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
};

export default StatisticsS;