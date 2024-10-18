import React from 'react'

const Reviews = () => {
    return (
        <div>
            <div className="flex gap-[32px] max-w-[1116px] mt-[176px] mx-auto">
                <div className="mt-[72px] w-[241px]">
                    <div className="flex px-[24px] py-[8px] gap-[10px] rounded-[8px]">
                        <img src="/images/dots.svg" alt="dots" />
                        <p className="text-[#0E1422]">Details</p>
                    </div>
                    <div className="flex px-[24px] py-[8px] gap-[10px] bg-[#F6F6F6] rounded-[8px]">
                        <img className="w-[24px] h-[24px]" src="/images/emptystar.svg" alt="star" />
                        <p className="text-[#5C5F6A]">Reviews</p>
                    </div>
                </div>

                <div className="max-w-[727px]">
                    <div className="h-[198px] w-full relative border-b">
                        <h5 className="text-[#0E1422] font-bold">Reviews</h5>
                        <div className="flex gap-3 items-center mt-4">
                            <p className="text-[#0E1422] font-bold text-[32px]">4.2</p>
                            <p className="text-[#71747E] mt-3">— 54 Reviews</p>
                        </div>
                        <button className="border-2 rounded-[4px] border-[#0E1422] gap-4 mt-4 px-[24px] py-[12px]">Write a review</button>
                        <div className="flex gap-[6px] absolute mr-2 right-0">
                            <p>SORT BY</p>
                            <img src="/images/dropd.svg" alt="dropdownIcon" />
                        </div>
                    </div>
                    <div className="flex justify-between mt-[62px]">
                        <div className="flex gap-[24px]">
                            <div className="bg-[#F0F1FF] w-[48px] h-[48px] relative rounded-[100px]">
                                <div className="text-[#4078FF] absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%]">ED</div>
                            </div>
                            <div>
                                <p className="text-[#0E1422] font-semibold">Emily Davis</p>
                                <p className="text-[#5C5F6A] text-[12px] mt-[6px]">1 WEEK AGO</p>
                                <p className="text-[#5C5F6A] text-[14px] mt-[16px]">This company always goes above and beyond to satisfy their customers.</p>
                            </div>
                        </div>
                        <div className="flex gap-[4px]">
                            <img className="w-[16px] h-[16px]" src="/images/starfull.svg" alt="" />
                            <img className="w-[16px] h-[16px]" src="/images/starfull.svg" alt="" />
                            <img className="w-[16px] h-[16px]" src="/images/starfull.svg" alt="" />
                            <img className="w-[16px] h-[16px]" src="/images/starfull.svg" alt="" />
                            <img className="w-[16px] h-[16px]" src="/images/starempty.svg" alt="" />
                        </div>
                    </div>
                    <div className="flex justify-between mt-[62px]">
                        <div className="flex gap-[24px]">
                            <div className="bg-[#F0F1FF] w-[48px] h-[48px] relative rounded-[100px]">
                                <div className="text-[#4078FF] absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%]">DS</div>
                            </div>
                            <div>
                                <p className="text-[#0E1422] font-semibold">Daniel Smith</p>
                                <p className="text-[#5C5F6A] text-[12px] mt-[6px]">2 MONTH AGO</p>
                                <p className="text-[#5C5F6A] text-[14px] mt-[16px]">I can't believe how affordable and high-quality this item is!</p>
                            </div>
                        </div>
                        <div className="flex gap-[4px]">
                            <img className="w-[16px] h-[16px]" src="/images/starfull.svg" alt="" />
                            <img className="w-[16px] h-[16px]" src="/images/starfull.svg" alt="" />
                            <img className="w-[16px] h-[16px]" src="/images/starfull.svg" alt="" />
                            <img className="w-[16px] h-[16px]" src="/images/starfull.svg" alt="" />
                            <img className="w-[16px] h-[16px]" src="/images/starempty.svg" alt="" />
                        </div>
                    </div>
                    <div className="flex justify-between mt-[62px]">
                        <div className="flex gap-[24px]">
                            <div className="bg-[#F0F1FF] w-[48px] h-[48px] relative rounded-[100px]">
                                <div className="text-[#4078FF] absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%]">BC</div>
                            </div>
                            <div>
                                <p className="text-[#0E1422] font-semibold">Benjamin Clark</p>
                                <p className="text-[#5C5F6A] text-[12px] mt-[6px]">22 APRIL</p>
                                <p className="text-[#5C5F6A] text-[14px] mt-[16px]">These guys know their stuff, and it shows in their products.</p>
                            </div>
                        </div>
                        <div className="flex gap-[4px]">
                            <img className="w-[16px] h-[16px]" src="/images/starfull.svg" alt="" />
                            <img className="w-[16px] h-[16px]" src="/images/starfull.svg" alt="" />
                            <img className="w-[16px] h-[16px]" src="/images/starfull.svg" alt="" />
                            <img className="w-[16px] h-[16px]" src="/images/starfull.svg" alt="" />
                            <img className="w-[16px] h-[16px]" src="/images/starempty.svg" alt="" />
                        </div>
                    </div>
                    <div className="max-w-[727px] flex justify-center mx-auto mt-[64px]">
                        <button className="border-2 rounded-[4px] text-[#5C5F6A] text-[14px] px-[24px] py-[12px]">Load more reviews</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Reviews;