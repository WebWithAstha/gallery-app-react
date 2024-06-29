import React from 'react'

const VerticalNav = () => {
  return (
    <>

<div className="left w-[10%] p-10 h-full sticky top-0">

    <div className='bg-[#e8eddf]/[.5] w-full mb-10 p-2 py-3 flex items-center justify-center rounded-xl backdrop-blur-lg'>
      <div className='w-14 h-14 p-3 shadow-inner flex items-center justify-center rounded-xl bg-[#333533]'>
      <img className='w-full object-contain invert' src="https://cdn-icons-png.flaticon.com/128/69/69524.png" alt="" />
      </div>
  
      </div>
    <div className='bg-[#e8eddf]/[.5] w-full p-4 gap-6 px-4 rounded-xl flex flex-col items-center justify-center h-full backdrop-blur-lg'>
      <div className='w-16 h-16 p-3 shadow-inner flex items-center justify-center rounded-xl bg-[#333533]'>
      <img className='w-full object-contain invert' src="https://cdn-icons-png.flaticon.com/128/9261/9261193.png" alt="" />
      </div>
      <div className='w-16 h-16 p-3 shadow-inner flex items-center justify-center rounded-xl bg-[#333533]'>
      <img className='w-full object-contain invert' src="https://cdn-icons-png.flaticon.com/128/5761/5761917.png" alt="" />

      </div>

    </div>
    </div>

    </>
  )
}

export default VerticalNav