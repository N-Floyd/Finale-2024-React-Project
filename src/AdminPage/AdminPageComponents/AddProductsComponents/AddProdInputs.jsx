import React from 'react'

const inputs = [
    { label: 'Stock status', type: 'text' },
    { label: 'Available quantity', type: 'text' },
    { label: 'Images', type: 'text', isInput: true, placeholder: 'Choose product images' },
];


const AddProdInputs = () => {
    return (
        <div>
            {inputs.map((input, index) => (
                <div key={index}>
                    <label className='block mt-[16px]'>{input.label}</label>
                    {input.isInput ? (
                        <div className='flex items-center border-2 rounded-[6px]'>
                            <img src="/images/upload.svg" className='w-[24px] h-[24px] ml-2' alt="upload" />
                            <input type={input.type} placeholder={input.placeholder} className='w-full h-[45px] ml-2' />
                        </div>
                    ) : (<input className='border border-1 rounded-[6px] w-full h-[45px]' type={input.type} name={input.name} />)}
                </div>
            ))}
        </div>
    )
};

export default AddProdInputs;