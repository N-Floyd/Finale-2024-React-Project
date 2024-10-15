import React, { useState } from 'react';

const RangeSlider = () => {
  const [value, setValue] = useState(50);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <input id="range" type="range" min="0" max="100" value={value} onChange={handleChange} className="w-full bg-[#F0F1FF] rounded-lg appearance-none cursor-pointer"/>
      <div className="">{value}</div>
    </div>
  );
};

export default RangeSlider;