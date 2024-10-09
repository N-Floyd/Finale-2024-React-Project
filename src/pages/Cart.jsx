import React from 'react'
import Discount from '../components/Discount';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Cart = () => {
    return (
        <div>
            <Discount />
            <Header />
            <div>
                <div className=" bg-[#F6F6F6] h-[160px]">
                    <div>
                        <p className='w-[52px] h-[29px] text-[24px] pt-[35px] font-bold text-[#0E1422] ml-[175px]'>Cart</p>
                        <div className="flex w-[159px] pt-11 ml-[175px]">
                            <p className="w-[80px] h-[25px] text-[14px] text-[#5C5F6A]">Ecommerce</p>
                            <img className="w-[24px] h-[24px] mr-2" src="/images/rightarrow.svg" alt="" />
                            <p className="w-[47px] h-[25px] text-[14px] font-semibold text-[#0E1422]">Cart</p>
                        </div>
                    </div>
                </div>
                <div>


                    <div>
                        <div className='flex'>
                            <div>
                                <div className='ml-[175px]'>
                                    <div className='border-b w-[628px] mt-[109px]'>
                                        <h5 className='w-[71px] h-[19px] pb-[53px] text-[16px] text-[#0E1422] font-semibold'>Your cart</h5>
                                    </div>
                                </div>
                                <div className='w-[628px] h-[80px] ml-[175px] flex justify-between mt-[60px]'>
                                    <div className='flex gap-[32px]'>
                                        <img className='w-[80px] h-[80px] rounded-[4px]' src="/images/cartshirt1.png" alt="black shirt" />
                                        <div>
                                            <p className='w-[168px] h-[25px] text-[14px] mt-2 text-[#0E1422] font-semibold'>Raw Black T-Shirt Lineup</p>
                                        </div>
                                    </div>
                                    <div className='flex mt-3'>
                                        <p className='w-[47px] h-[25px] text-[14px] mr-[32px] font-semibold mt-2'>$75.00</p>
                                        <div className="flex justify-between items-center mr-[16px] w-[107px] h-[40px] pr-[16px] pl-[16px] border-solid border-2 rounded-[4px] border-[#E6E7E8]">
                                            <button className="text-[#202533]">
                                                <img className="w-[16px] j-[16px]" src="/images/minus.svg" alt="remove icon" />
                                            </button>
                                            <p className="text-[24px]">1</p>
                                            <button className="text-[#202533]">
                                                <img className="w-[16px] j-[16px]" src="/images/plus.svg" alt="add icon" />
                                            </button>
                                        </div>
                                        <img className='w-[40px] h-[40px]' src="/images/cartx.svg" alt="remove icon" />
                                    </div>
                                </div>
                                <div className='w-[628px] h-[80px] ml-[175px] flex justify-between mt-[60px]'>
                                    <div className='flex gap-[32px]'>
                                        <img className='w-[80px] h-[80px] rounded-[4px]' src="/images/cartshirt2.png" alt="white shirt" />
                                        <div>
                                            <p className='w-[168px] h-[25px] text-[14px] text-[#0E1422] mt-2 font-semibold'>Essential Neutrals</p>
                                        </div>
                                    </div>
                                    <div className='flex mt-3'>
                                        <p className='w-[47px] h-[25px] text-[14px] mr-[32px] font-semibold mt-2'>$22.00</p>
                                        <div className="flex justify-between items-center mr-[16px] w-[107px] h-[40px] pr-[16px] pl-[16px] border-solid border-2 rounded-[4px] border-[#E6E7E8]">
                                            <button className="text-[#202533]">
                                                <img className="w-[16px] j-[16px]" src="/images/minus.svg" alt="remove icon" />
                                            </button>
                                            <p className="text-[24px]">1</p>
                                            <button className="text-[#202533]">
                                                <img className="w-[16px] j-[16px]" src="/images/plus.svg" alt="add icon" />
                                            </button>
                                        </div>
                                        <img className='w-[40px] h-[40px]' src="/images/cartx.svg" alt="remove icon" />
                                    </div>
                                </div>
                            </div>
                            <div className='w-[341px] h-[430px] border-solid border-2 rounded-[4px] border-[#E6E7E8] ml-[122px] mt-[56px]'>
                                <h4 className='w-[123px] h-[19px] mt-[32px] ml-[24px] text-[16px] text-[#0E1422] font-semibold'>Order Summary</h4>
                                <div>
                                    <div className='flex justify-between w-[293px] h-[25px] ml-[24px] mt-[40px]'>
                                        <p className='text-[14px] text-[#5C5F6A]'>Subtotal</p>
                                        <p className='text-[14px] text-[#0E1422] font-semibold'>$ 90.00</p>
                                    </div>
                                    <div className='flex justify-between w-[293px] h-[25px] ml-[24px] mt-[12px]'>
                                        <p className='text-[14px] text-[#5C5F6A]'>Shipping: </p>
                                        <p className='text-[14px] text-[#0E1422] font-semibold'>Free</p>
                                    </div>
                                    <div className='flex justify-between w-[293px] h-[25px] ml-[24px] mt-[12px]'>
                                        <p className='text-[14px] text-[#5C5F6A]'>Tax: </p>
                                        <p className='text-[14px] text-[#0E1422] font-semibold'>$ 3.00</p>
                                    </div>
                                </div>
                                <div className='border-t border-[#E6E7E8] w-[293px] ml-[24px] mt-[24px]'></div>
                                <div className='flex justify-between w-[293px] h-[25px] ml-[24px] mt-[24px]'>
                                    <p className='text-[14px] text-[#0E1422] font-semibold'>Total</p>
                                    <p className='text-[14px] text-[#0E1422] font-semibold'>$ 100.00</p>
                                </div>
                                <button className='w-[296px] h-[44px] rounded-[4px] ml-[24px] mt-[32px] bg-[#0E1422] text-[14px] text-white' type="submit" value="Submit">Checkout</button>
                                <p className='text-[12px] text-[#0E1422] font-semibold ml-[116px] mt-[32px]'>Continue Shopping</p>
                                <div className='border-t border-[#0E1422] w-[110px] ml-[116px]'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Cart;