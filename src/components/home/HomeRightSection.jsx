import React, { useEffect, useState } from 'react'
import TopNav from '../partials/TopNav'
import HeroLayout from '../heroComponents/HeroLayout'
import GridBox from '../partials/GridBox'
import Axios from '../../utils/Axios'


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
    <div className="rgt relative w-full xl:w-[90%] lg:pr-10 h-full">   
    <TopNav/>
    <HeroLayout/>
    <GridBox images={images} page ={page} setpage = {setpage}/>    
    </div>
  )
}

export default HomeRightSection