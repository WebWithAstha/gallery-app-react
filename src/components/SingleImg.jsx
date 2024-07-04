import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import Axios from '../utils/Axios'

const SingleImg = () => {
    const { id } = useParams()
    const [img, setimg] = useState(null)
    const {pathname} = useLocation()

    const getImg = async () => {
        const { data } = await Axios.get(`/photos/${id}`)
        setimg(data)
    }
    useEffect(() => {
        getImg()
    }, [])


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

    return (
        img ?

            <div className='w-full h-screen fixed z-[99] top-0 left-0 bg-black/[.7] pt-16 scrollbar-hid overflow-y-auto xl:py-10'>
                <Link to={pathname.split('/media')[0] || '/'}>
                <button className='xl:w-12 w-8 xl:h-12 h-8 absolute top-2 xl:top-8 left-4 xl:left-8 p-2.5 xl:p-4 bg-zinc-200 rounded-full overflow-hidden'>
                    <img className='w-full h-full object-cover pointer-events-none' src="https://cdn-icons-png.flaticon.com/128/1828/1828747.png" alt="" />
                </button>
                </Link>
                <div className="wrapper bg-[#ecede0] xl:w-[60rem] mx-auto rounded-lg py-4">
                    <div className="top w-full flex justify-between px-4">
                        <div className="flex items-center gap-1">
                            <div className="xl:w-10 w-8 xl:h-10 h-8 rounded-full bg-yellow-800"></div>
                            <h1 className='p-2 font-bold'>{img.photographer}</h1>
                        </div>
                        <button onClick={e=>downloadImage(img.src.large2x,`img${img.id}_from_astha_gallery_app`)} className='bg-emerald-500 h-max text-white rounded-lg px-8 py-2'>Download</button>
                    </div>
                    <div className="img w-full xl:mb-0 mb-10 h-fit mt-4 flex items-center justify-center">
                        <img className="h-full xl:h-[80vh] object-contain" src={img && img.src.large2x} alt="" />
                    </div>
                </div>
            </div>
            : "No img"
    )
}

export default SingleImg