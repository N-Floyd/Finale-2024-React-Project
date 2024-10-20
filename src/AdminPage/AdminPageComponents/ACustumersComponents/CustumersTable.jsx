import React from 'react'

const CustumersTable = () => {
  return (
    <table className="mt-[24px] w-[1068px]">
    <thead className='border-t border-b'>
        <tr className="text-[#5C5F6A]">
            <img className='p-2 ml-[50px]' src="/images/a1sort.svg" alt="" />
            <th className="text-[#5C5F6A] py-3 px-6 text-left">Name</th>
            <th className="text-[#5C5F6A] py-3 px-6 text-left">Email</th>
            <th className="text-[#5C5F6A] py-3 px-6 text-left">Shipping Address</th>
            <th className="text-[#5C5F6A] py-3 px-6 text-left">Action</th>
        </tr>
    </thead>
    <tbody className="text-[14px]">
        <tr className="border-b hover:bg-gray-100">
           <div className='px-[6px] py-[16px]'>
                <div className="bg-[#F0F1FF] w-[48px] h-[48px] relative rounded-[4px] ml-[47px]">
                    <div className="text-[#4078FF] absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%]">EH</div>
                </div>
            </div>
            <td className="text-[#5C5F6A] py-3 px-6">Esther Howard</td>
            <td className="text-[#5C5F6A] py-3 px-6">esther.howard@gmail.com</td>
            <td className="text-[#5C5F6A] py-3 px-6">8642 Yule Street, Arvada CO 80007</td>
            <img className='py-6 px-3 ml-[28px]' src="/images/adots.svg" alt="" />
        </tr>
        <tr className="border-b hover:bg-gray-100">
            <div className='px-[6px] py-[16px]'>
                <div className="bg-[#F0F1FF] w-[48px] h-[48px] relative rounded-[4px] ml-[47px]">
                    <div className="text-[#4078FF] absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%]">WW</div>
                </div>
            </div>
            <td className="text-[#5C5F6A] py-3 px-6">Wade Warren</td>
            <td className="text-[#5C5F6A] py-3 px-6">wade.warren@gmail.com</td>
            <td className="text-[#5C5F6A] py-3 px-6">5331 Rexford Court, Montgomery AL 36116</td>
            <img className='py-6 px-3 ml-[28px]' src="/images/adots.svg" alt="" />
        </tr>
        <tr className="border-b hover:bg-gray-100">
            <div className='px-[6px] py-[16px]'>
                <div className="bg-[#F0F1FF] w-[48px] h-[48px] relative rounded-[4px] ml-[47px]">
                    <div className="text-[#4078FF] absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%]">BS</div>
                </div>
            </div>
            <td className="text-[#5C5F6A] py-3 px-6">Brooklyn Simmons</td>
            <td className="text-[#5C5F6A] py-3 px-6">brooklyn.simmons@gmail.com</td>
            <td className="text-[#5C5F6A] py-3 px-6">2325 Eastridge Circle, Moore OK 73160</td>
            <img className='py-6 px-3 ml-[28px]' src="/images/adots.svg" alt="" />
        </tr>
        <tr className="border-b hover:bg-gray-100">
           <div className='px-[6px] py-[16px]'>
                <div className="bg-[#F0F1FF] w-[48px] h-[48px] relative rounded-[4px] ml-[47px]">
                    <div className="text-[#4078FF] absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%]">RF</div>
                </div>
            </div>
            <td className="text-[#5C5F6A] py-3 px-6">Robert Fox</td>
            <td className="text-[#5C5F6A] py-3 px-6">robert.fox@gmail.com</td>
            <td className="text-[#5C5F6A] py-3 px-6">2436 Naples Avenue, Panama City FL 32405</td>
            <img className='py-6 px-3 ml-[28px]' src="/images/adots.svg" alt="" />
        </tr>
        <tr className="border-b hover:bg-gray-100">
            <div className='px-[6px] py-[16px]'>
                <div className="bg-[#F0F1FF] w-[48px] h-[48px] relative rounded-[4px] ml-[47px]">
                    <div className="text-[#4078FF] absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%]">DR</div>
                </div>
            </div>
            <td className="text-[#5C5F6A] py-3 px-6">Dianne Russell</td>
            <td className="text-[#5C5F6A] py-3 px-6">dianne.russell@gmail.com</td>
            <td className="text-[#5C5F6A] py-3 px-6">6095 Terry Lane, Golden CO 80403</td>
            <img className='py-6 px-3 ml-[28px]' src="/images/adots.svg" alt="" />
        </tr>
        <tr className="border-b hover:bg-gray-100">
            <div className='px-[6px] py-[16px]'>
                <div className="bg-[#F0F1FF] w-[48px] h-[48px] relative rounded-[4px] ml-[47px]">
                    <div className="text-[#4078FF] absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%]">RE</div>
                </div>
            </div>
            <td className="text-[#5C5F6A] py-3 px-6">Ralph Edwards</td>
            <td className="text-[#5C5F6A] py-3 px-6">ralph.edwards@gmail.com</td>
            <td className="text-[#5C5F6A] py-3 px-6">4001 Anderson Road, Nashville TN 37217</td>
            <img className='py-6 px-3 ml-[28px]' src="/images/adots.svg" alt="" />
        </tr>
        <tr className="border-b hover:bg-gray-100">
            <div className='px-[6px] py-[16px]'>
                <div className="bg-[#F0F1FF] w-[48px] h-[48px] relative rounded-[4px] ml-[47px]">
                    <div className="text-[#4078FF] absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%]">TW</div>
                </div>
            </div>
            <td className="text-[#5C5F6A] py-3 px-6">Theresa Webb</td>
            <td className="text-[#5C5F6A] py-3 px-6">theresa.webb@gmail.com</td>
            <td className="text-[#5C5F6A] py-3 px-6">19141 Pine Ridge Circle, Anchorage AK 99516</td>
            <img className='py-6 px-3 ml-[28px]' src="/images/adots.svg" alt="" />
        </tr>
        <tr className="hover:bg-gray-100">
            <div className='px-[6px] py-[16px]'>
                <div className="bg-[#F0F1FF] w-[48px] h-[48px] relative rounded-[4px] ml-[47px]">
                    <div className="text-[#4078FF] absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%]">AM</div>
                </div>
            </div>
            <td className="text-[#5C5F6A] py-3 px-6">Arlene McCoy</td>
            <td className="text-[#5C5F6A] py-3 px-6">arlene.mccoy@gmail.com</td>
            <td className="text-[#5C5F6A] py-3 px-6">2613 Cottonwood Street, Anchorage AK 99508</td>
            <img className='py-6 px-3 ml-[28px]' src="/images/adots.svg" alt="" />
        </tr>
    </tbody>
</table>
  )
};

export default CustumersTable;