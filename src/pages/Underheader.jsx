import arrow from './Images/arrow.svg';
import star from './Images/star.png';
import circle from './Images/circle.png';
import dude from './Images/dude.png';
const Underheader = () => {
    return (
        <div className="container relative w-[1440px] h-[440px] bg-[#F6F6F6]">
            <div className="containerleft absolute ">
                <h1 className="h1 w-[313px] h-[36px] text-[#202533] text-[32px] font-bold 
                  mt-[136px] ml-[180px]">Fresh Arrivals Online
                </h1>
                
                <p className="paragraph mt-[21px] ml-[180px] text-[#474B57] text-[14px]">
                    Discover Our Newest Collection Today.
                </p>

                <div className='collection mt-[50px] w-[183px] h-[44px] ml-[182px] flex rounded-[4px] bg-[#0E1422]'>
                 <button className='button ml-5 text-white'>View Collection</button>
                 <img className='arrow w-[24px] h-[24px] ml-1 text-[14px] mt-3' src={arrow} alt="arrow icon" />
                </div>

            </div>

            <div className='pics relative w-[345px] h-[385px] ml-[950px]'>
                    <img className='star absolute w-[38px] h-[38px] mt-[92.32px]' src={star} alt="star" />
                    <img className='circle absolute w-[340px] h-[340px] mt-[89px]' src={circle} alt="circle" />
                    <img className='dude absolute w-[255px] h-[382px] mt-[66px] ml-[89px]' src={dude} alt="boy" />
                </div>

        </div>
    );
};

export default Underheader;