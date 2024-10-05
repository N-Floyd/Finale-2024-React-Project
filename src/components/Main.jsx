import Bestselling from "./Bestselling";
import Browsing from "./Browsing";
import Discount from "./Discount";
import Footer from "./Footer";
import Header from "./Header";
import Productlist from "./Productlist";
import Shipping from "./Shipping";

const Underheader = () => {
  return (
    <div>
      <Discount />
      <Header />
      <div className="relative h-[440px] bg-[#F6F6F6]">
        <div className="flex justify-between ">
          <div className="absolute ">
            <h1 className="w-[313px] h-[36px] text-[#202533] text-[32px] font-bold 
                     mt-[136px] ml-[180px]">Fresh Arrivals Online
            </h1>

            <p className="mt-[21px] ml-[180px] text-[#474B57] text-[14px]">
              Discover Our Newest Collection Today.
            </p>

            <div className='mt-[50px] w-[183px] h-[44px] ml-[182px] flex rounded-[4px] bg-[#0E1422]'>
              <button className='ml-5 text-white'>View Collection</button>
              <img className='w-[24px] h-[24px] ml-1 text-[14px] mt-3' src="/images/arrow.svg" alt="arrow icon" />
            </div>

          </div>

          <div className='relative w-[345px] h-[385px] ml-[950px]'>
            <img className='absolute w-[38px] h-[38px] mt-[92.32px]' src="/images/star.png" alt="star" />
            <img className='absolute w-[340px] h-[340px] mt-[89px]' src="/images/circle.png" alt="circle" />
            <img className='absolute w-[255px] h-[382px] mt-[66px] ml-[89px]' src="/images/dude.png" alt="boy" />
          </div>
        </div>
      </div>
      <Shipping />
      <Bestselling />
      <Browsing />
      <Productlist />
      <Footer />
    </div>


  );
};

export default Underheader;