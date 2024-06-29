import React, { useEffect, useState } from 'react'
import Axios from '../utils/Axios'

const GalleryContainer = () => {

  const [images, setimages] = useState([])

  const getImg = async () => {
    const { data } = await Axios.get('/curated')
    setimages(data.photos)
    console.log(data.photos[0])

  }

  useEffect(() => {
    getImg()
  }, [])
  


  return (
    <div className=' bg-[#e8eddf]/[.5] w-full p-10 gap-6 rounded-xl grid grid-cols-4  backdrop-blur-lg'>

      {images.map((img, index) => {
        return (
          <div key={index} className="img h-96 rounded-xl bg-lime-200 overflow-hidden">
            <img className='w-full h-full object-cover' src={img.src.large2x} alt="" />
          </div>
        )
      })}
      <div className="img h-96 rounded-xl bg-lime-200 overflow-hidden">
        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1718964312267-0397c0d57dd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>
  )
}

export default GalleryContainer