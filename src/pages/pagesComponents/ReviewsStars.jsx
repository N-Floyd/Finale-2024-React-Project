import React from 'react'

const reviews = [
    {
        member: 1,
        initials: "ED",
        name: "Emily Davis",
        time: "1 WEEK AGO",
        coment: "This company always goes above and beyond to satisfy their customers.",
        stars: 4
    },
    {
        member: 2,
        initials: "DS",
        name: "Daniel Smith",
        time: "2 MONTH AGO",
        coment: "I can't believe how affordable and high-quality this item is!",
        stars: 4
    },
    {
        member: 3,
        initials: "BC",
        name: "Benjamin Clark",
        time: "22 APRIL",
        coment: "These guys know their stuff, and it shows in their products.",
        stars: 4
    }
];

const ReviewsStars = () => {
    return (
        <div>
            <div className="h-[198px] w-full relative border-b">
                <h5 className="text-[#0E1422] font-bold">Reviews</h5>
                <div className="flex gap-3 items-center mt-4">
                    <p className="text-[#0E1422] font-bold text-[32px]">4.2</p>
                    <p className="text-[#71747E] mt-3">— {reviews.length} Reviews</p>
                </div>
                <button className="border-2 rounded-[4px] border-[#0E1422] gap-4 mt-4 px-[24px] py-[12px]">Write a review</button>
                <div className="flex gap-[6px] absolute mr-2 right-0">
                    <p>SORT BY</p>
                    <img src="/images/dropd.svg" alt="dropdownIcon" />
                </div>
            </div>

            {reviews.map((review) => (
                <div className="flex justify-between mt-[62px]" key={review.member}>
                    <div className="flex gap-[24px]">
                        <div className="bg-[#F0F1FF] w-[48px] h-[48px] relative rounded-[100px]">
                            <div className="text-[#4078FF] absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%]">{review.initials}</div>
                        </div>
                        <div>
                            <p className="text-[#0E1422] font-semibold">{review.name}</p>
                            <p className="text-[#5C5F6A] text-[12px] mt-[6px]">{review.time}</p>
                            <p className="text-[#5C5F6A] text-[14px] mt-[16px]">{review.coment}</p>
                        </div>
                    </div>
                    <div className="flex gap-[4px]">
                        {[...Array(5)].map((_, index) => (
                            <img key={index} className="w-[16px] h-[16px]" src={index < review.stars ? "/images/starfull.svg" : "/images/starempty.svg"} alt={index < review.stars ? "full star" : "empty star"} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default ReviewsStars;