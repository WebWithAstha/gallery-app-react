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
      <input onKeyDown={e => e.code === "Enter" ? NavigateToSearch() : ''} onChange={e => setquery(e.target.value)} value={query ? query : ''} placeholder='Search media' className="w-full px-2 placeholder:text-lime-960 placeholder:font-bold placeholder:opacity-55 bg-transparent outline-none  h-full p-2" />
      <button onClick={NavigateToSearch} className="btn flex items-center justify-center px-2 cursor-pointer">
        <img className='w-8 object-contain' src="https://cdn-icons-png.flaticon.com/128/15582/15582721.png" alt="" />
      </button>
    </>
  )
}

export default SearchBox