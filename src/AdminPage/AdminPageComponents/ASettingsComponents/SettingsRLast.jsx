import React from 'react';

const SettingsRLast = () => {
  return (
    <div className="w-[320px] mt-[64px] ml-[48px]">
      <div>
        <label className="block mt-[16px]">Site Name</label>
        <input className="border border-1 rounded-[6px] w-full h-[45px]" type="text" />
      </div>

      <div>
        <label className="block mt-[16px]">Support Email</label>
        <input className="border border-1 rounded-[6px] w-full h-[45px]" type="email" />
      </div>

      <div>
        <label className="block mt-[16px]">Monthly Order Goal</label>
        <input className="border border-1 rounded-[6px] w-full h-[45px]" type="number" />
      </div>

      <a href="#">
        <button type="submit" className="bg-[#0E1422] w-[144px] h-[44px] mt-[74px] rounded-[4px] text-[#FFFFFF] hover:scale-110 duration-500">Save Changes</button>
      </a>
    </div>
  );
};

export default SettingsRLast;
