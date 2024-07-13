import React from 'react'

const Card = ({img,orientation}) => {
  return (
    <div className={`img h-fit group shrink-0 relative ${orientation === 'landscape'? 'xl:h-[14rem] lg:h-[12rem] ':'md:h-96'} rounded-xl bg-[#b5b6ac] overflow-hidden`}>
            <div className="overlay flex items-center justify-end flex-col w-full h-full absolute group-hover:opacity-100 opacity-0 duration-300 pointer-events-none bg-gradient-to-b from-black/[.7] via-transparent to-black/[.7]">
            <div className="top w-full flex justify-between px-4 py-4 items-end">
                        <div className="flex items-center gap-[1px]">
                            <div className="w-8 h-8 shrink-0 rounded-full bg-yellow-900"></div>
                            <h1 className='p-2 font-bold text-[#e8eddf]'>{img.photographer.slice(0,10)}</h1>
                        </div>
                        <button onClick={e=>downloadImage(img.src.large2x,`img${img.id}_from_astha_gallery_app`)} className='bg-emerald-500 h-max text-white rounded-lg px-4 xl:px-8 py-2'>Download</button>
                    </div>
            </div>
            <img style={{backgroundColor:img.avg_color}} className={`w-full sm:h-full pointer-events-none object-contain md:object-cover xl:object-cover bg-[${img.avg_color}]`} src={img.src.large2x} alt="" />
          </div>
  )
}

export default Card