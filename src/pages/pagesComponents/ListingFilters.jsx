import React from 'react'
import AppliedFilters from './AppliedFilters';
import FilterGrid from './FilterGrid';
import ListingPagination from './ListingPagination';

const ListingFilters = () => {
    return (
        <div className="mt-2">
            <AppliedFilters />
            <FilterGrid />
            <ListingPagination />
        </div>
    )
};

export default ListingFilters;