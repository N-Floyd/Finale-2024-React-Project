import React from 'react'

const inputs = [
    { label: 'Title', type: 'text' },
    { label: 'Price', type: 'number' },
    { label: 'Category', type: 'text' },
    { label: 'Slug', type: 'text' },
    { label: 'SKU', type: 'text' },
    { label: 'Description', type: 'text', isTextarea: true },
];

const AddProductsRFirst = () => {
    return (
        <div className='w-[320px]'>
            {inputs.map((index) => (
                <div key={index}>
                    <label className='block mt-[16px]'>{index.label}</label>
                    {index.isTextarea ? ( <textarea className='border border-1 rounded-[6px] w-full h-[128px]'/> ) : ( <input className='border border-1 rounded-[6px] w-full h-[45px]' type={index.type} />)}
                </div>
            ))}
            <a href="#"><button type='submit' className='bg-[#0E1422] w-[138px] h-[44px] mt-[51px] rounded-[4px] text-[#FFFFFF] hover:-translate-y-1 hover:scale-110 duration-500'>Save Product</button></a>
        </div>
    )
};

export default AddProductsRFirst;