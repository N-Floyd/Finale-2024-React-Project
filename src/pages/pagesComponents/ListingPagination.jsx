import React from 'react'

const ListingPagination = () => {
  return (
    <div className="flex justify-center">
    <ul className="flex justify-between items-center w-[344px] mt-[64px] border-2 px-[8px] py-[4px]">
        <li>
            <a href="#" className=" hover:bg-gray-100">
                <img src="/images/left.svg" alt="" />
            </a>
        </li>
        <li className='bg-[#F6F6F6] w-[40px] h-[32px] px-[15px]'>
            <a href="#" className="  hover:bg-gray-100">1</a>
        </li>
        <li className='w-[40px] h-[32px] px-[13px]'>
            <a href="#" className=" hover:bg-gray-100">2</a>
        </li>
        <li className='w-[40px] h-[32px] px-[13px]'>
            <span>...</span>
        </li>
        <li className='w-[40px] h-[32px] px-[13px]'>
            <a href="#" className=" hover:bg-gray-100">23</a>
        </li>
        <li className='w-[40px] h-[32px] px-[13px]'>
            <a href="#" className=" hover:bg-gray-100">24</a>
        </li>
        <li>
            <a href="#" className=" hover:bg-gray-100">
                <img src="/images/right.svg" alt="" />
            </a>
        </li>
    </ul>
</div>
  )
};

export default ListingPagination;