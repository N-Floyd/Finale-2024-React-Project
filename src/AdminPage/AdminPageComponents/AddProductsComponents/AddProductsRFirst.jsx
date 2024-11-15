import React from 'react';

const AddProductsRFirst = () => {
    return (
        <div className="w-[320px]">
            <div>
                <label className="block mt-[16px]">Title</label>
                <input className="border border-1 rounded-[6px] w-full h-[45px]" type="text" />
            </div>

            <div>
                <label className="block mt-[16px]">Price</label>
                <input className="border border-1 rounded-[6px] w-full h-[45px]" type="number" />
            </div>

            <div>
                <label className="block mt-[16px]">Category</label>
                <input className="border border-1 rounded-[6px] w-full h-[45px]" type="text" />
            </div>

            <div>
                <label className="block mt-[16px]">Slug</label>
                <input className="border border-1 rounded-[6px] w-full h-[45px]" type="text" />
            </div>

            <div>
                <label className="block mt-[16px]">SKU</label>
                <input className="border border-1 rounded-[6px] w-full h-[45px]" type="text" />
            </div>

            <div>
                <label className="block mt-[16px]">Description</label>
                <textarea className="border border-1 rounded-[6px] w-full h-[128px]" />
            </div>

            <a href="#">
                <button type="submit" className="bg-[#0E1422] w-[138px] h-[44px] mt-[51px] rounded-[4px] text-[#FFFFFF] hover:-translate-y-1 hover:scale-110 duration-500">Save Product</button>
            </a>
        </div>
    );
};

export default AddProductsRFirst;
