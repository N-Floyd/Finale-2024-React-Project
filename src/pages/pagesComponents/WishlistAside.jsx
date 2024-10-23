import React from 'react';

const AsideWishlist = [
    { href: 'orders', imgSrc: '/images/orders1.svg', alt: 'shopping trolley', text: 'Orders'},
    { href: 'wishlist', imgSrc: '/images/orders2d.svg', alt: 'heart', text: 'Wishlist', active: true  },
    { href: 'address', imgSrc: '/images/orders3.svg', alt: 'shipping car', text: 'Address' },
    { href: 'password', imgSrc: '/images/orders4.svg', alt: 'key', text: 'Password' },
    { href: 'AccDetail', imgSrc: '/images/orders5.svg', alt: 'account icon', text: 'Account Detail' },
    { href: 'logout', imgSrc: '/images/orders6.svg', alt: 'logout icon', text: 'Logout' },
];

const WishlistAside = () => {
    return (
        <div className='max-w-[212px]'>
            <div>
                {AsideWishlist.map((link, index) => (
                    <div key={index} className={`flex gap-[10px] rounded-[8px] px-[24px] py-[8px] mt-[${index === 0 ? '60' : '16'}px] hover:scale-110 hover:-translate-y-1 duration-500 ${link.active ? 'bg-[#F6F6F6]' : ''}`}>
                        <img className='w-[24px] h-[24px]' src={link.imgSrc} alt={link.alt} />
                        <a className={`text-[#${link.active ? '0E1422' : '5C5F6A'}] font-semibold`} href={link.href}> {link.text} </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WishlistAside;
