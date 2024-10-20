import React from 'react'
import AordersSidebar from './AordersSidebar';
import AordersR from './AordersR';

const AOrdersOrders = () => {
  return (
    <div className='flex max-w-[1140px] gap-[48px]'>
    <AordersSidebar />
    <AordersR />
  </div>
  )
};

export default AOrdersOrders;