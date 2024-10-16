import React from 'react'

const ListingAside = () => {
    return (
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
    )
};

export default ListingAside;