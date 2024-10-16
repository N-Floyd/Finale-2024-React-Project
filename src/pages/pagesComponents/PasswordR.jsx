import React from 'react'

const PasswordR = () => {
    return (
        <div className='w-[534px]'>
            <h4 className='text-[#0E1422] font-bold'>Change Password</h4>
            <div className='mt-[48px]'>
                <label className='block' for="adr">New Password</label>
                <input className='border border-1 rounded-[6px] w-[320px] h-[45px]' type="password" name="address"></input>
            </div>
            <div className='mt-[16px]'>
                <label className='block' for="adr">Confirm Password</label>
                <input className='border border-1 rounded-[6px] w-[320px] h-[45px]' type="password" name="address"></input>
            </div>
            <button className='w-[169px] h-[44px] rounded-[4px] bg-[#0E1422] text-white mt-[64px]' type="submit" value="Submit">Change password</button>
        </div>
    )
};

export default PasswordR;