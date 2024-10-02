import arrow from './Images/arrow.svg';
import poncho from './Images/poncho.png';
const Browsing = () => {
    return (
        <div className="browse flex w-[1440px] h-[304px] mt-[100px] bg-[#F6F6F6]">
            <div className="browsleft ">
                <h4 className="browsh4 w-[351px] h-[29px] ml-[174px] mt-[52px]
                 text-[#0E1422] text-[24px] font-bold">Browse Our Fashion Paradise!
                </h4>
                <p className="browsparag w-[462px] h-[50px] ml-[174px] mt-[24px]
                 text-[#5C5F6A] text-[14px]">Step into a world of style and explore 
                 our diverse collection of clothing categories.
                </p>
                <div className="browsbutto w-[177px] h-[44px] ml-[174px] mt-[24px]
                 bg-[#0E1422] flex rounded-[4px]">
                 <button className="browsbutton w-[99px] h-[25px] text-[#FFFFFF] text-[14px] mt-2 ml-6">Start Browsing</button>
                 <img className='arrow w-[24px] h-[24px] text-[14px] mt-[10px]' src={arrow} alt="arrow icon" />
                </div>
            </div>

            <img className='browsponcho w-[225px] h-[311px] ml-[348px]' src={poncho} alt="poncho" />

        </div>
    )
};

export default Browsing;