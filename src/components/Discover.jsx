import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Discover = () => {
    const [sideSwitched, setSideSwitched] = useState();


    useEffect(() => {
        const interval = setInterval(() => {
            setSideSwitched(prevState => !prevState);
        }, 3000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-[440px] bg-[#F6F6F6]">
            <div className="flex justify-between items-center max-w-[1116px] m-auto relative">

                <div className={`transition-transform duration-1000 ease-in-out transform ${sideSwitched ? 'translate-x-full' : 'translate-x-0'}`}>
                    <h1 className="text-[#202533] text-[32px] font-boldn imate-fadeInUp">Fresh Arrivals Online</h1>
                    <p className="mt-[12px] text-[#474B57] text-[14px] animate-fadeInUp">Discover Our Newest Collection Today.</p>

                    <Link to="/aproducts" className="h-[44px] w-[183px] mt-[48px] flex justify-center items-center rounded-[4px] bg-[#0E1422] gap-[6px] hover:scale-110 transition-all duration-300 ease-in-out hover:bg-[#212B3A] hover:shadow-lg" >
                        <button className="text-white">View Collection</button>
                        <img className="w-[24px]" src="/images/arrow.svg" alt="arrow icon" />
                    </Link>
                </div>

                <div className={`relative w-[340px] h-[385px] transition-transform duration-1000 ease-in-out transform ${sideSwitched ? '-translate-x-full' : 'translate-x-0'}`}>
                    <img className="absolute w-[38px] h-[38px] mt-[92.32px] opacity-0 animate-pulse" src="/images/star.png" alt="star"/>
                    <img className="absolute w-[340px] h-[340px] mt-[89px] transform transition-all duration-300 hover:scale-105" src="/images/circle.png" alt="circle"/>
                    <img className="absolute w-[255px] h-[382px] mt-[66px] ml-[89px] transform transition-all duration-300 hover:scale-110" src="/images/dude.png" alt="boy"/>
                </div>
            </div>
        </div>
    );
};

export default Discover;
