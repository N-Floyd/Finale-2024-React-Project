import React from 'react'
import CustumersDush from './CustumersDush'
import CustumersSearch from './CustumersSearch'
import CustumersTable from './CustumersTable'
import APagination from '../AProductsComponents/APagination'

const CustumersR = () => {
    return (
        <div>
            <CustumersDush />
            <div className='h-[922px] border-2 mt-[64px] '>
            <CustumersSearch />
            <CustumersTable />
            <APagination />
            </div>
        </div>
    )
}

export default CustumersR