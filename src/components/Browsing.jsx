import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Browsing = () => {
    const [sideSwitched, setSideSwitched] = useState();
    const [spinDegree, setSpin] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSideSwitched(prevState => !prevState);
            setSpin(prev => (prev + 360) );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[#F6F6F6] mt-[168px]">
            <div className="flex justify-between items-center max-w-[1116px] m-auto">
                <div className={`transition-all duration-1000 ease-in-out transform ${sideSwitched ? 'translate-x-full' : 'translate-x-0'}`}>
                    <h4 className="text-[#0E1422] text-[24px] font-bold">Browse Our Fashion Paradise!</h4>
                    <p className="text-[#5C5F6A] text-[14px] mt-[24px]">Step into a world of style and explore our diverse collection of <br /> clothing categories.</p>
                    <Link to="/aproducts">
                        <div className="bg-[#0E1422] flex items-center rounded-[4px] px-5 gap-[6px] mt-[32px] w-[177px] h-[44px] hover:scale-110 duration-500">
                            <button className="text-[#FFFFFF]">Start Browsing</button>
                            <img className="w-[24px] h-[24px]" src="/images/arrow.svg" alt="arrow icon" />
                        </div>
                    </Link>
                </div>


                <div className={`relative w-[340px] h-[385px] transition-all duration-1000 ease-in-out transform ${sideSwitched ? '-translate-x-full' : 'translate-x-0'}`} style={{
                    transform: `rotate(${spinDegree}deg)`, }}>
                    <img className="w-[225px] h-[311px]" src="/images/poncho.png" alt="poncho" />
                </div>
            </div>
        </div>
    );
};

export default Browsing;




// import { Link } from 'react-router-dom';

// const Browsing = () => {
//     return (
//         <div className="bg-[#F6F6F6] mt-[168px]">
//             <div className="flex justify-between items-center max-w-[1116px] m-auto">
//                 <div>
//                     <h4 className="text-[#0E1422] text-[24px] font-bold">Browse Our Fashion Paradise!</h4>
//                     <p className="text-[#5C5F6A] text-[14px] mt-[24px]">Step into a world of style and exploreour diverse collection of <br></br> clothing categories.</p>
//                     <Link to="/aproducts">
//                         <div className=" bg-[#0E1422] flex items-center rounded-[4px] px-5 gap-[6px] mt-[32px] w-[177px] h-[44px] hover:scale-110 duration-500">
//                             <button className=" text-[#FFFFFF] ">Start Browsing</button>
//                             <img className='w-[24px] h-[24px]' src="/images/arrow.svg" alt="arrow icon" />
//                         </div>
//                     </Link>
//                 </div>
//                 <img className='w-[225px] h-[311px]' src="/images/poncho.png" alt="poncho" />
//             </div>

//         </div>
//     )
// };

// export default Browsing;