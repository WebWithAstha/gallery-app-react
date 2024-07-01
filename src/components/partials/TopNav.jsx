import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'




const HorizontalNav = () => {
  const navigate = useNavigate()

  const [query, setquery] = useState(null)


  const NavigateToSearch = ()=>{
    if(query && query.length > 0){
      navigate(`/search/${query}`)
    }
  }


  


  return (
    <div className=' py-10 w-full '>
            <div className=' bg-[#e8eddf]/[.5] w-full p-4 gap-6 rounded-xl flex items-center justify-between backdrop-blur-lg'>
            <div className="logo w-1/3 flex items-center gap-1 font-black justify-start">
              <h1 className=''>Media Finder</h1>
            </div>
              <div className="center w-1/3 h-full flex border-2 shadow-inner bg-transparent border-[#7c7e7b] rounded-lg py-1">
                <input onKeyDown={e=>e.code === "Enter"? NavigateToSearch() :''} onChange={e=>setquery(e.target.value)} value={query?query:''} placeholder='Search media' className="w-full px-2 placeholder:text-lime-960 placeholder:font-bold placeholder:opacity-55 bg-transparent outline-none  h-full p-2" />
                <button onClick={NavigateToSearch} className="btn flex items-center justify-center px-2 cursor-pointer">
                <img className='w-8 object-contain' src="https://cdn-icons-png.flaticon.com/128/15582/15582721.png" alt="" />
                </button>
              </div>
              <div className="center w-1/3 h-full flex justify-end gap-4">
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

export default HorizontalNav