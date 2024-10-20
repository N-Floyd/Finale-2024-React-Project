import React from 'react'
import SettingsSidebar from './SettingsSidebar';
import SettingsR from './SettingsR';

const AsettingsSettings = () => {
  return (
    <div className='flex max-w-[1140px] gap-[48px]'>
        <SettingsSidebar />
        <SettingsR />
  </div>
  )
};

export default AsettingsSettings;