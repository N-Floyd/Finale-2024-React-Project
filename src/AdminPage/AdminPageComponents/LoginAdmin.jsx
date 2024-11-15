import React from 'react';

const LoginAdmin = () => {
    return (
        <div className="max-w-[384px] h-[453px] border border-[#E9E9EB] rounded-[8px] m-auto mt-7">
            <div className="flex justify-center">
                <div className="flex gap-[12px] mt-[32px]">
                    <img src="/images/adminlogo.png" alt="" />
                    <h1 className="text-[#0E1422] font-bold text-[20px]">Admin</h1>
                </div>
            </div>

            <div className="mt-[72px] px-[32px]">
                <div className="mt-[15px]">
                    <label className="block">Email</label>
                    <input className="border border-1 rounded-[6px] w-[320px] h-[45px]" type="email" />
                </div>

                <div className="mt-[15px]">
                    <label className="block">Password</label>
                    <input className="border border-1 rounded-[6px] w-[320px] h-[45px]" type="password" />
                </div>
            </div>

            <div className="flex justify-center">
                <a href="#">
                    <button className="w-[318px] h-[44px] bg-[#0E1422] text-white rounded-[4px] mt-[40px] hover:-translate-y-1 hover:scale-110 duration-500">Login</button>
                </a>
            </div>
        </div>
    );
};

export default LoginAdmin;
