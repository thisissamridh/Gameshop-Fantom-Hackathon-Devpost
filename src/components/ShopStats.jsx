import React from 'react'

const ShopStats = ({ stats }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center p-5">
      <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
        <span className=" text-lg font-bold text-white leading-5">
          {stats.products}
        </span>
        <span className='font-extrabold text-transparent text-lg bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600' >Products</span>
      </div>
      <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
        <span className="text-lg font-bold text-white leading-5">
          {stats.sellers}
        </span>
        <span className='font-extrabold text-transparent text-lg bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Sellers</span>
      </div>
      <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
        <span className="text-lg font-bold text-white leading-5">
          {stats.sales}
        </span>
        <span className='font-extrabold text-transparent text-lg bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Sales</span>
      </div>
    </div>
  )
}

export default ShopStats
