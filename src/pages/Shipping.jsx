import shippin from './Images/shippin.svg';
import guarantee from './Images/guarantee.svg';
import payment from './Images/payment.svg';
const Shipping = () => {
    return (
        <div className="container1 flex w-[1092px] h-[266px] ml-[174px] mt-[48px] gap-[36px]">
            <div className="shippin w-[328px] h-[218px]">
                <img className='shinpcar w-[48px] h-[48px] p-[5px]' src={shippin} alt="shipping car icon" />
                <h6 className='h6free w-[107px] h-[19px] mt-[10px] text-[16px] font-bold'>Free Shipping</h6>
                <p className='parupgrade mt-[15px] text-[#5C5F6A] w-[272px] h-[50px] text-[14px]'>Upgrade 
                    your style today and get FREE shipping on all orders! Don't miss out.
                </p>
            </div>

            <div className="guarant w-[328px] h-[218px]">
                <img className='guaran w-[48px] h-[48px] p-[5px]' src={guarantee} alt="star icon" />
                <h6 className='h6guarant w-[178px] h-[19px] mt-[10px] text-[16px] font-bold'>Satisfaction Guarantee</h6>
                <p className='parguaran mt-[15px] text-[#5C5F6A] w-[272px] h-[50px] text-[14px]'>Shop confidently with 
                    our Satisfaction Guarantee: Love it or get a refund.
                </p>
            </div>

            <div className="paym w-[328px] h-[218px]">
                <img className='paymen w-[48px] h-[48px] p-[5px]' src={payment} alt="sequrity icon" />
                <h6 className='h6paymen w-[127px] h-[19px] mt-[10px] text-[16px] font-bold'>Secure Payment</h6>
                <p className='parpaymen mt-[15px] text-[#5C5F6A] w-[272px] h-[50px] text-[14px]'>Your security
                     is our priority. Your payments are secure with us.
                </p>
            </div>

        </div>

    )
};

export default Shipping;