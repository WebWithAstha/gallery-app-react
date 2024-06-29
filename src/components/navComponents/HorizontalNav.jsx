import React from 'react'

const HorizontalNav = () => {
  return (
    <div className=' py-10 w-full '>
            <div className=' bg-[#e8eddf]/[.5] w-full p-4 gap-6 rounded-xl flex items-center justify-between backdrop-blur-lg'>
              <h1 className='w-1/3'>Logo</h1>
              <div className="center w-1/3 h-full flex border-2 shadow-inner bg-transparent border-[#a7a9a4] rounded-lg px-2 py-1">
                <input placeholder='Search media' className="w-full placeholder:text-lime-960 placeholder:font-bold placeholder:opacity-55 bg-transparent outline-none  h-full p-2" />
                <img className='w-8 object-contain' src="https://cdn-icons-png.flaticon.com/128/15582/15582721.png" alt="" />
              </div>
              <div className="center w-1/3 h-full flex justify-end gap-4">
                <h1>About</h1>
                <h1>Contact</h1>
              </div>
            </div>
          </div>
  )
}

export default HorizontalNav