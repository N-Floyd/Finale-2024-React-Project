import React from 'react'

const APagination = () => {
    return (
        <div className="flex justify-end ">
            <ul className="flex justify-between w-[344px] mt-[34px]">
                <li>
                    <a href="#" className=" hover:bg-gray-100">
                        <img src="/images/left.svg" alt="" />
                    </a>
                </li>
                <li className='bg-[#F6F6F6] w-[40px] h-[32px] px-[13px]'>
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

export default APagination;