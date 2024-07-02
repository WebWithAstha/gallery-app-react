import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import SearchBox from './SearchBox'




const TopNav = () => {



  return (
    <div className='relative xl:py-10 w-full'>
      <div className=' bg-[#e8eddf]/[.6] w-full p-4 gap-6 xl:rounded-xl flex items-center justify-between backdrop-blur-lg'>
      <Link to="/">
        <div className="logo w-1/3 flex items-center gap-1 font-black justify-start">
          <h1 className=''>Media Finder</h1>
        </div>
      </Link>
        <div className="center w-full sticky top-0 xl:relative xl:w-1/3 h-full flex border-2 shadow-inner bg-transparent border-[#7c7e7b] rounded-lg py-1">
          <SearchBox />
        </div>
        <div className="rgt hidden w-1/3 h-full xl:flex justify-end gap-4">
          <Link to="/about">
            <h1 className='cursor-pointer'>About</h1>
          </Link>
          <Link to="/contact">
            <h1 className='cursor-pointer'>Contact</h1>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopNav