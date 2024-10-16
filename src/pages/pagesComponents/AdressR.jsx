import React from 'react'

const AdressR = () => {
    return (
        <div className='w-[534px]'>
            <div>
                <h4 className='text-[#0E1422] font-bold'>Shipping Address</h4>
            </div>
            <div className=''>
                <label className='block mt-[40px]' for="adr">Street Address</label>
                <input className='border border-1 rounded-[6px] w-[534px] h-[45px] px-[15px]' type="text" placeholder='2436 Naples Avenue' name="address"></input>
                <div className='flex gap-[16px] mt-[15px]'>
                    <div className='h-[68px]'>
                        <label className='block' for="adr">City</label>
                        <input className='border border-1 rounded-[6px] w-[259px] h-[45px] px-[15px]' type="text" placeholder='Panama City' name="address"></input>
                    </div>
                    <div className='h-[68px]'>
                        <label className='block' for="adr">State</label>
                        <input className='border border-1 rounded-[6px] w-[259px] h-[45px] px-[15px]' type="text" placeholder='FL' name="address"></input>
                    </div>
                </div>
                <div className='flex gap-[16px] mt-[15px]'>
                    <div className='h-[68px]'>
                        <label className='block' for="adr">Zip Code</label>
                        <input className='border border-1 rounded-[6px] w-[259px] h-[45px] px-[15px]' type="number" placeholder='32405' name="address"></input>
                    </div>
                    <div className='h-[68px]'>
                        <label className='block' for="adr">Country</label>
                        <input className='border border-1 rounded-[6px] w-[259px] h-[45px] px-[15px]' type="text" placeholder='United States' name="address"></input>
                    </div>
                </div>
                <button className='w-[144px] h-[44px] rounded-[4px] bg-[#0E1422] text-white mt-[64px]' type="submit" value="Submit">Save Changes</button>
            </div>
        </div>
    )
};

export default AdressR;