import React from 'react'

const SettingsRLast = () => {
  return (
    <div className='w-[320px] mt-[64px] ml-[48px]'>
        <div>
            <label className='block'>Site Name</label>
            <input className='border border-1 rounded-[6px] w-full h-[45px]' type="text"></input>
        </div>
        <div className='mt-[16px]'>
            <label className='block'>Support Email</label>
            <input className='border border-1 rounded-[6px] w-full h-[45px]' type="email"></input>
        </div>
        <div className='mt-[16px]'>
            <label className='block'>Monthly Order Goal</label>
            <input className='border border-1 rounded-[6px] w-full h-[45px]' type="number"></input>
        </div>
        <button type='submit' className='bg-[#0E1422] w-[144px] h-[44px] mt-[74px] rounded-[4px] text-[#FFFFFF]'>Save Changes</button>
    </div>
  )
};

export default SettingsRLast;