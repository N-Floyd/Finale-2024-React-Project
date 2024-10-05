const Browsing = () => {
    return (
        <div className=" h-[304px] bg-[#F6F6F6]">
            <div className="flex w-[1116px] mt-[100px]">
                <div>
                    <h4 className="w-[351px] h-[29px] ml-[174px] mt-[52px]
                     text-[#0E1422] text-[24px] font-bold">Browse Our Fashion Paradise!
                    </h4>
                    <p className="w-[462px] h-[50px] ml-[174px] mt-[24px]
                     text-[#5C5F6A] text-[14px]">Step into a world of style and explore
                        our diverse collection of clothing categories.
                    </p>
                    <div className="w-[177px] h-[44px] ml-[174px] mt-[24px]
                     bg-[#0E1422] flex rounded-[4px]">
                        <button className="w-[99px] h-[25px] text-[#FFFFFF] text-[14px] mt-2 ml-6">Start Browsing</button>
                        <img className='w-[24px] h-[24px] text-[14px] mt-[10px]' src="/images/arrow.svg" alt="arrow icon" />
                    </div>
                </div>
                <img className='w-[225px] h-[311px] ml-[348px]' src="/images/poncho.png" alt="poncho" />
            </div>

        </div>
    )
};

export default Browsing;