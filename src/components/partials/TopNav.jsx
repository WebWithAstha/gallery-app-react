import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import SearchBox from './SearchBox'




const TopNav = () => {


  const navigate = useNavigate()

  const navigateToHome = () => {
    localStorage.setItem('page',0)
    navigate('/')
  }

  return (
    <div className='relative lg:py-10 w-full'>
      <div className=' bg-[#e8eddf]/[.6] w-full p-4 gap-6 lg:rounded-xl flex items-center justify-between backdrop-blur-lg'>
        <div onClick={navigateToHome} className="logo cursor-pointer w-1/3 flex items-center gap-1 font-black justify-start">
          <h1 className='leading-none uppercase gil-bold italic'>Media Finder</h1>
        </div>
        <div className="center px-2 w-full sticky top-0 lg:relative lg:w-1/3 h-full flex bg-[#e8eddf] rounded-full py-1">
          <SearchBox />
        </div>
        <div className="rgt hidden w-1/3 h-full lg:flex justify-end gap-4">
          <Link to="/about">
            <h1 className='cursor-pointer font-semibold px-4 py-1 hover:bg-[#333533] hover:text-[#e8eddf] duration-300 gil-bold rounded-lg'>About</h1>
          </Link>
          <Link to="/contact">
            <h1 className='cursor-pointer font-semibold px-4 py-1 hover:bg-[#333533] hover:text-[#e8eddf] duration-300 gil-bold rounded-lg'>Contact</h1>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopNav