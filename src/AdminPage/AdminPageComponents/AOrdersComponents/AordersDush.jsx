import React from 'react'

const AordersDush = () => {
    return (
        <div className='flex justify-between pt-[22px]'>
            <div className="flex gap-[4px]">
                <a className="text-[#5C5F6A]" href='/'>Admin</a>
                <img className="w-[24px] h-[24px] " src="/images/rightarrow.svg" alt="" />
                <a className="font-semibold text-[#0E1422]" href='/aorders'>Dashboard</a>
            </div>
            <a className='hover:scale-110 duration-500' href="#"><img src="/images/orders6.svg" alt="logout icon" /></a>
        </div>
    )
};

export default AordersDush;