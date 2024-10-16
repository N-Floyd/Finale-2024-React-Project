import React from 'react'

const DetalesR = () => {
    return (
        <div className='max-w-[534px]'>
            <h4 className='text-[#0E1422] font-bold'>Account Details</h4>
            <div className="bg-[#F0F1FF] w-[48px] h-[48px] relative rounded-[100px] mt-[40px]">
                <div className="text-[#4078FF] absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%]">AN</div>
            </div>
            <div className='mt-[32px]'>
                <label className='block' for="adr">Full Name</label>
                <input className='border border-1 rounded-[6px] max-w-[320px] h-[45px]' type="text" name="address"></input>
            </div>
            <div className='mt-[16px]'>
                <label className='block' for="adr">Email</label>
                <input className='border border-1 rounded-[6px] max-w-[320px] h-[45px]' type="email" name="address"></input>
            </div>
            <button className='w-[144px] h-[44px] rounded-[4px] bg-[#0E1422] text-white mt-[64px]' type="submit" value="Submit">Save Changes</button>
        </div>
    )
};

export default DetalesR;