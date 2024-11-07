import React, { useEffect, useState } from 'react'
import ListingAsideCategory from './ListingAsideCategory';
import ListingColor from './ListingColor';
import ListingSizes from './ListingSizes';

const ListingAside = () => {

    return (
        <aside className="h-[828px] border-2 border-[#E6E7E8] rounded-[6px] px-4">
            <div>
                <h4 className="text-[14px] text-[#0E1422] font-semibold mt-[24px]">Categories</h4>
                <ListingAsideCategory />
                <ListingColor />
                <ListingSizes />
                <div className="mt-[40px]">
                    <h6 className="texti[#0E1422] font-semibold">Price</h6>
                    <input className="mt-[24px]" type="range" id="vol" name="vol" min="0" max="1000"></input>
                </div>
            </div>
        </aside>
    )
};

export default ListingAside;