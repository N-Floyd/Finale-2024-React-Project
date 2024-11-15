import React from 'react';

const ResetNewPass = () => {
  return (
    <div className="w-[1116px] flex justify-center mx-auto">
      <div className="mt-[128px] mb-[148px]">
        <div className="mt-[24px]">
          <label className="block">New password</label>
          <input className="border border-1 rounded-[6px] w-[320px] h-[45px]" type="password" />
        </div>

        <div className="mt-[24px]">
          <label className="block">Confirm password</label>
          <input className="border border-1 rounded-[6px] w-[320px] h-[45px]" type="password" />
        </div>

        <a href="#">
          <button className="w-[318px] h-[44px] bg-[#0E1422] text-white rounded-[4px] mt-[40px] transition hover:scale-110 hover:-translate-y-1 duration-500"> Reset password </button>
        </a>
      </div>
    </div>
  );
};

export default ResetNewPass;
