import React from 'react'
import DetalesAside from './DetalesAside';
import DetalesR from './DetalesR';

const AccountDetails = () => {
    return (
        <div className='flex max-w-[1116px] m-auto mt-[60px] gap-[40px]'>
        <DetalesAside />
        <div className='border border-1 w-[1px] h-[504px]'></div>
        <DetalesR />
            
        </div>
    )
};

export default AccountDetails;