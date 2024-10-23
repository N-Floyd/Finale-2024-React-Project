import React from 'react'

const AppliedFilters = () => {
  return (
    <div>
        <p className="font-semibold">Applied Filters:</p>
            <div className="flex gap-[12px] mt-[12px]">
                <a href='#' className="flex items-center border border-gray-400 rounded-[100px] px-[16px] py-[2px] transition hover:scale-110 hover:-translate-y-1 duration-500">
                    <div className='flex gap-[8px]'>
                        <button>Perfume</button>
                        <img src="/images/x.svg" alt="x" />
                    </div>
                </a>
                <a href='#' className="flex items-center border border-gray-400 rounded-[100px] px-[16px] py-[2px] transition hover:scale-110 hover:-translate-y-1 duration-500">
                    <div className='flex gap-[8px]'>
                        <button>Size: M</button>
                        <img src="/images/x.svg" alt="x" />
                    </div>
                </a>
            </div>
            <div className="flex justify-between mt-[24px]">
                <p className="text-[12px] text-[#5C5F6A]">Showing 1-9 of 36 results.</p>
                <a href='#' className="flex gap-[6px] w-[106px] transition hover:scale-110 hover:-translate-y-1 duration-500">
                    <p className="text-[12px] text-[#5C5F6A] mt-1">SORT BY</p>
                    <img src="/images/dropd.svg" alt="dropdownIcon" />
                </a>
            </div>
    </div>
  )
};

export default AppliedFilters;