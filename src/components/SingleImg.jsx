import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Axios from '../utils/Axios'

const SingleImg = () => {
    const { id } = useParams()
    const [img, setimg] = useState(null)

    const getImg = async () => {
        const { data } = await Axios.get(`/photos/${id}`)
        console.log(data)
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

            <div className='w-full h-screen relative bg-[#ecede0]/[.5] py-10'>
                <img className='w-full h-full z-[-1] fixed top-0 left-0 object-cover brightness-50 contrast-125' src="https://plus.unsplash.com/premium_photo-1706430433638-b9f3183a496e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <Link to="/">
                <button className='w-12 h-12 absolute top-8 left-8 p-4 bg-zinc-200 rounded-full overflow-hidden'>
                    <img className='w-full h-full object-cover pointer-events-none' src="https://cdn-icons-png.flaticon.com/128/1828/1828747.png" alt="" />
                </button>
                </Link>
                <div className="wrapper bg-[#ecede0] w-[60rem] mx-auto rounded-lg py-4">
                    <div className="top w-full flex justify-between px-4">
                        <div className="flex items-center gap-1">
                            <div className="w-10 h-10 rounded-full bg-yellow-800"></div>
                            <h1 className='p-2 font-bold'>{img.photographer}</h1>
                        </div>
                        <button onClick={e=>downloadImage(img.src.large2x,`img${img.id}_from_astha_gallery_app`)} className='bg-emerald-500 text-white rounded-lg px-8 py-2'>Download</button>
                    </div>
                    <div className="img w-full h-fit mt-4 flex items-center justify-center">
                        <img className="h-full xl:h-[80vh] object-contain" src={img && img.src.large2x} alt="" />
                    </div>
                </div>
            </div>
            : "No img"
    )
}

export default SingleImg