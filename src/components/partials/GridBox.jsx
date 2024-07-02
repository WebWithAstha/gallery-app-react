import React, { useEffect, useState } from 'react'

import LoadingImg from './LoadingImg'
import { Link } from 'react-router-dom'

const GridBox = ({images,page,setpage,unseenPages, orientation}) => {
  
  

  return (images.length > 0 ? 
    <>
    <div className=' bg-[#e8eddf]/[.5] w-full p-6 xl:p-10 gap-6 xl:rounded-xl grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  backdrop-blur-lg'>
      {images.map((img, index) => {
        return (
          <div key={index} className={`img h-fit shrink-0 ${orientation === 'landscape'? 'xl:h-56':'xl:h-96'} xl:h-96 rounded-xl bg-[#b5b6ac] overflow-hidden`}>
            <img style={{backgroundColor:img.avg_color}} className={`w-full xl:h-full object-contain xl:object-cover bg-[${img.avg_color}]`} src={img.src.large2x} alt="" />
          </div>
        )
      })      
    }
  
    </div>
    <div className="pages w-full px-8 xl:px-12 flex justify-between mt-4 sticky bottom-4">
      <button onClick={e=>page >1 ?setpage(page-1) :''} className={`${page === 1?'hidden':''} bg-[#e8eddf] px-6 py-1.5 rounded-lg uppercase font-medium`}>prev </button>
      <button onClick={e=>page >0 ?setpage(page+1) :''} className={`${unseenPages === 0?'hidden':''} bg-[#e8eddf] px-6 py-1.5 rounded-lg uppercase font-medium ml-auto`}>next </button>
    </div>
    </>
   : 
   <LoadingImg/>)
}

export default GridBox