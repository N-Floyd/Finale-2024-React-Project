const ShippAddress = () => {
    const inputs = [
      { label: 'Address', type: 'text'},
      { label: 'City', type: 'text'},
      { label: 'State', type: 'text'},
      { label: 'Zip Code', type: 'number'},
      { label: 'Country', type: 'text'},
      { label: 'Email', type: 'email'},
      { label: 'Full Name', type: 'text'},
    ];
  
    return (
      <div>
        <p className='text-[16px] text-[#0E1422] font-semibold'>Shipping Address</p>
        <div>
          <label className='block mt-[64px]' For='address'>Address</label>
          <input className='border border-1 rounded-[6px] w-[534px] h-[45px]' type='text' />
        </div>
        <div className='flex gap-[16px] mt-[15px]'>
          {inputs.slice(1, 3).map((input) => (
            <div key={input.name} className='h-[69px]'>
              <label className='block'>{input.label}</label>
              <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type={input.type}/>
            </div>
          ))}
        </div>
        <div className='flex gap-[16px] mt-[15px]'>
          {inputs.slice(3, 5).map((input) => (
            <div key={input.name} className='h-[69px]'>
              <label className='block'>{input.label}</label>
              <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type={input.type} />
            </div>
          ))}
        </div>
        <div className='flex gap-[16px] mt-[51px]'>
          {inputs.slice(5).map((input) => (
            <div key={input.name} className='h-[69px]'>
              <label className='block'>{input.label}</label>
              <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type={input.type} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ShippAddress;
  