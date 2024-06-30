import React, { useEffect, useState } from 'react'
import Axios from '../utils/Axios'
import LoadingImg from './LoadingImg'

const GalleryContainer = () => {

  const [images, setimages] = useState([])
  const [page, setpage] = useState(0)

  const getImg = async () => {
    const { data } = await Axios.get(`/curated?page=${page}&per_page=20`)
    setimages(data.photos)
    console.log(data.photos[0])
  }

  useEffect(() => {
    getImg()
  }, [page])
  


  return (images.length > 0 ? 
    <>
    <div className=' bg-[#e8eddf]/[.5] w-full p-10 gap-6 rounded-xl grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  backdrop-blur-lg'>

      {images.map((img, index) => {
        return (
          <div key={index} className={`img h-96 rounded-xl bg-[${img.avg_color}] overflow-hidden`}>
            <img className='w-full h-full object-cover' src={img.src.large2x} alt="" />
          </div>
        )
      })
      
      
    }
  
    </div>
    <div className="pages w-full px-12 flex justify-between mt-4 sticky bottom-4">
      <button onClick={e=>page >=1 ?setpage(page-1) :''} className='bg-[#e8eddf] px-6 py-1.5 rounded-lg uppercase font-medium'>prev </button>
      <button onClick={e=>page >=0 ?setpage(page+1) :''} className='bg-[#e8eddf] px-6 py-1.5 rounded-lg uppercase font-medium'>next </button>
    </div>
    </>
   : 
   <LoadingImg/>)
}

export default GalleryContainer