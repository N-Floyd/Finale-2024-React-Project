import React from 'react'
import AordersDush from './AordersDush';
import AorderSearch from './AorderSearch';
import AordersTable from './AordersTable';
import APagination from '../AProductsComponents/APagination';


const AordersR = () => {
    return (
        <div>
            <AordersDush />
            <div className='h-[922px] border-2 mt-[64px] '>
                <AorderSearch />
                <AordersTable />
                <APagination />
            </div>
        </div>
    )
};

export default AordersR;