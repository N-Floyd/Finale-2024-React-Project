import React from 'react';

const PasswordR = () => {
    return (
        <div className="max-w-[534px]">
            <h4 className="text-[#0E1422] font-bold">Change Password</h4>

            <div className="mt-[48px]">
                <div className="mt-[16px]">
                    <label className="block">New Password</label>
                    <input className="border border-1 rounded-[6px] w-[320px] h-[45px]" type="password" />
                </div>

                <div className="mt-[16px]">
                    <label className="block">Confirm Password</label>
                    <input className="border border-1 rounded-[6px] w-[320px] h-[45px]" type="password" />
                </div>
            </div>

            <a href="#">
                <button className="w-[169px] h-[44px] rounded-[4px] bg-[#0E1422] text-white mt-[64px] hover:scale-110 hover:-translate-y-1 duration-500" type="submit" value="Submit">Change password</button>
            </a>
        </div>
    );
};

export default PasswordR;
