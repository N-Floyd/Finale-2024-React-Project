import React from 'react'

const ForgotpassEM = () => {
  return (
    <div className='max-w-[1116px] flex justify-center mx-auto'>
        <div className='mt-[144px]'>
        <p className='max-w-[320px] text-[14px]'>Please enter the email address associated with your account. 
            We'll promptly send you a link to reset your password.
        </p>
        <div className='mt-[24px]'>
            <label className='block' for="adr">Email</label>
            <input className='border border-1 rounded-[6px] w-[320px] h-[45px]' type="email" name="address"></input>
        </div>
        <button className='max-w-[318px] h-[44px] bg-[#0E1422] text-white rounded-[4px] mt-[24px]'>Send reset link</button>
        </div>
    </div>
  )
};

export default ForgotpassEM;