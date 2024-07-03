import React, { useEffect, useState } from 'react'

import LoadingImg from './LoadingImg'
import { Link } from 'react-router-dom'

const GridBox = ({images,page,setpage,unseenPages, orientation}) => {
  
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
    <div className=' bg-[#e8eddf]/[.5] w-full p-6 xl:p-10 gap-6 xl:rounded-xl grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  backdrop-blur-lg'>
      {images.map((img, index) => {
        return (
          <Link key={index} to={`/media/${img.id}`}>
          <div key={index} className={`img h-fit group shrink-0 relative ${orientation === 'landscape'? 'xl:h-56':'xl:h-96'} xl:h-96 rounded-xl bg-[#b5b6ac] overflow-hidden`}>
            <div className="overlay flex items-center justify-end flex-col w-full h-full absolute group-hover:opacity-0 opacity-1 duration-300 pointer-events-none bg-gradient-to-b from-black/[.7] via-transparent to-black/[.7]">
            <div className="top w-full flex justify-between px-4 py-4 items-end">
                        <div className="flex items-center gap-[1px]">
                            <div className="w-8 h-8 rounded-full bg-yellow-900"></div>
                            <h1 className='p-2 font-bold text-[#e8eddf]'>{img.photographer.slice(0,10)}</h1>
                        </div>
                        <button onClick={e=>downloadImage(img.src.large2x,`img${img.id}_from_astha_gallery_app`)} className='bg-emerald-500 h-max text-white rounded-lg px-8 py-2'>Download</button>
                    </div>
            </div>
            <img style={{backgroundColor:img.avg_color}} className={`w-full xl:h-full pointer-events-none object-contain xl:object-cover bg-[${img.avg_color}]`} src={img.src.large2x} alt="" />
          </div>
          </Link>
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