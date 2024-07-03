import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBox = () => {

  const navigate = useNavigate()

  const [query, setquery] = useState(null)

  const NavigateToSearch = ()=>{
    if(query && query.length > 0){
      navigate(`/search/${query}`)
    }
  }

  return (
    <>
      <input onKeyDown={e => e.code === "Enter" ? NavigateToSearch() : ''} onChange={e => setquery(e.target.value)} value={query ? query : ''} placeholder='Search media' className="w-full px-2 placeholder:text-[#333533] placeholder:font-medium placeholder:opacity-90 bg-transparent outline-none  h-full p-2" />
      <button onClick={NavigateToSearch} className="btn group hover:bg-[#333533] rounded-full duration-300 flex items-center justify-center px-3 cursor-pointer">
        <img className='w-8 object-contain pointer-events-none group-hover:invert duration-300' src="https://cdn-icons-png.flaticon.com/128/15582/15582721.png" alt="" />
      </button>
    </>
  )
}

export default SearchBox