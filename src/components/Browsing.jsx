const Browsing = () => {
    return (
        <div className="bg-[#F6F6F6] mt-[168px]">
            <div className="flex justify-between items-center max-w-[1116px] m-auto">
                <div>
                    <h4 className="text-[#0E1422] text-[24px] font-bold">Browse Our Fashion Paradise!</h4>
                    <p className="text-[#5C5F6A] text-[14px] mt-[24px]">Step into a world of style and exploreour diverse collection of <br></br> clothing categories.</p>
                    <div className=" bg-[#0E1422] flex items-center rounded-[4px] px-5 gap-[6px] mt-[32px] w-[177px] h-[44px]">
                        <button className=" text-[#FFFFFF] ">Start Browsing</button>
                        <img className='w-[24px] h-[24px]' src="/images/arrow.svg" alt="arrow icon" />
                    </div>
                </div>
                <img className='w-[225px] h-[311px]' src="/images/poncho.png" alt="poncho" />
            </div>

        </div>
    )
};

export default Browsing;