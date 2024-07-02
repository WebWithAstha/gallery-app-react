import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

const HeroLayout = () => {
  return (
    <div id='hero' className='relative xl:mb-10 w-full flex xl:flex-row flex-col-reverse xl:gap-8'>
         
         <HeroLeft/>
          <HeroRight/>
    </div>
  )
}

export default HeroLayout