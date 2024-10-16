import React from 'react'

const YourCart = () => {
    return (
        <div>
            <div className='flex justify-between items-center max-w-[1116px] m-auto mt-[56px]'>
                <div>
                    <div className=''>
                        <h5 className='text-[#0E1422] font-bold mt-[16px]'>Your cart</h5>
                        <hr className='mt-[18px] max-w-[628px]'></hr>
                    </div>
                    <div className='flex justify-between mt-[48px]'>
                        <div className='flex gap-[32px]'>
                            <img className='rounded-[4px]' src="/images/cartshirt1.png" alt="black shirt" />
                            <div>
                                <p className='text-[#0E1422] font-semibold mt-[9px]'>Raw Black T-Shirt Lineup</p>
                                <div className='flex items-center mt-[6px] gap-[8px]'>
                                    <p className='text-[#5C5F6A]'>Color: </p>
                                    <div className='w-[12px] h-[12px] rounded-[100px] bg-[#98BE9E]'></div>
                                    <p className='text-[#5C5F6A]'>—</p>
                                    <p className='text-[#5C5F6A]'>Size: M</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='flex gap-[32px] mr-[16px]'>
                                <p className='font-semibold mt-2'>$75.00</p>
                                <div className="flex justify-between items-center h-[40px] w-[107px] px-[16px] border-solid border-2 rounded-[4px] border-[#E6E7E8]">
                                    <button className="text-[#202533]">
                                        <img src="/images/minus.svg" alt="remove icon" />
                                    </button>
                                    <p className="text-[#202533]">1</p>
                                    <button className="text-[#202533]">
                                        <img src="/images/plus.svg" alt="add icon" />
                                    </button>
                                </div>
                            </div>
                            <img className='w-[40px] h-[40px]' src="/images/cartx.svg" alt="remove icon" />
                        </div>
                    </div>
                    <div className='flex justify-between mt-[40px]'>
                        <div className='flex gap-[32px]'>
                            <img className='rounded-[4px]' src="/images/cartshirt2.png" alt="white shirt" />
                            <div>
                                <p className='text-[#0E1422] font-semibold mt-[9px]'>Raw Black T-Shirt Lineup</p>
                                <div className='flex items-center mt-[6px] gap-[8px]'>
                                    <p className='text-[#5C5F6A]'>Color: </p>
                                    <div className='w-[12px] h-[12px] rounded-[100px] bg-[#A8B2FF]'></div>
                                    <p className='text-[#5C5F6A]'>—</p>
                                    <p className='text-[#5C5F6A]'>Size: M</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='flex gap-[32px] mr-[16px]'>
                                <p className='font-semibold mt-2'>$22.00</p>
                                <div className="flex justify-between items-center h-[40px] w-[107px] px-[16px] border-solid border-2 rounded-[4px] border-[#E6E7E8]">
                                    <button className="text-[#202533]">
                                        <img src="/images/minus.svg" alt="remove icon" />
                                    </button>
                                    <p className="text-[#202533]">1</p>
                                    <button className="text-[#202533]">
                                        <img src="/images/plus.svg" alt="add icon" />
                                    </button>
                                </div>
                            </div>
                            <img className='w-[40px] h-[40px]' src="/images/cartx.svg" alt="remove icon" />
                        </div>
                    </div>
                </div>
                <div className='border-solid border-2 rounded-[4px] border-[#E6E7E8] h-[430px] py-[32px] px-[24px]'>
                    <h4 className='text-[#0E1422] font-semibold'>Order Summary</h4>
                    <div>
                        <div className='flex justify-between mt-[40px]'>
                            <p className='text-[#5C5F6A]'>Subtotal</p>
                            <p className='text-[#0E1422] font-semibold'>$ 90.00</p>
                        </div>
                        <div className='flex justify-between mt-[12px]'>
                            <p className='text-[#5C5F6A]'>Shipping: </p>
                            <p className='text-[#0E1422] font-semibold'>Free</p>
                        </div>
                        <div className='flex justify-between mt-[12px]'>
                            <p className='text-[#5C5F6A]'>Tax: </p>
                            <p className='text-[#0E1422] font-semibold'>$ 3.00</p>
                        </div>
                    </div>
                    <hr className='mt-[24px]'></hr>
                    <div className='flex justify-between mt-[24px]'>
                        <p className='text-[14px] text-[#0E1422] font-semibold'>Total</p>
                        <p className='text-[14px] text-[#0E1422] font-semibold'>$ 100.00</p>
                    </div>
                    <button className='w-[296px] h-[44px] mt-[32px] rounded-[4px] bg-[#0E1422] text-white' type="submit" value="Submit">Checkout</button>

                    <div className='border-b w-[110px] border-[#0E1422] mt-[15%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%]'>
                        <p className='text-[#0E1422] font-semibold mt-[32px] text-[12px]'>Continue Shopping</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default YourCart;