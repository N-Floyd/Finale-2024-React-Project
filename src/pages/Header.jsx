import logoeco from './Images/logoeco.png';
import dropd from './Images/dropd.svg';
import search from './Images/search.svg';
import iconbask from './Images/iconbask.svg';
import user from './Images/user.svg';
const Header = () => {
    return (
        <div className="header flex w-[1116px] h-[84px] mt-[40px] ml-[162px]">
           <div className='headerleft flex w-[641px] h-[40px] gap-[103px]'>
              <div className='logoeco w-[163px] h-[40px]'>
                <img src={logoeco} alt="logo" />
              </div> 
               <div className='navigation mt-[10px] w-[337px] h-[25px] text-[#5C5F6A]'>
                   <ul className='flex gap-[32px]'>
                     <li><a href="#">Home</a></li>
                      <div className='dropdown flex w-[106px] h-[25px] gap-[8px]'>
                        <li><a href="#">Categories </a></li>
                        <img src={dropd} alt="dropdownIcon" />
                      </div>
                     <li><a href="#">About</a></li>
                     <li><a href="#">Contact</a></li>
                   </ul>
               </div>
            </div>

            <div className='headerright w-[370px] h-[45px] text-[#878A92]'>
                <div className='searchinput flex ml-auto w-[264px] h-[45px] gap-[32px]'>
                    <div className='searchinput flex border-solid border-2 border-[#E6E7E8] rounded-md gap-[15px]'>
                    <img className='searchicon w-[24px] h-[24px] mt-[12px] ml-[5px]' src={search} alt="searchIcon" />
                    <input  className='input w-[264px] h-[45px]' type='text' placeholder='Search products'></input>
                    </div>
                 
                 
                 <img className='basketicon w-[18px] h-[18px] mt-[12px]' src={iconbask} alt="basket icon" />
                 <img className='usericon w-[19px] h-[19px] mt-[12px]' src={user} alt="user icon" />
                </div>

            </div>
        </div>
    );
};

export default Header;