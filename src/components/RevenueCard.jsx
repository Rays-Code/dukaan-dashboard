import React from 'react'

const RevenueCard = ({title, orderCount, amount}) => {
  return (
    <div className='bg-white h-30 sm:w-98 w-154 rounded shadow-md p-5'>
        <div className='flex items-center text-gray-700'>
            {title}     

            <div className='ml-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"></path>
            </svg>
            </div>
        </div>
        <div className='flex justify-between font-semibold text-3xl pt-2'>
            <div>
                ₹ {amount}
            </div>
            <div>
                {orderCount? <div className='flex text-blue-700 underline text-base'>
                    <div>
                        {orderCount} order(s)
                        </div>

                
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                       <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                    

                </div> : null}
            </div>
        </div>
    </div>
  )
}

export default RevenueCard