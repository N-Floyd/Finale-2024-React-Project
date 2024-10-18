import React from 'react'

const PAdminDashboard = () => {
    return (
        <div className='flex justify-between'>
            <div className="flex gap-[4px] pt-[8px]">
                <a className="text-[#5C5F6A]" href='/'>Admin</a>
                <img className="w-[24px] h-[24px] " src="/images/rightarrow.svg" alt="" />
                <a className="font-semibold text-[#0E1422]" href='/dashboard'>Dashboard</a>
            </div>
            <img src="/images/orders6.svg" alt="logout icon" />
        </div>
    )
};

export default PAdminDashboard;