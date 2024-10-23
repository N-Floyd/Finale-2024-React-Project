import React from 'react'

const inputs = [
    { label: 'Street Address', type: 'text', placeholder: '2436 Naples Avenue' },
    { label: 'City', type: 'text', placeholder: 'Panama City' },
    { label: 'State', type: 'text', placeholder: 'FL' },
    { label: 'Zip Code', type: 'text', placeholder: '32405' },
    { label: 'Country', type: 'text', placeholder: 'United States' },
];

const AdressR = () => {
    return (
        <div className='max-w-[534px]'>
            <h4 className='text-[#0E1422] font-bold'>Shipping Address</h4>
            <div>
                <label className='block mt-[40px]' for="adr">Street Address</label>
                <input className='border border-1 rounded-[6px] w-[534px] h-[45px] px-[15px]' type="text" placeholder='2436 Naples Avenue'></input>
            </div>
            <div className='flex gap-[16px] mt-[15px]'>
                {inputs.slice(1, 3).map((input) => (
                    <div key={input.name} className='h-[69px]'>
                        <label className='block'>{input.label}</label>
                        <input className='border border-1 rounded-[6px] w-[259px] h-[45px] px-[15px]' placeholder={input.placeholder} type={input.type} />
                    </div>
                ))}
            </div>
            <div className='flex gap-[16px] mt-[15px]'>
                {inputs.slice(3, 5).map((input) => (
                    <div key={input.name} className='h-[69px]'>
                        <label className='block'>{input.label}</label>
                        <input className='border border-1 rounded-[6px] w-[259px] h-[45px] px-[15px]' placeholder={input.placeholder} type={input.type} />
                    </div>
                ))}
            </div>
            <a href="#"><button className='w-[144px] h-[44px] rounded-[4px] bg-[#0E1422] text-white mt-[64px] hover:scale-110 hover:-translate-y-1 duration-500' type="submit" value="Submit">Save Changes</button></a>
        </div>
    )
};

export default AdressR;