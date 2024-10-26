import React from 'react'

const Acustumers = [
    {
    initials: 'EH',
    name: 'Esther Howard',
    email: 'esther.howard@gmail.com',
    address: '8642 Yule Street, Arvada CO 80007',
  },
  {
    initials: 'WW',
    name: 'Wade Warren',
    email: 'wade.warren@gmail.com',
    address: '5331 Rexford Court, Montgomery AL 36116',
  },
  {
    initials: 'BS',
    name: 'Brooklyn Simmons',
    email: 'brooklyn.simmons@gmail.com',
    address: '2325 Eastridge Circle, Moore OK 73160',
  },
  {
    initials: 'RF',
    name: 'Robert Fox',
    email: 'robert.fox@gmail.com',
    address: '2436 Naples Avenue, Panama City FL 32405',
  },
  {
    initials: 'DR',
    name: 'Dianne Russell',
    email: 'dianne.russell@gmail.com',
    address: '6095 Terry Lane, Golden CO 80403',
  },
  {
    initials: 'RE',
    name: 'Ralph Edwards',
    email: 'ralph.edwards@gmail.com',
    address: '4001 Anderson Road, Nashville TN 37217',
  },
  {
    initials: 'TW',
    name: 'Theresa Webb',
    email: 'theresa.webb@gmail.com',
    address: '19141 Pine Ridge Circle, Anchorage AK 99516',
  },
  {
    initials: 'AM',
    name: 'Arlene McCoy',
    email: 'arlene.mccoy@gmail.com',
    address: '2613 Cottonwood Street, Anchorage AK 99508',
  },
]

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
   
        {Acustumers.map((customer, index) => (
          <tr key={index} className="border-b hover:bg-gray-100 transition hover:-translate-y-1 hover:scale-110 duration-500">
            <td className='px-[6px] py-[16px]'>
              <div className="bg-[#F0F1FF] w-[48px] h-[48px] relative rounded-[4px] ml-[47px]">
                <div className="text-[#4078FF] absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                  {customer.initials}
                </div>
              </div>
            </td>
            <td className="text-[#5C5F6A] py-3 px-6">{customer.name}</td>
            <td className="text-[#5C5F6A] py-3 px-6">{customer.email}</td>
            <td className="text-[#5C5F6A] py-3 px-6">{customer.address}</td>
            <td className='py-6 px-3 ml-[28px]'>
              <img src="/images/adots.svg" alt="" />
            </td>
          </tr>
        ))}
      </tbody>
   
</table>
  )
};

export default CustumersTable;