import React from 'react'

const ListingSearch = () => {
    return (
        <div className='bg-[#F6F6F6]'>
            <div className="h-[64px] max-w-[1116px] m-auto">
                <div className="flex gap-1 pt-[18px]">
                    <a className="text-[#5C5F6A]" href='/'>Ecommerce</a>
                    <img className="w-[24px] h-[24px] " src="/images/rightarrow.svg" alt="" />
                    <a className="font-semibold text-[#0E1422]" href='/listing'>Search</a>
                </div>
            </div>

        </div>
    )
};

export default ListingSearch;