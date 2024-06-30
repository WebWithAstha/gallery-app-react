import React from 'react'

const HeroRight = () => {
  return (
    <div id='hero-rgt' className=" flex-1 h-full overflow-hidden bg-[#e8eddf]/[.8] rounded-lg p-6">
    <div className="tags flex gap-4 ">
        <h1 className='bg-[#e8eddf]/[.8] p-2 px-6 hover:bg-lime-800 hover:text-lime-50 transition-colors duration-300 cursor-pointer font-medium rounded-xl backdrop-blur-lg'> Trending </h1>
        <h1 className='bg-[#e8eddf]/[.8] p-2 px-6 hover:bg-lime-800 hover:text-lime-50 transition-colors duration-300 cursor-pointer font-medium rounded-xl backdrop-blur-lg'> Nature </h1>
        <h1 className='bg-[#e8eddf]/[.8] p-2 px-6 hover:bg-lime-800 hover:text-lime-50 transition-colors duration-300 cursor-pointer font-medium rounded-xl backdrop-blur-lg'> Wallpapers </h1>
    </div>
    <div className="bg-[#e8eddf]/[.8] p-6 w-[50%] mt-6 h-56 rounded-lg">
    <h1 className='text-2xl font-semibold '>Start easy find.</h1>
    <div className="center w-full mt-4  flex shadow-inner bg-[#e8eddf] rounded-lg px-2 py-1">
            <input placeholder='Search media' className="w-full placeholder:text-lime-960 placeholder:font-bold placeholder:opacity-55 bg-transparent outline-none  h-full p-2" />
            <img className='w-8 object-contain opacity-45' src="https://cdn-icons-png.flaticon.com/128/15582/15582721.png" alt="" />
          </div>
          <p className='mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, quaerat?</p>
    </div>
      </div>
  )
}

export default HeroRight