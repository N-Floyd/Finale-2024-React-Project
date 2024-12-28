import React from 'react';
import Discount from '../../components/Discount';
import Header from '../../components/Header';
import FooterBG from './FooterBG';


const AboutUs = () => {
    return (
        <div>
            <Discount />
            <Header />
            <div className='mb-[150px]' style={{ position: 'relative' }}>
                <img src="/images/clothing1.png" alt="clothing" style={{
                    position: 'absolute', width: '100%', objectFit: 'cover', opacity: 0.7,
                }}
                />
                <h1 className="max-w-[1116px] flex justify-center gap-2 mx-auto mt-[110px] text-[70px] transition hover:scale-110 hover:-translate-y-1 duration-500" style={{ position: 'relative', color: 'white' }}>
                    About Us
                </h1>
                <div className='max-w-[1116px] justify-center gap-2 mx-auto transition hover:scale-110 hover:-translate-y-1 duration-500'>
                    <p className="max-w-[1116px] flex justify-center gap-2 mx-auto mt-[30px] text-[20px]" style={{ position: 'relative', color: 'white' }}>We are a global family of brands and businesses. We make it possible for</p>
                    <p className="max-w-[1116px] flex justify-center gap-2 mx-auto text-[20px]" style={{ position: 'relative', color: 'white' }}>customers around the world to express themselves through fashion and design in</p>
                    <p className="max-w-[1116px] flex justify-center gap-2 mx-auto text-[20px]" style={{ position: 'relative', color: 'white' }}>a sustainable way.</p>
                </div>
            </div>

            <div className='max-w-[1116px] flex justify-center gap-7 mx-auto mt-[300px] bg-orange-200 transition hover:scale-110 hover:-translate-y-1 duration-500'>
                <div>
                    <h2 className='text-[40px] font-semibold ml-5 mt-3'>This is our way</h2>
                    <p className='w-[450px] mt-5'>We are committed to meeting all external regulations where we do business and to doing the right thing. Acting consistently and with a strong ethical compass is vital if Ecommerce Group is to continue being a trusted
                        company and partner, a company that is valued by customers, respected by society, and for which we are all proud to work.
                    </p>
                </div>
                <img className='w-[500px] h-[300px] px-4 py-4' src="/images/clothing2.png" alt="clothing" />
            </div>

            <div className='max-w-[1116px] justify-center gap-7 mx-auto mt-[200px]'>
                <h3 className='max-w-[1116px] flex justify-center gap-2 mx-auto text-[40px] text-gray-700 font-semibold ml-5 mt-3'>A global company</h3>
                <p className='max-w-[1116px] flex justify-center mx-auto text-gray-500 text-[20px]  mt-7'>At Ecommerce, we have sought to bring our passion for fashion to the world from the start. Present in more than 120 markets, </p>
                <p className='max-w-[1116px] flex justify-center mx-auto text-gray-500 text-[20px]'>Ecommerce adapts to each country, with a complete ecosystem of international channels and partners and a network of close</p>
                <p className='max-w-[1116px] flex justify-center mx-auto text-gray-500 text-[20px]'> to 2,700 physical points of sale and a powerful online platform.</p>
                <img className='max-w-[1116px] flex justify-center gap-2 mx-auto' src="/images/world.jpg" alt="world" />
            </div>
            <FooterBG />
        </div>
    );
};

export default AboutUs;
