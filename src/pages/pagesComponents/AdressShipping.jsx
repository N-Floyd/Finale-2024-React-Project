import React from 'react'
import AdressAside from './AdressAside';
import AdressR from './AdressR';

const AdressShipping = () => {
  return (
    <div className='flex max-w-[1116px] m-auto mt-[60px] gap-[40px]'>
        <AdressAside />
            <div className='border border-1 w-[1px] h-[504px]'></div>
            <AdressR />
        </div>
  )
};

export default AdressShipping;