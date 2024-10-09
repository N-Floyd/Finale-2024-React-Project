import Discount from "../components/Discount";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Listing = () => {
    return (
        <div>
            <Discount />
            <Header />
            <div className=" bg-[#F6F6F6] h-[64px]">
                <div className="flex w-[159px] pt-5 ml-52">
                    <p className="w-[80px] h-[25px] text-[14px] text-[#5C5F6A]">Ecommerce</p>
                    <img className="w-[24px] h-[24px] mr-2" src="/images/rightarrow.svg" alt="arrow icon" />
                    <p className="w-[47px] h-[25px] text-[14px] font-semibold text-[#0E1422]">Search</p>
                </div>
            </div>

            <div className="flex gap-11 mt-14">
                <div>
                    <aside className="w-[248px] h-[828px] ml-52 border-2 border-[#E6E7E8] rounded-[6px] px-4">
                        <div>
                            <h4 className="w-[74px] h-[25px] text-[14px] text-[#0E1422] font-semibold pt-7">Categories</h4>
                            <div className="w-[200px] h-[294px] mt-[41px]">
                                <div className="w-[200px] h-[49px] border-b-[1px] pt-3">
                                    <input type="checkbox" id="Perfume"></input>
                                    <label className="ml-3" for="Perfume">Perfume</label>
                                </div>
                                <div className="w-[200px] h-[49px] border-b-[1px] pt-3">
                                    <input type="checkbox" id="Trousers"></input>
                                    <label className="ml-3" for="Trousers">Trousers</label>
                                </div>
                                <div className="w-[200px] h-[49px] border-b-[1px] pt-3">
                                    <input type="checkbox" id="Shoe"></input>
                                    <label className="ml-3" for="Shoe">Shoe</label>
                                </div>
                                <div className="w-[200px] h-[49px] border-b-[1px] pt-3">
                                    <input type="checkbox" id="Handbag"></input>
                                    <label className="ml-3" for="Handbag">Handbag</label>
                                </div>
                                <div className="w-[200px] h-[49px] border-b-[1px] pt-3">
                                    <input type="checkbox" id="Hat"></input>
                                    <label className="ml-3" for="Hat">Hat</label>
                                </div>
                                <div className="w-[200px] h-[49px] border-b-[1px] pt-3">
                                    <input type="checkbox" id="Thermos"></input>
                                    <label className="ml-3" for="Thermos">Thermos</label>
                                </div>
                            </div>
                            <div className="mt-9">
                                <h4 className="w-[37px] h-[25px] text-[14px] text-[#0E1422] font-semibold">Color</h4>
                                <div className="flex justify-start gap-[10px] w-[200px] h-[32px] mt-3">
                                    <div className="bg-[#A3BEF8] w-[24px] h-[24px] rounded-[100px]"></div>
                                    <div className="bg-[#FFD58A] w-[24px] h-[24px] rounded-[100px]"></div>
                                    <div className="bg-[#83B18B] w-[24px] h-[24px] rounded-[100px]"></div>
                                    <div className="bg-[#4078FF] w-[24px] h-[24px] rounded-[100px]"></div>
                                </div>
                            </div>
                            <div className="w-[215px] h-[137px]">
                                <h5 className="text-[14px] text-[#0E1422] font-semibold mt-9">Size</h5>
                                <div className="flex w-[200px] gap-[8px] mt-3">
                                    <div className="w-[40px] h-[40px] border rounded-[4px] flex justify-center p-2 text-[##0E1422] text-[12px]">S</div>
                                    <div className="w-[40px] h-[40px] border rounded-[4px] flex justify-center p-2 text-[##0E1422] text-[12px]">M</div>
                                    <div className="w-[40px] h-[40px] border rounded-[4px] flex justify-center p-2 text-[##0E1422] text-[12px]">L</div>
                                    <div className="w-[40px] h-[40px] border rounded-[4px] flex justify-center p-2 text-[##0E1422] text-[12px]">XL</div>
                                </div>
                                <div className="w-[40px] h-[40px] border rounded-[4px] flex justify-center p-2 text-[##0E1422] text-[12px] mt-1">XXL</div>
                            </div>
                            <div className="w-[216px] h-[104px] mt-7">
                                <h6 className="text-[14px] texti[#0E1422] font-semibold">Price</h6>
                            </div>
                        </div>
                    </aside>
                </div>
                <div className="mt-2">
                    <p className="text-[14px] font-semibold w-[101px] h-[25px]">Applied Filters:</p>
                    <div className="flex gap-[12px] w-[227px] h-[36px] mt-4">
                        <div className="flex items-center h-[36px] w-[111px] border border-gray-400 rounded-[100px]">
                            <div className='flex'>
                                <button className='w-full ml-2'>Perfume</button>
                                <img src="/images/x.svg" className='w-[22px] h-[32px] ml-1' alt="x" />
                            </div>
                        </div>
                        <div className="flex items-center h-[36px] w-[111px] border border-gray-400 rounded-[100px]">
                            <div className='flex'>
                                <button className='w-full ml-2'>Size: M</button>
                                <img src="/images/x.svg" className='w-[22px] h-[32px] ml-1' alt="x" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between w-[813px] h-[24px] mt-10">
                        <p className="text-[12px] text-[#5C5F6A]">Showing 1-9 of 36 results.</p>
                        <div className="flex gap-[6px] w-[106px]">
                            <p className="text-[12px] text-[#5C5F6A] mt-1">SORT BY</p>
                            <img className="w-[24px] h-[24px]" src="/images/dropd.svg" alt="dropdownIcon" />
                        </div>
                    </div>
                    <div class="grid grid-rows-3 grid-flow-col gap-4 max-w-[1116px] mx-auto mt-[24px]">
                        <div className="w-[264px] h-[434px] px-[8px] py-[16px]">
                         <img src="/images/ltshirt1.png" alt="" />
                         <p className='w-[179px] h-[25px] text-[#0E1422] 
                              text-[14px] mt-[20px] font-semibold'>Classic Monochrome Tees
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
                        <div className="w-[256px] h-[434px] px-[8px] py-[16px]">
                         <img src="/images/ltshirt2.png" alt="" />
                         <p className='w-[179px] h-[25px] text-[#0E1422] 
                              text-[14px] mt-[20px] font-semibold'>UTRAANET Black
                             </p>
                             <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                                <button className='w-[89px] h-[28px] border-solid border-2 
                                 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK
                                </button>
                                <p className='w-[47px] h-[25px] text-[#474B57] 
                                 text-[14px] mt-[3px]'>$43.00
                                </p>
                             </div>  
                        </div>
                        <div className="w-[256px] h-[434px] px-[8px] py-[16px]">
                         <img src="/images/ltshirt3.png" alt="" />
                         <p className='w-[179px] h-[25px] text-[#0E1422] 
                              text-[14px] mt-[20px] font-semibold'>Raw Black Tees
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
                        <div className="w-[256px] h-[434px] px-[8px] py-[16px]">
                         <img src="/images/ltshirt4.png" alt="" />
                         <p className='w-[179px] h-[25px] text-[#0E1422] 
                              text-[14px] mt-[20px] font-semibold'>Monochromatic Wardrobe
                             </p>
                             <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                                <button className='w-[89px] h-[28px] border-solid border-2 
                                 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK
                                </button>
                                <p className='w-[47px] h-[25px] text-[#474B57] 
                                 text-[14px] mt-[3px]'>$27.00
                                </p>
                             </div>  
                        </div>
                        <div className="w-[256px] h-[434px] px-[8px] py-[16px]">
                         <img src="/images/ltshirt5.png" alt="" />
                         <p className='w-[179px] h-[25px] text-[#0E1422] 
                              text-[14px] mt-[20px] font-semibold'>Elegant Ebony Sweatshirts
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
                        <div className="w-[256px] h-[434px] px-[8px] py-[16px]">
                         <img src="/images/ltshirt6.png" alt="" />
                         <p className='w-[179px] h-[25px] text-[#0E1422] 
                              text-[14px] mt-[20px] font-semibold'>MOCKUP Black
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
                        <div className="w-[256px] h-[434px] px-[8px] py-[16px]">
                         <img src="/images/ltshirt7.png" alt="" />
                         <p className='w-[179px] h-[25px] text-[#0E1422] 
                              text-[14px] mt-[20px] font-semibold'>Essential Neutrals
                             </p>
                             <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                                <button className='w-[89px] h-[28px] border-solid border-2 
                                 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK
                                </button>
                                <p className='w-[47px] h-[25px] text-[#474B57] 
                                 text-[14px] mt-[3px]'>$22.00
                                </p>
                             </div>  
                        </div>
                        <div className="w-[256px] h-[434px] px-[8px] py-[16px]">
                         <img src="/images/ltshirt8.png" alt="" />
                         <p className='w-[179px] h-[25px] text-[#0E1422] 
                              text-[14px] mt-[20px] font-semibold'>Sleek and Cozy Black
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
                        <div className="w-[256px] h-[434px] px-[8px] py-[16px]">
                         <img src="/images/ltshirt9.png" alt="" />
                         <p className='w-[179px] h-[25px] text-[#0E1422] 
                              text-[14px] mt-[20px] font-semibold'>Athletic Shirt
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
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Listing;