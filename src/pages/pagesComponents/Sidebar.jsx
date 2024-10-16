import React from 'react'
import ListingAside from './ListingAside';
import ListingFilters from './ListingFilters';

const Sidebar = () => {
    return (
            <div className="flex justify-between max-w-[1116px] mx-auto mt-[32px]">
                <ListingAside />
                <ListingFilters />
            </div>
    )
};

export default Sidebar;