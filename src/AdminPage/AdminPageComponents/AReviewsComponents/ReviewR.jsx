import React from 'react'
import ReviewsDush from './ReviewsDush';
import ReviwSearch from './ReviwSearch';
import ReviewsTable from './ReviewsTable';
import APagination from '../AProductsComponents/APagination';

const ReviewR = () => {
    return (
        <div>
            <ReviewsDush />
            <div className='h-[922px] border-2 mt-[64px] '>
                <ReviwSearch />
                <ReviewsTable />
                <APagination />
            </div>
        </div>
    )
};

export default ReviewR;