import React, { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { Link } from 'react-router-dom';




const AppliedFilters = () => {

    const [filters, setFilters] = useState([
        { id: 'remove1', label: 'Perfume' },
        { id: 'remove2', label: 'Size: M' },
    ]);

    const removeFilter = (id) => {
        setFilters(filters.filter(filter => filter.id !== id));
    };

    return (
        <div>
            <p className="font-semibold">Applied Filters:</p>
            <div className="flex gap-[12px] mt-[12px]">
                {filters.map(filter => (
                    <div key={filter.id} className="flex items-center border border-gray-400 rounded-[100px] px-[16px] py-[2px] transition hover:scale-110 hover:-translate-y-1 duration-500">
                        <div className='flex gap-[8px]'>
                            <button>{filter.label}</button>
                            <img src="/images/x.svg" alt="x" onClick={(e) => {
                                e.stopPropagation();
                                removeFilter(filter.id);
                            }} />
                        </div>
                    </div>
                ))}

            </div>

            <div className="flex justify-between mt-[24px]">
                <p className="text-[12px] text-[#5C5F6A]">Showing 1-9 of 36 results.</p>

                <Menu as="div" className="relative">
                    <MenuButton className="flex items-center">SORT BY
                        <ChevronDownIcon className="ml-1 h-5 w-5" aria-hidden="true" />
                    </MenuButton>

                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg focus:outline-none">
                        <MenuItem>
                            <Link to="/listing" className='block px-4 py-2 hover:scale-110 duration-500'>Price: Low to High</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/listing" className='block px-4 py-2 hover:scale-110 duration-500'>Price: High to Low</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/listing" className='block px-4 py-2 hover:scale-110 duration-500'>Newest Arrivals</Link>
                        </MenuItem>

                    </MenuItems>
                </Menu>
            </div>
        </div>
    )
};

export default AppliedFilters;