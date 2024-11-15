import React from 'react';

const AddProdInputs = () => {
    return (
        <div>
            <div>
                <label className="block mt-[16px]">Stock status</label>
                <input className="border border-1 rounded-[6px] w-full h-[45px]" type="text" />
            </div>

            <div>
                <label className="block mt-[16px]">Available quantity</label>
                <input className="border border-1 rounded-[6px] w-full h-[45px]" type="text" />
            </div>

            <div>
                <label className="block mt-[16px]">Images</label>
                <div className="flex items-center border-2 rounded-[6px]">
                    <img src="/images/upload.svg" className="w-[24px] h-[24px] ml-2" alt="upload" />
                    <input type="text" placeholder="Choose product images" className="w-full h-[45px] ml-2" />
                </div>
            </div>
        </div>
    );
};

export default AddProdInputs;
