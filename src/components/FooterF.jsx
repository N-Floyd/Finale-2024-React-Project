import React from 'react'

const FooterF = () => {
  return (
    <div>
        <div className="h-[200px] bg-[#F6F6F6] mt-[192px]">
                <div className="flex justify-between items-center max-w-[1116px] m-auto pt-[59px]">
                    <div className="">
                       <h1 className="text-[24px] font-bold">Join Our Newsletter</h1>
                       <p className="text-[14px] text-[#5C5F6A] mt-[24px]">
                         We love to surprise our subscribers with occasional gifts.
                        </p>
                    </div>
                    <div className="flex gap-[16px]">
                        <input type="email" placeholder="Your email address" className="border-solid border-2 
                         w-[320px] h-[45px] rounded-[6px] px-[15px] py-[10px]">
                        </input>
                        <button className="w-[116px] h-[44px] rounded-[4px] bg-[#0E1422]
                         text-[#FFFFFF] hover:scale-110 duration-500">Subscribe
                        </button>
                    </div>
                </div>
            </div>
    </div>
  )
};

export default FooterF;