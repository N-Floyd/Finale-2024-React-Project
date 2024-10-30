import React, { useState } from 'react';

const AddProdImg = () => {
    const initialImages = [
        { src: '/images/upload1.png', alt: 'black shirt' },
        { src: '/images/upload2.png', alt: 'pink shirt' },
        { src: '/images/upload3.png', alt: 'green shirt' },
    ];

    const [images, setImages] = useState(initialImages);

    const removeImage = (src) => {
        setImages(images.filter(img => img.src !== src));
    };

    return (
        <div className='flex gap-[32px] mt-[24px]'>
            {images.map((img, index) => (
                <div className='relative hover:-translate-y-1 hover:scale-110 duration-500' key={index}>
                    <img  className='absolute ml-[70%] cursor-pointer' 
                        src="/images/uploadRemove.svg" alt="remove icon" onClick={(e) => {
                            e.stopPropagation();
                            removeImage(img.src);
                    }} />
                    <img className='py-2' src={img.src} alt={img.alt} />
                </div>
            ))}
        </div>
    );
};

export default AddProdImg;
