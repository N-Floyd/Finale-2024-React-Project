import React from 'react'
import ATable from './ATable';
import APagination from './APagination';
import AProductsSearch from './AProductsSearch';
import AProductDash from './AProductDash';

const AProductsR = () => {
    return (
        <div>
            <AProductDash />
            <div className='h-[922px] border-2 mt-[64px] '>
                <AProductsSearch />
                <ATable />
                <APagination />
            </div>
        </div>
    )
};

export default AProductsR;