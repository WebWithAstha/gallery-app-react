import React, { useEffect, useState } from 'react'
import Axios from '../utils/Axios'
import LoadingImg from './LoadingImg'

const GridBox = ({images,page,setpage,unseenPages}) => {
  
  

  return (images.length > 0 ? 
    <>
    <div className=' bg-[#e8eddf]/[.5] w-full p-10 gap-6 rounded-xl grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  backdrop-blur-lg'>
      {images.map((img, index) => {
        return (
          <div key={index} className={`img h-96 rounded-xl bg-[#b5b6ac] overflow-hidden`}>
            <img className={`w-full h-full object-cover bg-[${img.avg_color}]`} src={img.src.large2x} alt="" />
          </div>
        )
      })      
    }
  
    </div>
    <div className="pages w-full px-12 flex justify-between mt-4 sticky bottom-4">
      <button onClick={e=>page >1 ?setpage(page-1) :''} className={`${page === 1?'hidden':''} bg-[#e8eddf] px-6 py-1.5 rounded-lg uppercase font-medium`}>prev </button>
      <button onClick={e=>page >0 ?setpage(page+1) :''} className={`${unseenPages === 0?'hidden':''} bg-[#e8eddf] px-6 py-1.5 rounded-lg uppercase font-medium ml-auto`}>next </button>
    </div>
    </>
   : 
   <LoadingImg/>)
}

export default GridBox