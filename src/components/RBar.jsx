import React from 'react'
import RevenueCard from './RevenueCard'
import PayoutCard from './PayoutCard'
import Navbar from './Navbar'
import Overview from './Overview'
import Chart from './Chart'
import Signature from './Signature'

const RBar = () => {
  return (
    <div className='flex flex-col bg-gray-100 sm:pl-4 sm:ml-52'>
        <Navbar />
        <Overview />
        <div className='grid grid-cols-1 sm:flex gap-8 p-6'>
        <PayoutCard />
        <RevenueCard title={'Amount Pending'} amount={'92,312.20'} orderCount={'13'}/>
        <RevenueCard title={'Amount Processed'} amount={'23,92,312.19'} />
    </div>

    <div className='text-xl font-medium ml-6'>
        Transactions | This Month
    </div>

    <div className='flex gap-3 mt-8 ml-6 h-5 items-center'>
    <div className="bg-gray-200 rounded-2xl text-gray-500 py-1.5 px-4">
       Payouts (22)
    </div>
    <div className="bg-blue-700 rounded-2xl text-white py-1.5 px-4">
       Refunds (6)
    </div>

    </div>

    <Chart />

    <Signature />


    </div>

  )
}

export default RBar