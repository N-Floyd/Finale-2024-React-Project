import React from 'react'

const Arewievs = [
    {
        initials: 'EH',
        name: 'Esther Howard',
        review: 'Completed the task and added the required documentation, can someone please ....',
      },
      {
        initials: 'WW',
        name: 'Wade Warren',
        review: 'Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers.',
      },
      {
        initials: 'BS',
        name: 'Brooklyn Simmons',
        review: 'Twenty 30-second applications within half an hour is well in excess.',
      },
      {
        initials: 'RF',
        name: 'Robert Fox',
        review: 'An interesting implication of the 2007 study concerns the use of hand sanitizers.',
      },
      {
        initials: 'DR',
        name: 'Dianne Russell',
        review: 'I found a 2007 study on effects of hand sanitizers on blood alcohol level in adults. ',
      },
      {
        initials: 'RE',
        name: 'Ralph Edwards',
        review: 'The principal alcohol in Purell hand sanitizer (to take the most talked-about brand) ',
      },
      {
        initials: 'TW',
        name: 'Theresa Webb',
        review: 'Alcohol based exposures through inadvertently consuming hand sanitize',
      },
      {
        initials: 'AM',
        name: 'Arlene McCoy',
        review: 'I`m grateful for the supportive work environment during personal challenges.',
      },
];

const ReviewsTable = () => {
  return (
    <table className="mt-[24px] w-[1069px]">
    <thead className='border-t border-b'>
        <tr className="text-[#5C5F6A]">
            <img className='p-2 ml-[50px]' src="/images/a1sort.svg" alt="" />
            <th className="text-[#5C5F6A] py-3 px-6 text-left">Name</th>
            <th className="text-[#5C5F6A] py-3 px-6 text-left">Review</th>
            <th className="text-[#5C5F6A] py-3 px-6 text-left">Action</th>
        </tr>
    </thead>
    <tbody className="text-[14px]">
   
        {Arewievs.map((review, index) => (
          <tr key={index} className="border-b hover:bg-gray-100 transition hover:-translate-y-1 hover:scale-110 duration-500">
            <td className='px-[6px] py-[16px]'>
              <div className="bg-[#F0F1FF] w-[48px] h-[48px] relative rounded-[4px] ml-[47px]">
                <div className="text-[#4078FF] absolute mt-[50%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                  {review.initials}
                </div>
              </div>
            </td>
            <td className="text-[#5C5F6A] py-3 px-6">{review.name}</td>
            <td className="text-[#5C5F6A] py-3 px-6">{review.review}</td>
            <td className='py-6 px-3 ml-[28px]'>
              <img src="/images/adots.svg" alt="" />
            </td>
          </tr>
        ))}
      </tbody>
</table>
  )
};

export default ReviewsTable;