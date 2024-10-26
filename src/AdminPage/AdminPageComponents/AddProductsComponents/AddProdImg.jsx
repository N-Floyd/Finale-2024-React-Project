import React from 'react';

const AddProdImg = () => {
    const images = [
        { src: '/images/upload1.png', alt: 'black shirt' },
        { src: '/images/upload2.png', alt: 'pink shirt' },
        { src: '/images/upload3.png', alt: 'green shirt' },
    ];

    return (
        <div className='flex gap-[32px] mt-[24px]'>
            {images.map((img, index) => (
                <div className='relative hover:-translate-y-1 hover:scale-110 duration-500' key={index}>
                    <a href="#"> <img  className='absolute ml-[70%]' src="/images/uploadRemove.svg" alt="remove icon" /></a>
                    <img className='py-2' src={img.src} alt={img.alt} />
                </div>
            ))}
        </div>
    );
};

export default AddProdImg;
