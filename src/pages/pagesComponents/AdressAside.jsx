import React from 'react'

const AsideAdress = [
    { href: 'orders', img: '/images/orders1.svg', alt: 'shopping trolley', text: 'Orders' },
    { href: 'wishlist', img: '/images/orders2.svg', alt: 'heart', text: 'Wishlist' },
    { href: 'adress', img: '/images/orders3d.svg', alt: 'shippings car', text: 'Adress', active: true },
    { href: 'password', img: '/images/orders4.svg', alt: 'key', text: 'Password' },
    { href: 'accDetail', img: '/images/orders5.svg', alt: 'account icon', text: 'Account Detail' },
    { href: 'logout', img: '/images/orders6.svg', alt: 'logout icon', text: 'Logout' },
];

const AdressAside = () => {
    return (
        <div className='w-[212px] '>
            <div className='w-[212px] '>
                <div>
                    {AsideAdress.map((link, index) => (
                        <div key={index} className={`flex gap-[10px] rounded-[8px] px-[24px] py-[8px] mt-[${index === 0 ? '60' : '16'}px] hover:scale-110 hover:-translate-y-1 duration-500 ${link.active ? 'bg-[#F6F6F6]' : ''}`}>
                            <img className='w-[24px] h-[24px]' src={link.img} alt={link.alt} />
                            <a className={`text-[#${link.active ? '0E1422' : '5C5F6A'}] font-semibold`} href={link.href}> {link.text} </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default AdressAside;