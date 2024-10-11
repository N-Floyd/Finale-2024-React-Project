import React from 'react'

const SimilarProducts = () => {
  return (
    <div>
        <div>
            <div className="mt-[136px] w-[1116px] mx-auto">
                <div>
                    <p className=" text-[#0E1422] text-[24px] font-bold">You might also like</p>
                    <h5 className="text-[#878A92] text-[12px] mt-1">SIMILAR PRODUCTS</h5>
                </div>
            </div>

            <div className='flex justify-between max-w-[1116px] m-auto mt-[56px]'>

                <div className=' rounded-[4px] px-[8px] py-[16px] '>
                    <img src="/images/shirt1.png" alt="shirt" />
                    <p className='text-[#0E1422] text-[14px] font-bold mt-[25px]'>Classic Monochrome Tees
                    </p>
                    <div className='flex gap-[16px] mt-[12px]'>
                        <button className='w-[89px] h-[28px] border-solid border-2 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK</button>
                        <p className='text-[#474B57] text-[14px] mt-[3px]'>$35.00
                        </p>
                    </div>
                </div>

                <div className='rounded-[4px] px-[8px] py-[16px]'>
                    <img src="/images/shirt2.png" alt="shirt" />
                    <p className='text-[#0E1422] text-[14px] font-bold mt-[25px]'>Monochromatic Wardrobe
                    </p>
                    <div className='flex gap-[16px] mt-[12px]'>
                        <button className='w-[89px] h-[28px] border-solid border-2 
                     rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK
                        </button>
                        <p className='w-[47px] h-[25px] text-[#474B57] 
                     text-[14px] mt-[3px]'>$27.00
                        </p>
                    </div>
                </div>

                <div className='rounded-[4px] px-[8px] py-[16px]'>
                    <img src="/images/shirt3.png" alt="" />
                    <p className='text-[#0E1422] text-[14px] font-bold mt-[25px]'>Essential Neutrals
                    </p>
                    <div className='flex gap-[16px] mt-[12px]'>
                        <button className='w-[89px] h-[28px] border-solid border-2 
                     rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK
                        </button>
                        <p className='w-[47px] h-[25px] text-[#474B57] 
                     text-[14px] mt-[3px]'>$22.00
                        </p>
                    </div>
                </div>

                <div className='rounded-[4px] px-[8px] py-[16px]'>
                    <img src="/images/shirt4.png" alt="" />
                    <p className='text-[#0E1422] text-[14px] font-bold mt-[25px]'>UTRAANET Black
                    </p>
                    <div className='flex gap-[16px] mt-[12px]'>
                        <button className='w-[89px] h-[28px] border-solid border-2 
                     rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK
                        </button>
                        <p className='w-[47px] h-[25px] text-[#474B57] 
                     text-[14px] mt-[3px]'>$43.00
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default SimilarProducts;