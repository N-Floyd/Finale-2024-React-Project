import React from 'react'
import ASidebar from './ASidebar';
import AStatistics from './AStatistics';

const Statistics = () => {
  return (
    <div className='flex max-w-[1140px] gap-[48px]'>
      <ASidebar />
      <AStatistics />
    </div>
  )
};

export default Statistics;