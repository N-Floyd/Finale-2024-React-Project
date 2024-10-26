import React from 'react'
import AddProdInputs from './AddProdInputs';
import AddProdImg from './AddProdImg';
import AddProdColor from './AddProdColor';
import AddProdSize from './AddProdSize';


const AddProductsRSecond = () => {
    return (
        <div className='w-[320px]'>
        <AddProdInputs />
        <AddProdImg />
        <AddProdColor />
        <AddProdSize />
        </div>
    )
};

export default AddProductsRSecond;