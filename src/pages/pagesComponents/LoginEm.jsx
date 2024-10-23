import React from 'react'

const inputs = [
    {label: 'Email', type: 'email'},
    {label: 'Password', type: 'password'},
];

const LoginEm = () => {
    return (
        <div className='max-w-[1116px] flex justify-center mx-auto'>
            <div className='mt-[123px] mb-[148px]'>
            <a href='#' className='flex justify-center pt-2 gap-[8px] border border-1 border-[#B6B7BC] w-[320px] h-[44px] rounded-[4px] transition hover:scale-110 hover:-translate-y-1 duration-500'>
                <img className='w-[24px] h-[24px]' src="/images/google.svg" alt="google icon" />
                <p className='text-[#5C5F6A]'>Continue with Google</p>
            </a>
            <div className='flex items-center gap-[16px] mt-[32px]'>
                <hr className='w-[136px]' />
                <p className='text-[#5C5F6A]'>OR</p>
                <hr className='w-[136px]' />
            </div>
            {inputs.map((login, index) => (
                <div key={index}>
                    <div className='mt-[32px]'>
                      <label className='block'>{login.label}</label>
                      <input className='border border-1 rounded-[6px] w-[320px] h-[45px]' type={login.type}></input>
                    </div>
                </div>
            ))}
            
            <a href='forgotp' className='flex justify-end mt-[16px] hover:scale-110 hover:-translate-y-1 duration-500'>
               <p className='text-[#474B57] font-semibold'>Forgot Password?</p>
            </a>
            <a href="#"><button className='w-[318px] h-[44px] bg-[#0E1422] text-white rounded-[4px] mt-[24px] transition hover:scale-110 hover:-translate-y-1 duration-500'>Login</button></a>
            <a href='signup' className='flex justify-center mt-[24px] hover:scale-110 hover:-translate-y-1 duration-500'>
               <a className='text-[#5C5F6A]' href='/signup'>Don't have an account? Sign up</a>
            </a>
        </div>
        </div>
    )
};

export default LoginEm;