import React from 'react'

const PayoutCard = ({title, orderCount, amount}) => {
  return (
<div class="bg-blue-500 text-white sm:w-98 w-154 h-35 flex flex-col justify-between rounded shadow-lg">
    <div className='flex flex-col justify-center'> 
        <div className='flex pl-5 pt-4'>
            Next payout
        <div className='ml-2 mt-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"></path>
            </svg>
            </div>
        </div>
        <div className='flex justify-between pt-2 pl-5'>
            <div className='font-semibold text-3xl'>₹ 92,312.20</div>
            <div className='flex underline text-base mr-4   '>23 order(s) 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                       <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    </div>
        </div>
    </div> 
    
    <div class="flex sm:justify-around justify-between rounded bg-blue-700 sm:w-98 w-154 py-2">
        <div className='pr-15 sm:pl-0 pl-5'>Next payout date:</div>
        <div className='sm:pr-0 pr-6'>Today, 04:00 PM</div>
    </div>
</div>

  )
}

export default PayoutCard