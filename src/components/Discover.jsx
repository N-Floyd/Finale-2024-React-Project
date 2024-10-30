import React from 'react'
import { Link } from 'react-router-dom';

const Discover = () => {
    return (
        <div className="relative h-[440px] bg-[#F6F6F6] ">
            <div className="flex justify-between items-center max-w-[1116px] m-auto">
                <div>
                    <h1 className=" text-[#202533] text-[32px] font-bold">Fresh Arrivals Online
                    </h1>

                    <p className="mt-[12px] text-[#474B57] text-[14px]">Discover Our Newest Collection Today.
                    </p>

                    <Link to="/aproducts" className='h-[44px] w-[183px] mt-[48px] flex justify-center rounded-[4px] bg-[#0E1422] gap-[6px] hover:scale-110 duration-500'>
                        <button className=' text-white'>View Collection</button>
                        <img className='w-[24px]' src="/images/arrow.svg" alt="arrow icon" />
                    </Link>

                </div>

                <div className='relative w-[340px] h-[385px]'>
                    <img className='absolute w-[38px] h-[38px] mt-[92.32px]' src="/images/star.png" alt="star" />
                    <img className='absolute w-[340px] h-[340px] mt-[89px]' src="/images/circle.png" alt="circle" />
                    <img className='absolute w-[255px] h-[382px] mt-[66px] ml-[89px]' src="/images/dude.png" alt="boy" />
                </div>
            </div>
        </div>
    )
}

export default Discover;