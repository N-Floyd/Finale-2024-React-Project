import React from 'react'

const AfterpaymentOrderF = () => {
  return (
    <div className='bg-[#FBD9D0]'>
        <div className="h-[160px] max-w-[1116px] m-auto">
            <h1 className='text-[24px] text-[#0E1422] font-bold pt-[49px]'>Failed Order</h1>
            <div className="flex gap-[4px] pt-[8px]">
                <a className="text-[#5C5F6A]" href='/'>Ecommerce</a>
                <img className="w-[24px] h-[24px] " src="/images/rightarrow.svg" alt="" />
                <a className="font-semibold text-[#0E1422]" href='/AfterpaymentF'>Failed Order</a>
            </div>
        </div>
    </div>
  )
};

export default AfterpaymentOrderF;