import React from 'react'

const SidebarProd = [
  { href: 'dashboard', img: '/images/aside1.svg', alt: 'Dashboard icon', text: 'Dashboard' },
  { href: 'aproducts', img: '/images/aside2d.svg', alt: 'products box', text: 'Products' },
  { href: 'aorders', img: '/images/aside3.svg', alt: 'shopping trolley', text: 'Orders', active: true },
  { href: 'acustumer', img: '/images/aside4.svg', alt: 'account icon', text: 'Custumers' },
  { href: 'areviews', img: '/images/aside5.svg', alt: 'empty star', text: 'Reviews' },
  { href: 'asettings', img: '/images/aside6.svg', alt: 'Settings icon', text: 'Settings' },
];

const AordersSidebar = () => {
  return (
    <aside className='w-[260px] min-h-screen border border-[#E9E9EB]'>
      <div className='flex justify-center gap-[12px] mt-[16px]'>
        <img src="/images/adminlogo.png" alt="" />
        <h1 className='text-[#0E1422] font-bold text-[20px]'>Admin</h1>
      </div>
      <div className='px-[24px]'>
        <div className='w-[212px]'>

          {SidebarProd.map((link, index) => (
            <div key={index} className={`flex gap-[10px] rounded-[8px] px-[24px] py-[8px] mt-[${index === 0 ? '60' : '16'}px] hover:scale-110 hover:-translate-y-1 duration-500 ${link.active ? 'bg-[#F6F6F6]' : ''}`}>
              <img className='w-[24px] h-[24px]' src={link.img} alt={link.alt} />
              <a className={`text-[#${link.active ? '0E1422' : '5C5F6A'}] font-semibold`} href={link.href}> {link.text} </a>
            </div>
          ))}
        </div>
      </div>

      <hr className='mt-[47px]'></hr>
      <div className='px-[24px] hover:scale-110 hover:-translate-y-1 duration-500'>
        <a href='#' className='flex gap-[10px] rounded-[8px] px-[24px] py-[8px] mt-[32px]'>
          <img className='w-[24px] h-[24px]' src="/images/plus.svg" alt="plus" />
          <a className='text-[#5C5F6A]' href=''>Extras</a>
        </a>
      </div>
    </aside>
  )
};

export default AordersSidebar;