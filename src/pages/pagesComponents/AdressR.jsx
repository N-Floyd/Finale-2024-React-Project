import React from 'react';

const AdressR = () => {
  return (
    <div className="max-w-[534px]">
      <h4 className="text-[#0E1422] font-bold">Shipping Address</h4>

      <div>
        <label className="block mt-[40px]" htmlFor="adr">Street Address</label>
        <input className="border border-1 rounded-[6px] w-[534px] h-[45px] px-[15px]" type="text" placeholder="2436 Naples Avenue" />
      </div>

      <div className="flex gap-[16px] mt-[15px]">
        <div className="h-[69px]">
          <label className="block">City</label>
          <input className="border border-1 rounded-[6px] w-[259px] h-[45px] px-[15px]" placeholder="Panama City" type="text" />
        </div>

        <div className="h-[69px]">
          <label className="block">State</label>
          <input className="border border-1 rounded-[6px] w-[259px] h-[45px] px-[15px]" placeholder="FL" type="text" />
        </div>
      </div>

      <div className="flex gap-[16px] mt-[15px]">
        <div className="h-[69px]">
          <label className="block">Zip Code</label>
          <input className="border border-1 rounded-[6px] w-[259px] h-[45px] px-[15px]" placeholder="32405" type="text" />
        </div>

        <div className="h-[69px]">
          <label className="block">Country</label>
          <input className="border border-1 rounded-[6px] w-[259px] h-[45px] px-[15px]" placeholder="United States" type="text" />
        </div>
      </div>

      <a href="#">
        <button className="w-[144px] h-[44px] rounded-[4px] bg-[#0E1422] text-white mt-[64px] hover:scale-110 hover:-translate-y-1 duration-500" type="submit" value="Submit">Save Changes</button>
      </a>
    </div>
  );
};

export default AdressR;
