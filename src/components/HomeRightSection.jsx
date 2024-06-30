import React from 'react'
import HorizontalNav from './navComponents/HorizontalNav'
import HeroLayout from './heroComponents/HeroLayout'
import GalleryContainer from './GalleryContainer'

const HomeRightSection = () => {
  return (
    <div className="rgt relative w-[90%] pr-10 h-full">   
    <HorizontalNav/>
    <HeroLayout/>
    <GalleryContainer/>

          
        </div>
  )
}

export default HomeRightSection