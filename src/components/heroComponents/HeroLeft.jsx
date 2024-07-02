import React from 'react'

import abstractImg from '../../assets/triangles-png-46454-removebg.png'


const HeroLeft = () => {
  return (
    <div id='hero-lft' className="xl:w-[30rem] xl:min-h-64 xl:bg-[#e8eddf]/[.5] text-[#e8eddf] overflow-hidden gap-0 xl:rounded-xl xl:backdrop-blur-lg">
            <img className='w-full xl:block hidden left-0 absolute object-cover' src={abstractImg} alt="" />
            <div className='w-full h-full relative xl:backdrop-blur-[2px] mb-8 xl:mb-0 px-4 xl:p-4 xl:rounded-lg flex flex-col justify-center items-center '>
              <h1 className='text-4xl mb-2 font-bold'>Free Images</h1>
              <p className=''>The internet’s source for visuals. <br />
                Powered by creators everywhere.</p>
            </div>
          </div>
  )
}

export default HeroLeft