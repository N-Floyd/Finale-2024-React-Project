import React from 'react'

const LoginEm = () => {
    return (
        <div className='max-w-[1116px] flex justify-center mx-auto'>
            <div className='mt-[123px]'>
            <div className='flex justify-center pt-2 gap-[8px] border border-1 border-[#B6B7BC] w-[320px] h-[44px] rounded-[4px]'>
                <img className='w-[24px] h-[24px]' src="/images/google.svg" alt="google icon" />
                <p className='text-[#5C5F6A]'>Continue with Google</p>
            </div>
            <div className='flex items-center gap-[16px] mt-[32px]'>
                <hr className='w-[136px]' />
                <p className='text-[#5C5F6A]'>OR</p>
                <hr className='w-[136px]' />
            </div>
            <div className='mt-[34px]'>
                <label className='block' for="adr">Email</label>
                <input className='border border-1 rounded-[6px] w-[320px] h-[45px]' type="email" name="address"></input>
            </div>
            <div className='mt-[15px]'>
                <label className='block' for="adr">Password</label>
                <input className='border border-1 rounded-[6px] w-[320px] h-[45px]' type="password" name="address"></input>
            </div>
            <div className='flex justify-end mt-[16px]'>
            <p className='text-[#474B57] font-semibold'>Forgot Password?</p>
            </div>
            <button className='w-[318px] h-[44px] bg-[#0E1422] text-white rounded-[4px] mt-[24px]'>Login</button>
            <div className='flex justify-center mt-[24px]'>
            <a className='text-[#5C5F6A]' href='/signup'>Don't have an account? Sign up</a>
            </div>
        </div>
        </div>
    )
};

export default LoginEm;