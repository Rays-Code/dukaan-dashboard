import React from 'react'

const StatusGrid = () => {
  return (
    <div className='flex flex-col justify-around sm:gap-6 gap-1 sm:pl-43 pl-12 sm:text-sm text-xs'>
        <div className='flex gap-2 items-center'>
         <div class="h-2.5 w-2.5 rounded-full bg-green-500"></div>
         <div>Successful</div>
        </div>
        <div className='flex gap-2 items-center'>
         <div class="h-2.5 w-2.5 rounded-full bg-gray-400"></div>
         <div>Processing</div>
        </div>
        <div className='flex gap-2 items-center'>
         <div class="h-2.5 w-2.5 rounded-full bg-red-500"></div>
         <div>Failed</div>
        </div>
        <div className='flex gap-2 items-center'>
         <div class="h-2.5 w-2.5 rounded-full bg-green-500"></div>
         <div>Successful</div>
        </div>
        <div className='flex gap-2 items-center'>
         <div class="h-2.5 w-2.5 rounded-full bg-green-500"></div>
         <div>Successful</div>
        </div>

    </div>
  )
}

export default StatusGrid