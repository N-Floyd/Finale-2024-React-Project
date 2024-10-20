import React from 'react'

const AppliedFilters = () => {
  return (
    <div>
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
    </div>
  )
};

export default AppliedFilters;