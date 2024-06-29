import React from 'react'
import abstractImg from '../assets/triangles-png-46454-removebg.png'

const HeroLayout = () => {
  return (
    <div id='hero' className='relative mb-10 w-full flex gap-8
          '>
          <div id='hero-lft' className="w-[30rem] bg-[#e8eddf]/[.5] flex justify-between overflow-hidden p-10 gap-6 rounded-xl backdrop-blur-lg">
            <img className='w-40 object-contain rotate-90 h-full' src={abstractImg} alt="" />
            <div className='p-4'>
              <h1 className='text-4xl mb-2 font-bold'>Free Images</h1>
              <p>The internet’s source for visuals. <br />
                Powered by creators everywhere.</p>
            </div>
          </div>
          <div id='hero-lft' className=" flex-1 h-full flex gap-4 overflow-hidden ">
            <h1 className='bg-[#e8eddf]/[.8] p-2 rounded-xl backdrop-blur-lg'> Trending </h1>
            <h1 className='bg-[#e8eddf]/[.8] p-2 rounded-xl backdrop-blur-lg'> Nature </h1>
            <h1 className='bg-[#e8eddf]/[.8] p-2 rounded-xl backdrop-blur-lg'> Wallpapers </h1>
          </div>

          </div>
  )
}

export default HeroLayout