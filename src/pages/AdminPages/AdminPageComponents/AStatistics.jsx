import React from 'react'
import AdminDashboard from './AdminDashboard';
import StatisticsF from './StatisticsF';
import StatisticsS from './StatisticsS';

const AStatistics = () => {
  return (
    <div className='w-[1060px] mt-[15px]'>
      <AdminDashboard />
      <StatisticsF />
      <StatisticsS />
    </div>
  )
};

export default AStatistics;