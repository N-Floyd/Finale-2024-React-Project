import shirt1 from './Images/shirt1.png';
import shirt2 from './Images/shirt2.png';
import shirt3 from './Images/shirt3.png';
import shirt4 from './Images/shirt4.png';
const Bestselling = () => {
    return (
        <div className="container2 w-[1092px] h-[568px] ml-[174px] mt-[50px]">
            <div className="shopnow">
                <p className="pshop w-[71px] h-[24px] ml-[479px] 
                 text-[#878A92] text-[12px]">SHOP NOW
                </p>
                <h5 className="h5shop w-[139px] h-[29px] ml-[478px] 
                 text-[#0E1422] text-[24px] font-bold">Best Selling
                </h5>
            </div>

            <div className='shirts flex mt-[100px]'>

                <div className='shirt1div w-[264px] h-[434px] rounded-[4px] 
                 px-[8px] py-[16px] '>

                 <img className='shir1' src={shirt1} alt="" />
                 <p className='pshirt1 w-[176px] h-[25px] text-[#0E1422] 
                  text-[14px] font-bold mt-[20px]'>Classic Monochrome Tees
                 </p>
                 <div className='shirtdiv1 flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                    <button className='shirtbutton1 w-[89px] h-[28px] border-solid border-2 
                     rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK
                    </button>
                    <p className='parshirt1 w-[47px] h-[25px] text-[#474B57] 
                     text-[14px] mt-[3px]'>$35.00
                    </p>
                 </div>
                </div>

                <div className='shirt2div w-[256px] h-[434px] rounded-[4px]
                 px-[8px] py-[16px] ml-[10px]'>

                 <img className='shir2' src={shirt2} alt="" />
                 <p className='pshirt2 w-[176px] h-[25px] text-[#0E1422] 
                  text-[14px] font-bold mt-[20px]'>Monochromatic Wardrobe
                 </p>
                 <div className='shirtdiv1 flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                    <button className='shirtbutton1 w-[89px] h-[28px] border-solid border-2 
                     rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK
                    </button>
                    <p className='parshirt1 w-[47px] h-[25px] text-[#474B57] 
                     text-[14px] mt-[3px]'>$27.00
                    </p>
                 </div>
                </div>

                <div className='shirt3div w-[256px] h-[434px] rounded-[4px]
                 px-[8px] py-[16px] ml-[10px]'>

                 <img className='shir3' src={shirt3} alt="" />
                 <p className='pshirt3 w-[121px] h-[25px] text-[#0E1422] 
                  text-[14px] font-bold mt-[20px]'>Essential Neutrals
                 </p>
                 <div className='shirtdiv1 flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                    <button className='shirtbutton1 w-[89px] h-[28px] border-solid border-2 
                     rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK
                    </button>
                    <p className='parshirt1 w-[47px] h-[25px] text-[#474B57] 
                     text-[14px] mt-[3px]'>$22.00
                    </p>
                 </div>
                </div>

                <div className='shirt4div w-[256px] h-[434px] rounded-[4px]
                 px-[8px] py-[16px] ml-[10px]'>

                 <img className='shir4' src={shirt4} alt="" />
                 <p className='pshirt4 w-[117px] h-[25px] text-[#0E1422] 
                  text-[14px] font-bold mt-[20px]'>UTRAANET Black
                 </p>
                 <div className='shirtdiv1 flex w-[239px] h-[28px] gap-[16px] mt-[10px]'>
                    <button className='shirtbutton1 w-[89px] h-[28px] border-solid border-2 
                     rounded-[100px] border-[#E6E7E8] text-[#0E1422] text-[12px]'>IN STOCK
                    </button>
                    <p className='parshirt1 w-[47px] h-[25px] text-[#474B57] 
                     text-[14px] mt-[3px]'>$43.00
                    </p>
                 </div>
                </div>
            </div>
        </div>
        
        
        
        

    )
};

export default Bestselling;