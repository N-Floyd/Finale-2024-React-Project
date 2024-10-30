import React from 'react';
import { Link } from 'react-router-dom';

const AsideWishlist = [
    { to: '/orders', img: '/images/orders1.svg', alt: 'shopping trolley', text: 'Orders'},
    { to: '/wishlist', img: '/images/orders2d.svg', alt: 'heart', text: 'Wishlist', active: true  },
    { to: '/address', img: '/images/orders3d.svg', alt: 'shippings car', text: 'Address' },
    { to: '/password', img: '/images/orders4.svg', alt: 'key', text: 'Password' },
    { to: '/accdetail', img: '/images/orders5.svg', alt: 'account icon', text: 'Account Detail' },
    { to: '/logout', img: '/images/orders6.svg', alt: 'logout icon', text: 'Logout' },
];

const WishlistAside = () => {
    return (
        <div className='max-w-[212px]'>
            <div>
                {AsideWishlist.map((link, index) => (
                    <div key={index} className={`flex gap-[10px] rounded-[8px] px-[24px] py-[8px] mt-[${index === 0 ? '60' : '16'}px] hover:scale-110 hover:-translate-y-1 duration-500 ${link.active ? 'bg-[#F6F6F6]' : ''}`}>
                        <img className='w-[24px] h-[24px]' src={link.img} alt={link.alt} />
                        <Link className={`text-[#${link.active ? '0E1422' : '5C5F6A'}] font-semibold`} to={link.to}> {link.text} </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WishlistAside;
