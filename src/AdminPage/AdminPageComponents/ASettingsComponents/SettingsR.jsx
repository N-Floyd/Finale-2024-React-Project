import React from 'react'
import SettingsDush from './SettingsDush';
import SettingsRLast from './SettingsRLast';

const SettingsR = () => {
  return (
    <div>
        <SettingsDush />
            <div className='h-[922px] border-2 mt-[64px] w-[1068px]'>
            <h2 className='font-semibold mt-[32px] ml-[48px]'>Settings</h2>
            <hr className='mt-[32px]'></hr>
            <SettingsRLast />
            </div>
    </div>
  )
};

export default SettingsR;