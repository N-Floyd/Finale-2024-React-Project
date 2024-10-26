import React from 'react'

const settings = [
  {label:'Site Name', type: 'text'},
  {label:'Support Email', type: 'email'},
  {label:'Monthly Order Goal', type: 'number'},
];

const SettingsRLast = () => {
  return (
    <div className='w-[320px] mt-[64px] ml-[48px]'>
        {settings.map((index) => (
          <div key={index}>
            <label className='block mt-[16px]'>{index.label}</label>
            {index.isTextarea ? ( <textarea className='border border-1 rounded-[6px] w-full h-[128px]'/> ) : ( <input className='border border-1 rounded-[6px] w-full h-[45px]' type={index.type} />)}
          </div>
        ))}
        <a href="#"><button type='submit' className='bg-[#0E1422] w-[144px] h-[44px] mt-[74px] rounded-[4px] text-[#FFFFFF] hover:scale-110 duration-500'>Save Changes</button></a>
    </div>
  )
};

export default SettingsRLast;