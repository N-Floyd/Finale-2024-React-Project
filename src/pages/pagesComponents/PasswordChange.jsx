import React from 'react'
import PasswordAside from './PasswordAside';
import PasswordR from './PasswordR';

const PasswordChange = () => {
  return (
    <div className='flex max-w-[1116px] m-auto mt-[60px] gap-[40px]'>
    <PasswordAside />
    <div className='border border-1 w-[1px] h-[504px]'></div>
    <PasswordR />      
    </div>
  )
};

export default PasswordChange;