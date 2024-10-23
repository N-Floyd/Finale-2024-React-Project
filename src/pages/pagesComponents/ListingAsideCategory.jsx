import React from 'react'


const items = [
    { id: 'Perfume', label: 'Perfume' },
    { id: 'Trousers', label: 'Trousers' },
    { id: 'Shoe', label: 'Shoe' },
    { id: 'Handbag', label: 'Handbag' },
    { id: 'Hat', label: 'Hat' },
    { id: 'Thermos', label: 'Thermos' },
];

const ListingAsideCategory = () => {
    return (
        <div>
            {items.map(item => (
                <div key={item.id} className="border-b-[1px] flex gap-[10px] px-[4px] py-[12px] transition hover:scale-110 hover:-translate-y-1 duration-500">
                    <input type="checkbox" id={item.id} />
                    <label htmlFor={item.id}>{item.label}</label>
                </div>
            ))}
        </div>
    );
};

export default ListingAsideCategory;
