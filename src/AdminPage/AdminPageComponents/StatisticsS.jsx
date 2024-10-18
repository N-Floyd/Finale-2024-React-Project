import React from 'react'
import StatisticSL from './StatisticSL';
import StatisticsSR from './StatisticsSR';

const StatisticsS = () => {
    return (
        <div className='flex gap-[38px] mt-[40px]'>
        <StatisticSL />
        <StatisticsSR />
        </div>
    )
};

export default StatisticsS;