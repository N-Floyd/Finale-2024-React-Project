import React from 'react';

const ForgotpassEM = () => {
  return (
    <div className="max-w-[1116px] flex justify-center mx-auto">
      <div className="mt-[144px] mb-[148px]">
        <p className="max-w-[320px] text-[14px]">
          Please enter the email address associated with your account.
          We'll promptly send you a link to reset your password.
        </p>

        <div className="mt-[24px]">
          <label className="block">Email</label>
          <input className="border border-1 rounded-[6px] w-[320px] h-[45px]" type="email" />
        </div>

        <a href="resetp">
          <button className="w-[318px] h-[44px] bg-[#0E1422] text-white rounded-[4px] mt-[24px] transition hover:scale-110 hover:-translate-y-1 duration-500"> Send reset link </button>
        </a>
      </div>
    </div>
  );
};

export default ForgotpassEM;
