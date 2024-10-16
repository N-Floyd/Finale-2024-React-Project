import React from 'react'

const LoginAdmin = () => {
    return (
        <div className='max-w-[384px] h-[453px] border border-[#E9E9EB] rounded-[8px] m-auto'>
            <div className='flex justify-center'>
                <div className='flex gap-[12px] mt-[32px]'>
                    <img src="/images/adminlogo.png" alt="" />
                    <h1 className='text-[#0E1422] font-bold text-[20px]'>Admin</h1>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='mt-[72px]'>
                    <label className='block' for="adr">Email</label>
                    <input className='border border-1 rounded-[6px] w-[320px] h-[45px]' type="email" name="address"></input>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='mt-[15px]'>
                    <label className='block' for="adr">Password</label>
                    <input className='border border-1 rounded-[6px] w-[320px] h-[45px]' type="password" name="address"></input>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className='max-w-[318px] h-[44px] bg-[#0E1422] text-white rounded-[4px] mt-[40px]'>Login</button>
            </div>
        </div>
    )
};

export default LoginAdmin;