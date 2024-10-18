const Shipping = () => {
    return (
        <div className="flex max-w-[1116px] justify-between h-[266px] ml-[174px] mt-[48px] gap-[36px]">
            <div className="max-w-[328px] h-[218px]">
                <img className='w-[48px] h-[48px] p-[5px]' src="/images/shippin.svg" alt="shipping car icon" />
                <h6 className='w-[107px] h-[19px] mt-[10px] text-[16px] font-bold'>Free Shipping</h6>
                <p className='mt-[15px] text-[#5C5F6A] w-[272px] h-[50px] text-[14px]'>Upgrade 
                    your style today and get FREE shipping on all orders! Don't miss out.
                </p>
            </div>

            <div className="max-w-[328px] h-[218px]">
                <img className='w-[48px] h-[48px] p-[5px]' src="/images/guarantee.svg" alt="star icon" />
                <h6 className='w-[178px] h-[19px] mt-[10px] text-[16px] font-bold'>Satisfaction Guarantee</h6>
                <p className='mt-[15px] text-[#5C5F6A] w-[272px] h-[50px] text-[14px]'>Shop confidently with 
                    our Satisfaction Guarantee: Love it or get a refund.
                </p>
            </div>

            <div className="max-w-[328px] h-[218px]">
                <img className='w-[48px] h-[48px] p-[5px]' src="/images/payment.svg" alt="sequrity icon" />
                <h6 className='w-[127px] h-[19px] mt-[10px] text-[16px] font-bold'>Secure Payment</h6>
                <p className='parpaymen mt-[15px] text-[#5C5F6A] w-[272px] h-[50px] text-[14px]'>Your security
                     is our priority. Your payments are secure with us.
                </p>
            </div>

        </div>

    )
};

export default Shipping;