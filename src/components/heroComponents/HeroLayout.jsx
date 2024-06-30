import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight.jsx'

const HeroLayout = () => {
  return (
    <div id='hero' className='relative mb-10 w-full flex gap-8
          '>
          <HeroLeft/>
          <HeroRight/>

          </div>
  )
}

export default HeroLayout