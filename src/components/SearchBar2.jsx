import React from 'react'

const SearchBar2 = () => {
  return (
    <div class="flex items-center bg-gray-100 rounded h-10 p-3 mr-28 ml-10 mt-9 w-96 border border-gray-300">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
    stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
    <path stroke-linecap="round" stroke-linejoin="round" 
      d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 3 10.5a7.5 7.5 0 0 0 13.65 6.15z" />
  </svg>
  <input type="text" placeholder="Order ID or transaction ID" 
    class="outline-none w-full bg-transparent pl-3 text-gray-500 placeholder-gray-400" />
</div>
  )
}

export default SearchBar2