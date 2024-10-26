import React, { useState } from 'react';
import ReviewsStars from './ReviewsStars';
import ReviewsDetails from './ReviewsDetails';

const Reviews = () => {
    const [showReviews, setShowReviews] = useState(false);
    const [showDetails, setShowDetails] = useState(true);

    const reviewShowing = (event) => {
        event.preventDefault();
        setShowReviews(true); 
        setShowDetails(false); 
    };

    const showDetailsHandler = (event) => {
        event.preventDefault();
        setShowDetails(true);
        setShowReviews(false);
    };

    return (
        <div>
            <div className="flex gap-[32px] max-w-[1116px] mt-[176px] mx-auto">
                <div className="mt-[72px] w-[241px]">
                    <a href='#' className={`flex px-[24px] py-[8px] gap-[10px] rounded-[8px] transition hover:scale-110 hover:-translate-y-1 duration-500 ${showDetails ? 'bg-[#F6F6F6]' : 'bg-[#ffff]'}`} onClick={showDetailsHandler} >
                        <img src="/images/dots.svg" alt="dots" />
                        <p className="text-[#0E1422]">Details</p>
                    </a>
                    <a href='#' id='aRev' className={`flex px-[24px] py-[8px] gap-[10px] rounded-[8px] transition hover:scale-110 hover:-translate-y-1 duration-500 ${showReviews ? 'bg-[#F6F6F6]' : 'bg-[#ffff]'}`} onClick={reviewShowing} >
                        <img className="w-[24px] h-[24px]" src="/images/emptystar.svg" alt="star" />
                        <p className="text-[#5C5F6A]">Reviews</p>
                    </a>
                </div>

                {showDetails && <ReviewsDetails />}

                <div className="max-w-[727px]">
                    {showReviews && (
                        <div id='adiv'>
                            <ReviewsStars />
                            <div className="max-w-[727px] flex justify-center mx-auto mt-[64px]">
                                <a href='#' className="border-2 rounded-[4px] text-[#5C5F6A] text-[14px] px-[24px] py-[12px] transition hover:scale-110 hover:-translate-y-1 duration-500">
                                    Load more reviews
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
