const Header = () => {
  return (
    <div className=" flex justify-between max-w-[1116px] py-8 ml-[175px]">
      <div className=' flex h-[40px] gap-[103px]'>
        <div className='w-[163px] h-[40px]'>
          <img src="/images/logoeco.png" alt="logo" />
        </div>

        <div className='mt-[10px] w-[337px] h-[25px] text-[#5C5F6A]'>
          <ul className='flex gap-[32px]'>
            <li><a href="#">Home</a></li>
            <div className='flex w-[106px] h-[25px] gap-[8px]'>
              <li><a href="#">Categories </a></li>
              <img src="/images/dropd.svg" alt="dropdownIcon" />
            </div>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>


      <div className="flex justify-end w-full gap-6">
        <div className="flex items-center h-[45px] text-[#878A92] border border-gray-400 rounded-lg px-4">
          <div className='flex items-center'>
            <img src="/images/search.svg" className='w-[24px] h-[24px]' alt="search" />
            <input type="text" placeholder="Search products" className='w-full h-full outline-none ml-2' />
          </div>
        </div>

        <div className='flex gap-5'>
          <img className='w-[18px] h-[18px] mt-[12px]' src="/images/iconbask.svg" alt="basket icon" />
          <img className='w-[19px] h-[19px] mt-[12px]' src="/images/user.svg" alt="user icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;