import React from 'react'
import { Link } from 'react-router-dom'

const VerticalNav = () => {
  return (
    <>

<div className="left w-[10%] p-10 h-full sticky top-0">

   
    <div className=' w-full py-2 gap-20 rounded-xl flex flex-col items-center justify-center h-full'>
      <Link to="/">
      <div className='w-16 h-16 p-3 shadow-inner flex items-center justify-center rounded-xl bg-[#333533]'>
      <img className='w-full object-contain invert' src="https://cdn-icons-png.flaticon.com/128/69/69524.png" alt="" />
      </div>
      </Link>

    <div className="btm bg-[#e8eddf]/[.5] py-10 px-2 rounded-lg">

      <div className='w-16 h-16 p-3 mb-10 shadow-inner flex items-center justify-center rounded-xl bg-[#333533]'>
      <img className='w-full object-contain invert' src="https://cdn-icons-png.flaticon.com/128/9261/9261193.png" alt="" />
      </div>
      <div className='w-16 h-16 p-3 shadow-inner flex items-center justify-center rounded-xl bg-[#333533]'>
      <img className='w-full object-contain invert' src="https://cdn-icons-png.flaticon.com/128/5761/5761917.png" alt="" />

      </div>
    </div>

    </div>
    </div>

    </>
  )
}

export default VerticalNav