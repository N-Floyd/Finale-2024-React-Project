import React from 'react'

const AordersSidebar = () => {
  return (
    <aside className='w-[260px] min-h-screen border border-[#E9E9EB]'>
    <div className='flex justify-center gap-[12px] mt-[16px]'>
      <img src="/images/adminlogo.png" alt="" />
      <h1 className='text-[#0E1422] font-bold text-[20px]'>Admin</h1>
    </div>
    <div className='px-[24px]'>
      <div className='flex w-[212px] gap-[10px] rounded-[8px] px-[24px] py-[8px] mt-[48px]'>
        <img className='w-[24px] h-[24px]' src="/images/aside1.svg" alt="Dashboard icon" />
        <a className='text-[#5C5F6A]' href='/dashboard'>Dashboard</a>
      </div>
      <div className='flex gap-[10px] rounded-[8px] px-[24px] py-[8px] mt-[16px]'>
        <img className='w-[24px] h-[24px]' src="/images/aside2.svg" alt="products box" />
        <a className='text-[#5C5F6A]' href='aproducts'>Products</a>
      </div>
      <div className='flex gap-[10px] bg-[#F6F6F6] rounded-[8px] px-[24px] py-[8px] mt-[16px]'>
        <img className='w-[24px] h-[24px]' src="/images/aside3d.svg" alt="shopping trolley" />
        <a className='text-[#0E1422] font-semibold' href='aorders'>Orders</a>
      </div>
      <div className='flex gap-[10px] rounded-[8px] px-[24px] py-[8px] mt-[16px]'>
        <img className='w-[24px] h-[24px]' src="/images/aside4.svg" alt="account icon" />
        <a className='text-[#5C5F6A]' href='acustumer'>Customers</a>
      </div>
      <div className='flex gap-[10px] rounded-[8px] px-[24px] py-[8px] mt-[16px]'>
        <img className='w-[24px] h-[24px]' src="/images/aside5.svg" alt="empty star" />
        <a className='text-[#5C5F6A]' href='areviews'>Reviews</a>
      </div>
      <div className='flex gap-[10px] rounded-[8px] px-[24px] py-[8px] mt-[16px]'>
        <img className='w-[24px] h-[24px]' src="/images/aside6.svg" alt="Settings icon" />
        <a className='text-[#5C5F6A]' href='asettings'>Settings</a>
      </div>
    </div>
    <hr className='mt-[47px]'></hr>
    <div className='px-[24px]'>
      <div className='flex gap-[10px] rounded-[8px] px-[24px] py-[8px] mt-[32px]'>
        <img className='w-[24px] h-[24px]' src="/images/plus.svg" alt="plus" />
        <a className='text-[#5C5F6A]' href=''>Extras</a>
      </div>
    </div>
  </aside>
  )
};

export default AordersSidebar;