import React from 'react'

const BoxFaild = () => {
  return (
    <div className='h-[703px] py-[160px]'>
            <div className='flex justify-center '>
                <img className='' src="/images/aftfailed.svg" alt="failed box" />
            </div>
            <div className='flex justify-center'>
                <h2 className='text-[#0E1422] font-bold mt-[21px] text-[24px]'>Oops! There was an issue</h2>
            </div>
            <div className='flex justify-center mt-[16px]'>
                <p className='text-[#5C5F6A] max-w-[356px]'>Oops! There was a problem processing your order. Please review the details and try again.</p>
            </div>
            <div className='flex justify-center mt-[48px]'>
                <div>
                    <div className="bg-[#0E1422] flex justify-center rounded-[4px] w-[132px] h-[44px] gap-[6px]">
                        <button className="text-[#FFFFFF]">Reorder</button>
                        <img className='w-[24px]' src="/images/arrow.svg" alt="arrow icon" />
                    </div>
                </div>
            </div>
        </div>
  )
};

export default BoxFaild;