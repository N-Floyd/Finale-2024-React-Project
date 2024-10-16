import React from 'react'

const ResetNewPass = () => {
  return (
    <div className='w-[1116px] flex justify-center mx-auto'>
        <div className='mt-[128px]'>
        <div className=''>
            <label className='block' for="adr">New password</label>
            <input className='border border-1 rounded-[6px] max-w-[320px] h-[45px]' type="password" name="address"></input>
        </div>
        <div className='mt-[16px]'>
            <label className='block' for="adr">Confirm password</label>
            <input className='border border-1 rounded-[6px] w-[320px] h-[45px]' type="password" name="address"></input>
        </div>
        <button className='max-w-[318px] h-[44px] bg-[#0E1422] text-white rounded-[4px] mt-[40px]'>Reset password</button>
    </div>
    </div>
  )
};

export default ResetNewPass;