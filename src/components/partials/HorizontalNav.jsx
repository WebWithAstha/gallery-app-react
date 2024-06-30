import React, { useEffect, useState } from 'react'
import Axios from '../../utils/Axios'
import { Link, Navigate, useNavigate } from 'react-router-dom'




const HorizontalNav = () => {
  const navigate = useNavigate()

  const [query, setquery] = useState(null)
  console.log(query)


  const NavigateToSearch = ()=>{
    console.log("hey wow")
    if(query && query.length > 0){
      navigate(`/search/${query}`)
    }
  }


  


  return (
    <div className=' py-10 w-full '>
            <div className=' bg-[#e8eddf]/[.5] w-full p-4 gap-6 rounded-xl flex items-center justify-between backdrop-blur-lg'>
            <div className="logo w-1/3 flex items-center gap-1 font-black justify-start">
              <img className='w-8' src="https://cdn-icons-png.flaticon.com/128/12727/12727661.png" alt="" />
              <h1 className=''>FotoFlow</h1>
            </div>
              <div className="center w-1/3 h-full flex border-2 shadow-inner bg-transparent border-[#7c7e7b] rounded-lg py-1">
                <input onKeyDown={e=>e.code === "Enter"? NavigateToSearch() :''} onChange={e=>setquery(e.target.value)} placeholder='Search media' className="w-full px-2 placeholder:text-lime-960 placeholder:font-bold placeholder:opacity-55 bg-transparent outline-none  h-full p-2" />
                <button onClick={NavigateToSearch} className="btn flex items-center justify-center px-2 cursor-pointer">
                <img className='w-8 object-contain' src="https://cdn-icons-png.flaticon.com/128/15582/15582721.png" alt="" />
                </button>
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