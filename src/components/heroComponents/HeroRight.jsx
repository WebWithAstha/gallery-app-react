import React from 'react'
import { Link } from 'react-router-dom'
import SearchBox from '../partials/SearchBox'

const HeroRight = () => {

  const tags = ['hero','trending','hey','nature','wallpapers','planet','animals','love','food','species']

  return (
    <div id='hero-rgt' className=" flex-1 h-full overflow-hidden xl:bg-[#bdbfb2]/[.97] xl:rounded-lg p-6">
              <h1 className='text-4xl mb-4 font-bold'>Quick Searches</h1>

    <div className="tags flex flex-wrap gap-4 ">
      {tags.map((tag, index) => (
        <Link to={`/search/${tag}`}>
        <h1 key={index} className='bg-[#e8eddf]/[.8] p-2 px-6 hover:bg-[#333533] hover:text-[#e8eddf] duration-300 rounded-lg cursor-pointer font-medium backdrop-blur-lg'>{tag}</h1>
        </Link>
      ))}
      </div>
      </div>
  )
}

export default HeroRight