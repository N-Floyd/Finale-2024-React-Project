import React from 'react'
import Discount from '../components/Discount';
import Header from '../components/Header';
import FooterBG from './pagesComponents/FooterBG';

const ContactH = () => {
    const mapWidth = '100%';
    const mapHeight = '400px';


    return (
        <div>
            <Discount />
            <Header />
            <div className="flex justify-between items-center max-w-[1116px] py-8 m-auto mt-10 gap-7">
                <div>
                    <h1 className='font-bold text-[30px]'>Contuct Us</h1>
                    <div className='transition hover:scale-110 hover:-translate-y-1 duration-500'>
                        <label className='block mt-[64px]'>Email</label>
                        <input className='border border-1 rounded-[6px] w-[534px] h-[45px]' type='email' placeholder='email' />
                    </div>

                    <div className='flex gap-[16px] mt-[15px]'>
                        <div className='h-[69px] transition hover:scale-110 hover:-translate-y-1 duration-500'>
                            <label className='block'>First Name</label>
                            <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type='text' placeholder='first name' />
                        </div>
                        <div className='h-[69px] transition hover:scale-110 hover:-translate-y-1 duration-500'>
                            <label className='block'>Last Name</label>
                            <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type='text' placeholder='last name' />
                        </div>
                    </div>
                    <div className='transition hover:scale-110 hover:-translate-y-1 duration-500'>
                        <label className="block mt-[16px]">Message</label>
                        <textarea className="border border-1 rounded-[6px] w-full h-[128px]" placeholder='Describe your issue' />
                    </div>

                    <a href="#">
                        <button type="submit" className="bg-[#0E1422] w-[138px] h-[44px] mt-[51px] rounded-[4px] text-[#FFFFFF] hover:-translate-y-1 hover:scale-110 duration-500">Send</button>
                    </a>

                </div>

                <div style={{ width: mapWidth, height: mapHeight }}>
                    <iframe width="100%" height="100%"
                        src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=New+York+Shopping"
                        frameborder="0" style={{ border: '0' }} allowfullscreen>
                    </iframe>
                </div>
            </div>
            <div className='max-w-[1116px] flex justify-center gap-2 mx-auto transition hover:scale-110 hover:-translate-y-1 duration-500 mb-16'>
                <h4 className='font-semibold'>Phone Number : +1 5837623874</h4>
                <p className='font-semibold'>Email: info@ecommerce.com</p>
            </div>
            <FooterBG />
        </div>
    )
};

export default ContactH;