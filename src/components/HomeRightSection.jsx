import React, { useEffect, useState } from 'react'
import HorizontalNav from './partials/TopNav'
import HeroLayout from './heroComponents/HeroLayout'
import GridBox from './GridBox'
import Axios from '../utils/Axios'

const HomeRightSection = () => {

  const [images, setimages] = useState([])

  const [page, setpage] = useState(1)

 

  useEffect(() => {
    getImg()
  }, [page])
  


  const getImg = async () => {
    const { data } = await Axios.get(`/curated?page=${page}&per_page=20`)
    setimages(data.photos)
  }

  return (
    <div className="rgt relative w-[90%] pr-10 h-full">   
    <HorizontalNav/>
    <HeroLayout/>
    <GridBox images={images} page ={page} setpage = {setpage}/>    
    </div>
  )
}

export default HomeRightSection