import React from 'react'
import AdminDashboard from '../AdminPageComponents/AdminDashboard';
import StatisticsF from './StatisticsF';
import StatisticsS from './StatisticsS';

const AStatistics = () => {
  return (
    <div className='max-w-[1060px] mt-[15px]'>
      <AdminDashboard />
      <StatisticsF />
      <StatisticsS />
    </div>
  )
};

export default AStatistics;