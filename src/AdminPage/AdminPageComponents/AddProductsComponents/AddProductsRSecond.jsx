import React from 'react'

const AddProductsRSecond = () => {
    return (
        <div className='w-[320px]'>
            <div>
                <label className='block'>Stock status</label>
                <input className='border border-1 rounded-[6px] w-full h-[45px]' type="text"></input>
            </div>
            <div>
                <label className='block mt-[16px]'>Available quantity</label>
                <input className='border border-1 rounded-[6px] w-full h-[45px]' type="text"></input>
            </div>
            <div>
                <label className='block mt-[16px]'>Images</label>
                <div className='flex items-center border-2 rounded-[6px]'>
                    <img src="/images/upload.svg" className='w-[24px] h-[24px] ml-2' alt="upload" />
                    <input type="text" placeholder="Choose product images" className='w-full h-[45px] ml-2' />
                </div>
            </div>

            <div className='flex gap-[32px] mt-[24px]'>
                <div className='relative'>
                    <img className='absolute ml-[70%] ' src="/images/uploadRemove.svg" alt="remove icon" />
                    <img className='py-2' src="/images/upload1.png" alt="black shirt" />
                </div>
                <div className='relative'>
                    <img className='absolute ml-[70%] ' src="/images/uploadRemove.svg" alt="remove icon" />  
                    <img className='py-2' src="/images/upload2.png" alt="pink shirt" />
                </div>
                <div className='relative'>
                    <img className='absolute ml-[70%] ' src="/images/uploadRemove.svg" alt="remove icon" />
                    <img className='py-2' src="/images/upload3.png" alt="green shirt" />
                </div>
            </div>

            <div className="mt-[17px] h-[64px]">
                <h4 className="text-[#474B57] font-semibold">Colors</h4>
                <div className="flex gap-[18px] mt-[9px]">
                    <div className="bg-[#A3BEF8] w-[24px] h-[24px] rounded-[100px]"></div>
                    <div className="bg-[#FFD58A] w-[24px] h-[24px] rounded-[100px]"></div>
                    <div className="bg-[#83B18B] w-[24px] h-[24px] rounded-[100px]"></div>
                    <div className="bg-[#4078FF] w-[24px] h-[24px] rounded-[100px]"></div>
                </div>
            </div>

            <div className="mt-[24px]">
                <h5 className="text-[#474B57] font-semibold">Sizes</h5>
                <div className="flex gap-[8px] relative mt-[9px]">
                    <div className="relative w-[40px] h-[40px] border rounded-[4px]">
                        <div className="absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%] text-[#5C5F6A]">S</div>
                    </div>
                    <div className="relative w-[40px] h-[40px] border rounded-[4px]">
                        <div className="absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%] text-[#5C5F6A]">M</div>
                    </div>
                    <div className="relative w-[40px] h-[40px] border rounded-[4px]">
                        <div className="absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%] text-[#5C5F6A]">L</div>
                    </div>
                    <div className="relative w-[40px] h-[40px] border rounded-[4px]">
                        <div className="absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%] text-[#5C5F6A]">XL</div>
                    </div>
                    <div className="relative w-[40px] h-[40px] border rounded-[4px]">
                        <div className="absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%] text-[#5C5F6A]">XXL</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AddProductsRSecond;