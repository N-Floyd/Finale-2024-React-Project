import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'



const Header = () => {

  return (
    <div className="flex justify-between items-center max-w-[1116px] py-8 m-auto">
      <div className=' flex gap-[103px]'>
        <div className='w-[163px]'>
          <img src="/images/logoeco.png" alt="logo" />
        </div>

        <div className='mt-[10px] text-[#5C5F6A]'>
          <ul className='flex gap-[32px]'>
            <li className="transition hover:scale-110 hover:-translate-y-1 duration-500">
              <a href="/">Home</a>
            </li>
            <li className="relative flex gap-[8px] transition hover:-translate-y-1 hover:scale-110 duration-500">
              <Menu as="div" className="relative">
                <MenuButton className="flex items-center">Categories
                  <ChevronDownIcon className="ml-1 h-5 w-5" aria-hidden="true" />
                </MenuButton>

                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg focus:outline-none">
                  <MenuItem>
                    <a href="#" className='block px-4 py-2 text-sm bg-gray-100 text-gray-700'>Categories 1 </a>
                  </MenuItem>
                  <MenuItem>
                    <a href="#" className='block px-4 py-2 text-sm bg-gray-100 text-gray-700'>Categories 2 </a>
                  </MenuItem>
                  <MenuItem>
                    <a href="#" className='block px-4 py-2 text-sm bg-gray-100 text-gray-700'>Categories 3 </a>
                  </MenuItem>

                </MenuItems>
              </Menu>
            </li>
            <li className="transition hover:-translate-y-1 hover:scale-110 duration-500 rounded-[5px]">
              <a href="#">About</a>
            </li>
            <li className="transition hover:-translate-y-1 hover:scale-110 duration-500 rounded-[5px]">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>


      <div className="flex justify-end w-full gap-6">
        <div className="flex items-center h-[45px] text-[#878A92] border border-gray-400 rounded-lg px-4 hover:-translate-y-1 hover:scale-110 duration-500">
          <div className='flex items-center'>
            <img src="/images/search.svg" className='w-[24px] h-[24px]' alt="search" />
            <input type="search" placeholder="Search products" className='w-full h-full outline-none ml-2' />
          </div>
        </div>

        <div className='flex gap-5'>
          <a href="#" className="transition hover:-translate-y-1 hover:scale-110 duration-500 rounded-[5px]"><img className='w-[18px] h-[18px] mt-[12px]' src="/images/iconbask.svg" alt="basket icon" /></a>
          <a href="#" className="transition hover:-translate-y-1 hover:scale-110 duration-500 rounded-[5px]"><img className='w-[19px] h-[19px] mt-[12px]' src="/images/user.svg" alt="user icon" /></a>
        </div>
      </div>
    </div>
  );
};

export default Header;