const ShippAddress = () => {

  
  return (
    <div>
      <p className='text-[16px] text-[#0E1422] font-semibold'>Shipping Address</p>

      <div>
        <label className='block mt-[64px]' htmlFor='address'>Address</label>
        <input className='border border-1 rounded-[6px] w-[534px] h-[45px]' type='text' />
      </div>

      <div className='flex gap-[16px] mt-[15px]'>
        <div className='h-[69px]'>
          <label className='block'>City</label>
          <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type='text' />
        </div>
        <div className='h-[69px]'>
          <label className='block'>State</label>
          <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type='text' />
        </div>
      </div>

      <div className='flex gap-[16px] mt-[15px]'>
        <div className='h-[69px]'>
          <label className='block'>Zip Code</label>
          <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type='number' />
        </div>
        <div className='h-[69px]'>
          <label className='block'>Country</label>
          <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type='text' />
        </div>
      </div>

      <div className='flex gap-[16px] mt-[51px]'>
        <div className='h-[69px]'>
          <label className='block'>Email</label>
          <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type='email' />
        </div>
        <div className='h-[69px]'>
          <label className='block'>Full Name</label>
          <input className='border border-1 rounded-[6px] w-[259px] h-[45px]' type='text' />
        </div>
      </div>
    </div>
  );
};

export default ShippAddress;
