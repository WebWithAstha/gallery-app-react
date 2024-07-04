import React, { useEffect, useState } from 'react'

import LoadingImg from './LoadingImg'
import { Link, useLocation } from 'react-router-dom'
import Card from './Card'

const GridBox = ({images,page,setpage,unseenPages, orientation}) => {
  

  const {pathname} = useLocation()

  const downloadImage = (url, filename) => {
    fetch(url)
      .then(res => res.blob())
      .then(blob => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = filename;
        a.click();
        URL.revokeObjectURL(a.href);
      })
      .catch(err => console.error('Error while downloading the image', err));
  };

  return (images.length > 0 ? 
    <>
    <div className=' bg-[#e8eddf]/[.5] w-full p-6 lg:p-10 gap-6 lg:rounded-xl grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  backdrop-blur-lg'>
      {images.map((img, index) => {
        return (
          <Link key={index} to={`${pathname !== '/' ?pathname:''}/media/${img.id}`}>
          <Card img={img} orientation={orientation}/>
          </Link>
        )
      })      
    }
  
    </div>
    <div className="pages w-full px-8 xl:px-12 flex justify-between mt-4 sticky bottom-4">
      <button onClick={e=>page >1 ?setpage(page-1) :''} className={`${page === 1?'hidden':''} bg-[#e8eddf] hover:bg-[#333533] hover:text-[#e8eddf] duration-300 px-6 py-1.5 rounded-lg uppercase font-bold`}>prev </button>
      <button onClick={e=>page >0 ?setpage(page+1) :''} className={`${unseenPages === 0?'hidden':''} bg-[#e8eddf] hover:bg-[#333533] hover:text-[#e8eddf] duration-300 px-6 py-1.5 rounded-lg uppercase font-bold ml-auto`}>next </button>
    </div>
    </>
   : 
   <LoadingImg/>)
}

export default GridBox