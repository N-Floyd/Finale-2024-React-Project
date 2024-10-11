const Productlist = () => {
    return (
        <div className="mt-[152px]">
            <div>

                <div className="flex justify-center gap-[24px]">
                    <button className="w-[92px] h-[31px] font-semibold border-solid border-2 rounded-[100px] border-[#E9E9EB] text-[14px]">Featured</button>
                    <button className="text-[14px] text-[#5C5F6A]">Latest</button>
                </div>

                <div className='flex justify-between max-w-[1116px] m-auto mt-[80px]'>
                <div className=' rounded-[4px] px-[8px] py-[16px] '>
                    <img src="/images/black1.png" alt="shirt" />
                    <p className='text-[#0E1422] text-[14px] font-bold mt-[25px]'>Elegant Ebony Sweatshirts
                    </p>
                    <div className='flex gap-[16px] mt-[12px]'>
                        <button className='w-[89px] h-[28px] border-solid border-2 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK</button>
                        <p className='text-[#474B57] text-[14px] mt-[3px]'>$35.00
                        </p>
                    </div>
                </div>

                <div className='rounded-[4px] px-[8px] py-[16px]'>
                    <img src="/images/black2.png" alt="shirt" />
                    <p className='text-[#0E1422] text-[14px] font-bold mt-[25px]'>Sleek and Cozy Black
                    </p>
                    <div className='flex gap-[16px] mt-[12px]'>
                        <button className='w-[89px] h-[28px] border-solid border-2 
                     rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK
                        </button>
                        <p className='w-[47px] h-[25px] text-[#474B57] 
                     text-[14px] mt-[3px]'>$57.00
                        </p>
                    </div>
                </div>

                <div className='rounded-[4px] px-[8px] py-[16px]'>
                    <img src="/images/black3.png" alt="" />
                    <p className='text-[#0E1422] text-[14px] font-bold mt-[25px]'>Raw Black Tees
                    </p>
                    <div className='flex gap-[16px] mt-[12px]'>
                        <button className='w-[89px] h-[28px] border-solid border-2 
                     rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK
                        </button>
                        <p className='w-[47px] h-[25px] text-[#474B57] 
                     text-[14px] mt-[3px]'>$19.00
                        </p>
                    </div>
                </div>

                <div className='rounded-[4px] px-[8px] py-[16px]'>
                    <img src="/images/black4.png" alt="" />
                    <p className='text-[#0E1422] text-[14px] font-bold mt-[25px]'>MOCKUP Black
                    </p>
                    <div className='flex gap-[16px] mt-[12px]'>
                        <button className='w-[89px] h-[28px] border-solid border-2 
                     rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK
                        </button>
                        <p className='w-[47px] h-[25px] text-[#474B57] 
                     text-[14px] mt-[3px]'>$30.00
                        </p>
                    </div>
                </div>
                </div>

            </div>

        </div>
    )
};

export default Productlist;