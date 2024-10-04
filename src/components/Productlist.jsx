const Productlist = () => {
    return (
        <div className=" h-[497px] mt-[152px]">
            <div className="w-[1116px] ">
            
                <div className="ml-[479px] flex justify-center">
                  <button className="w-[92px] h-[31px] font-semibold border-solid border-2 rounded-[100px] border-[#E9E9EB] text-[14px]">Featured</button>
                  <button className="ml-[24px] text-[14px] text-[#5C5F6A]">Latest</button>
                </div>

                <div className="h-[434px] ml-[163px] mt-[48px]">
                      <div className="w-[1116px] flex justify-between">
                         <div className="w-[264px] h-[434px] rounded-[4px] px-[8px] py-[16px]">
                             <img src="/images/black1.png" alt="" />
                             <p className='w-[179px] h-[25px] text-[#0E1422] 
                              text-[14px] mt-[20px]'>Elegant Ebony Sweatshirts
                             </p>
                             <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                                <button className='w-[89px] h-[28px] border-solid border-2 
                                 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK
                                </button>
                                <p className='w-[47px] h-[25px] text-[#474B57] 
                                 text-[14px] mt-[3px]'>$35.00
                                </p>
                             </div>  
                         </div>

                         <div className="w-[256px] h-[434px] rounded-[4px] px-[8px] py-[16px]">
                             <img src="/images/black2.png" alt="" />
                             <p className='w-[144px] h-[25px] text-[#0E1422] 
                              text-[14px] mt-[20px]'>Sleek and Cozy Black
                             </p>
                             <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                                <button className='w-[89px] h-[28px] border-solid border-2 
                                 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK
                                </button>
                                <p className='w-[47px] h-[25px] text-[#474B57] 
                                 text-[14px] mt-[3px]'>$57.00
                                </p>
                             </div>  
                         </div>

                         <div className="w-[256px] h-[434px] rounded-[4px] px-[8px] py-[16px]">
                             <img src="/images/black3.png" alt="" />
                             <p className='w-[105px] h-[25px] text-[#0E1422] 
                              text-[14px] mt-[20px]'>Raw Black Tees
                             </p>
                             <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                                <button className='w-[89px] h-[28px] border-solid border-2 
                                 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK
                                </button>
                                <p className='w-[47px] h-[25px] text-[#474B57] 
                                 text-[14px] mt-[3px]'>$19.00
                                </p>
                             </div>  
                         </div>

                         <div className="w-[256px] h-[434px] rounded-[4px] px-[8px] py-[16px]">
                             <img src="/images/black4.png" alt="" />
                             <p className='w-[103px] h-[25px] text-[#0E1422] 
                              text-[14px] mt-[20px]'>MOCKUP Black
                             </p>
                             <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                                <button className='w-[89px] h-[28px] border-solid border-2 
                                 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK
                                </button>
                                <p className='w-[47px] h-[25px] text-[#474B57] 
                                 text-[14px] mt-[3px]'>$30.00
                                </p>
                             </div>  
                         </div>
                      </div>
                </div>
            
            </div>
            
        </div>
    )
};

export default Productlist;