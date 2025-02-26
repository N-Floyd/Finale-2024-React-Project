import React from 'react';
import { Link } from 'react-router-dom';

const SignupEm = () => {
  return (
    <div className="max-w-[1116px] flex justify-center mx-auto">
      <div className="mt-[123px] mb-[148px]">
        <Link to="https://mail.google.com/mail/" className="flex justify-center pt-2 gap-[8px] border border-1 border-[#B6B7BC] w-[320px] h-[44px] rounded-[4px] transition hover:scale-110 hover:-translate-y-1 duration-500">
          <img className="w-[24px] h-[24px]" src="/images/google.svg" alt="google icon" />
          <p className="text-[#5C5F6A]">Continue with Google</p>
        </Link>

        <div className="flex items-center gap-[16px] mt-[32px]">
          <hr className="w-[136px]" />
          <p className="text-[#5C5F6A]">OR</p>
          <hr className="w-[136px]" />
        </div>

        <div className="mt-[32px]">
          <label className="block">Name</label>
          <input className="border border-1 rounded-[6px] w-[320px] h-[45px]" type="text" />
        </div>

        <div className="mt-[32px]">
          <label className="block">Email</label>
          <input className="border border-1 rounded-[6px] w-[320px] h-[45px]" type="email" />
        </div>

        <div className="mt-[32px]">
          <label className="block">Password</label>
          <input className="border border-1 rounded-[6px] w-[320px] h-[45px]" type="password" />
        </div>

        <div className="mt-[16px]">
          <p className="text-[#5C5F6A] w-[316px] text-[12px]"> By creating an account you agree with our Terms of Service, Privacy Policy, </p>
        </div>

        <Link>
          <button className="w-[318px] h-[44px] bg-[#0E1422] text-white rounded-[4px] mt-[24px] transition hover:scale-110 hover:-translate-y-1 duration-500"> Create account </button>
        </Link>

        <div className="flex justify-center mt-[24px]">
          <Link to="/login" className="text-[#5C5F6A] hover:scale-110 hover:-translate-y-1 duration-500"> Already have an account? Log in </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupEm;
