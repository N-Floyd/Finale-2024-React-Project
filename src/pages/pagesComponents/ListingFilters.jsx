import React from 'react'

const ListingFilters = () => {
    return (
        <div className="mt-2">
            <p className="font-semibold">Applied Filters:</p>
            <div className="flex gap-[12px] mt-[12px]">
                <div className="flex items-center border border-gray-400 rounded-[100px] px-[16px] py-[2px]">
                    <div className='flex gap-[8px]'>
                        <button>Perfume</button>
                        <img src="/images/x.svg" alt="x" />
                    </div>
                </div>
                <div className="flex items-center border border-gray-400 rounded-[100px] px-[16px] py-[2px]">
                    <div className='flex gap-[8px]'>
                        <button>Size: M</button>
                        <img src="/images/x.svg" alt="x" />
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-[24px]">
                <p className="text-[12px] text-[#5C5F6A]">Showing 1-9 of 36 results.</p>
                <div className="flex gap-[6px] w-[106px]">
                    <p className="text-[12px] text-[#5C5F6A] mt-1">SORT BY</p>
                    <img src="/images/dropd.svg" alt="dropdownIcon" />
                </div>
            </div>
            <div class="grid grid-rows-3 grid-flow-col gap-4 max-w-[1116px] mx-auto mt-[16px]">
                <div className="px-[8px] py-[16px]">
                    <img src="/images/ltshirt1.png" alt="shirt" />
                    <p className='text-[#0E1422] text-[14px] mt-[25px] font-semibold'>Classic Monochrome Tees</p>
                    <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                        <button className='w-[89px] h-[28px] border-solid border-2 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK</button>
                        <p className='text-[#474B57] text-[14px] mt-[3px]'>$35.00</p>
                    </div>
                </div>
                <div className="px-[8px] py-[16px]">
                    <img src="/images/ltshirt2.png" alt="shirt" />
                    <p className='text-[#0E1422] text-[14px] mt-[25px] font-semibold'>UTRAANET Black</p>
                    <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                        <button className='w-[89px] h-[28px] border-solid border-2 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK</button>
                        <p className='text-[#474B57] text-[14px] mt-[3px]'>$43.00</p>
                    </div>
                </div>
                <div className="px-[8px] py-[16px]">
                    <img src="/images/ltshirt3.png" alt="" />
                    <p className='text-[#0E1422] text-[14px] mt-[25px] font-semibold'>Raw Black Tees</p>
                    <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                        <button className='w-[89px] h-[28px] border-solid border-2 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK</button>
                        <p className='text-[#474B57] text-[14px] mt-[3px]'>$19.00</p>
                    </div>
                </div>
                <div className="px-[8px] py-[16px]">
                    <img src="/images/ltshirt4.png" alt="" />
                    <p className='text-[#0E1422] text-[14px] mt-[25px] font-semibold'>Monochromatic Wardrobe</p>
                    <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                        <button className='w-[89px] h-[28px] border-solid border-2 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK</button>
                        <p className='text-[#474B57] text-[14px] mt-[3px]'>$27.00</p>
                    </div>
                </div>
                <div className="px-[8px] py-[16px]">
                    <img src="/images/ltshirt5.png" alt="" />
                    <p className='text-[#0E1422] text-[14px] mt-[25px] font-semibold'>Elegant Ebony Sweatshirts</p>
                    <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                        <button className='w-[89px] h-[28px] border-solid border-2 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK</button>
                        <p className='text-[#474B57] text-[14px] mt-[3px]'>$35.00</p>
                    </div>
                </div>
                <div className="px-[8px] py-[16px]">
                    <img src="/images/ltshirt6.png" alt="" />
                    <p className='text-[#0E1422] text-[14px] mt-[25px] font-semibold'>MOCKUP Black</p>
                    <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                        <button className='w-[89px] h-[28px] border-solid border-2 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK</button>
                        <p className='text-[#474B57] text-[14px] mt-[3px]'>$30.00</p>
                    </div>
                </div>
                <div className="px-[8px] py-[16px]">
                    <img src="/images/ltshirt7.png" alt="" />
                    <p className='text-[#0E1422] text-[14px] mt-[25px] font-semibold'>Essential Neutrals</p>
                    <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                        <button className='w-[89px] h-[28px] border-solid border-2 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK</button>
                        <p className='text-[#474B57] text-[14px] mt-[3px]'>$22.00</p>
                    </div>
                </div>
                <div className="px-[8px] py-[16px]">
                    <img src="/images/ltshirt8.png" alt="" />
                    <p className='text-[#0E1422] text-[14px] mt-[25px] font-semibold'>Sleek and Cozy Black</p>
                    <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                        <button className='w-[89px] h-[28px] border-solid border-2 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK</button>
                        <p className='text-[#474B57] text-[14px] mt-[3px]'>$57.00</p>
                    </div>
                </div>
                <div className="px-[8px] py-[16px]">
                    <img src="/images/ltshirt9.png" alt="" />
                    <p className='text-[#0E1422] text-[14px] mt-[25px] font-semibold'>Athletic Shirt</p>
                    <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                        <button className='w-[89px] h-[28px] border-solid border-2 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK</button>
                        <p className='text-[#474B57] text-[14px] mt-[3px]'>$35.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ListingFilters;