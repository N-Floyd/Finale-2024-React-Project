import React from 'react'

const Sidebar = () => {
    return (
        <div>
            <div className="flex justify-between max-w-[1116px] mx-auto mt-[32px]">
                <div className="">
                    <aside className="h-[828px] border-2 border-[#E6E7E8] rounded-[6px] px-4">
                        <div>
                            <h4 className="text-[14px] text-[#0E1422] font-semibold mt-[24px]">Categories</h4>
                            <div className="">
                                <div className="border-b-[1px] flex gap-[10px] px-[4px] py-[12px]">
                                    <input type="checkbox" id="Perfume"></input>
                                    <label for="Perfume">Perfume</label>
                                </div>
                                <div className="border-b-[1px] flex gap-[10px] px-[4px] py-[12px]">
                                    <input type="checkbox" id="Trousers"></input>
                                    <label for="Trousers">Trousers</label>
                                </div>
                                <div className="border-b-[1px] flex gap-[10px] px-[4px] py-[12px]">
                                    <input type="checkbox" id="Shoe"></input>
                                    <label for="Shoe">Shoe</label>
                                </div>
                                <div className="border-b-[1px] flex gap-[10px] px-[4px] py-[12px]">
                                    <input type="checkbox" id="Handbag"></input>
                                    <label for="Handbag">Handbag</label>
                                </div>
                                <div className="border-b-[1px] flex gap-[10px] px-[4px] py-[12px]">
                                    <input type="checkbox" id="Hat"></input>
                                    <label for="Hat">Hat</label>
                                </div>
                                <div className="border-b-[1px] flex gap-[10px] px-[4px] py-[12px]">
                                    <input type="checkbox" id="Thermos"></input>
                                    <label for="Thermos">Thermos</label>
                                </div>
                            </div>
                            <div className="mt-[40px] h-[76px]">
                                <h4 className="text-[#0E1422] font-semibold">Color</h4>
                                <div className="flex justify-start gap-[10px] mt-[12px]">
                                    <div className="bg-[#A3BEF8] w-[24px] h-[24px] rounded-[100px]"></div>
                                    <div className="bg-[#FFD58A] w-[24px] h-[24px] rounded-[100px]"></div>
                                    <div className="bg-[#83B18B] w-[24px] h-[24px] rounded-[100px]"></div>
                                    <div className="bg-[#4078FF] w-[24px] h-[24px] rounded-[100px]"></div>
                                </div>
                            </div>
                            <div className="h-[137px] mt-[40px]">
                                <h5 className="text-[#0E1422] font-semibold">Size</h5>
                                <div className="flex gap-[8px] relative mt-[12px]">
                                    <div className="relative w-[40px] h-[40px] border rounded-[4px]">
                                        <div className="absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%] text-[#0E1422]">S</div>
                                    </div>
                                    <div className="relative w-[40px] h-[40px] border rounded-[4px]">
                                        <div className="absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%] text-[#0E1422]">M</div>
                                    </div>
                                    <div className="relative w-[40px] h-[40px] border rounded-[4px]">
                                        <div className="absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%] text-[#0E1422]">L</div>
                                    </div>
                                    <div className="relative w-[40px] h-[40px] border rounded-[4px]">
                                        <div className="absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%] text-[#0E1422]">XL</div>
                                    </div>

                                </div>
                                <div className="relative w-[40px] h-[40px] border rounded-[4px] mt-[8px]">
                                    <div className="absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%] text-[#0E1422]">XXL</div>
                                </div>
                            </div>
                            <div className="mt-[40px]">
                                <h6 className="texti[#0E1422] font-semibold">Price</h6>
                                <input className="mt-[24px]" type="range" id="vol" name="vol" min="0" max="1000"></input>
                            </div>
                        </div>
                    </aside>
                </div>
                <div className="mt-2">
                    <p className="font-semibold">Applied Filters:</p>
                    <div className="flex gap-[12px] mt-[12px]">
                        <div className="flex items-center border border-gray-400 rounded-[100px] px-[16px] py-[2px]">
                            <div className='flex gap-[8px]'>
                                <button>Perfume</button>
                                <img src="/images/x.svg" alt="x" />
                            </div>
                        </div>
                        <div className="flex items-center border border-gray-400 rounded-[100px] px-[16px] py-[2px]">
                            <div className='flex gap-[8px]'>
                                <button>Size: M</button>
                                <img src="/images/x.svg" alt="x" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-[24px]">
                        <p className="text-[12px] text-[#5C5F6A]">Showing 1-9 of 36 results.</p>
                        <div className="flex gap-[6px] w-[106px]">
                            <p className="text-[12px] text-[#5C5F6A] mt-1">SORT BY</p>
                            <img src="/images/dropd.svg" alt="dropdownIcon" />
                        </div>
                    </div>
                    <div class="grid grid-rows-3 grid-flow-col gap-4 max-w-[1116px] mx-auto mt-[16px]">
                        <div className="px-[8px] py-[16px]">
                            <img src="/images/ltshirt1.png" alt="shirt" />
                            <p className='text-[#0E1422] text-[14px] mt-[25px] font-semibold'>Classic Monochrome Tees</p>
                            <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                                <button className='w-[89px] h-[28px] border-solid border-2 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK</button>
                                <p className='text-[#474B57] text-[14px] mt-[3px]'>$35.00</p>
                            </div>
                        </div>
                        <div className="px-[8px] py-[16px]">
                            <img src="/images/ltshirt2.png" alt="shirt" />
                            <p className='text-[#0E1422] text-[14px] mt-[25px] font-semibold'>UTRAANET Black</p>
                            <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                                <button className='w-[89px] h-[28px] border-solid border-2 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK</button>
                                <p className='text-[#474B57] text-[14px] mt-[3px]'>$43.00</p>
                            </div>
                        </div>
                        <div className="px-[8px] py-[16px]">
                            <img src="/images/ltshirt3.png" alt="" />
                            <p className='text-[#0E1422] text-[14px] mt-[25px] font-semibold'>Raw Black Tees</p>
                            <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                                <button className='w-[89px] h-[28px] border-solid border-2 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK</button>
                                <p className='text-[#474B57] text-[14px] mt-[3px]'>$19.00</p>
                            </div>
                        </div>
                        <div className="px-[8px] py-[16px]">
                            <img src="/images/ltshirt4.png" alt="" />
                            <p className='text-[#0E1422] text-[14px] mt-[25px] font-semibold'>Monochromatic Wardrobe</p>
                            <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                                <button className='w-[89px] h-[28px] border-solid border-2 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK</button>
                                <p className='text-[#474B57] text-[14px] mt-[3px]'>$27.00</p>
                            </div>
                        </div>
                        <div className="px-[8px] py-[16px]">
                            <img src="/images/ltshirt5.png" alt="" />
                            <p className='text-[#0E1422] text-[14px] mt-[25px] font-semibold'>Elegant Ebony Sweatshirts</p>
                            <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                                <button className='w-[89px] h-[28px] border-solid border-2 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK</button>
                                <p className='text-[#474B57] text-[14px] mt-[3px]'>$35.00</p>
                            </div>
                        </div>
                        <div className="px-[8px] py-[16px]">
                            <img src="/images/ltshirt6.png" alt="" />
                            <p className='text-[#0E1422] text-[14px] mt-[25px] font-semibold'>MOCKUP Black</p>
                            <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                                <button className='w-[89px] h-[28px] border-solid border-2 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK</button>
                                <p className='text-[#474B57] text-[14px] mt-[3px]'>$30.00</p>
                            </div>
                        </div>
                        <div className="px-[8px] py-[16px]">
                            <img src="/images/ltshirt7.png" alt="" />
                            <p className='text-[#0E1422] text-[14px] mt-[25px] font-semibold'>Essential Neutrals</p>
                            <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                                <button className='w-[89px] h-[28px] border-solid border-2 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK</button>
                                <p className='text-[#474B57] text-[14px] mt-[3px]'>$22.00</p>
                            </div>
                        </div>
                        <div className="px-[8px] py-[16px]">
                            <img src="/images/ltshirt8.png" alt="" />
                            <p className='text-[#0E1422] text-[14px] mt-[25px] font-semibold'>Sleek and Cozy Black</p>
                            <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                                <button className='w-[89px] h-[28px] border-solid border-2 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK</button>
                                <p className='text-[#474B57] text-[14px] mt-[3px]'>$57.00</p>
                            </div>
                        </div>
                        <div className="px-[8px] py-[16px]">
                            <img src="/images/ltshirt9.png" alt="" />
                            <p className='text-[#0E1422] text-[14px] mt-[25px] font-semibold'>Athletic Shirt</p>
                            <div className='flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                                <button className='w-[89px] h-[28px] border-solid border-2 rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK</button>
                                <p className='text-[#474B57] text-[14px] mt-[3px]'>$35.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Sidebar;