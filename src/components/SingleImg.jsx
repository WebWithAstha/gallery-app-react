import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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

    return (
        img ?

        <div className='w-full relative bg-[#b5b6ac] pb-20'>
            <div className="top w-full pt-4 flex justify-between px-4">

                <button className='bg-rose-500 text-white px-8 py-2'>Close</button>
                <button className='bg-emerald-500 text-white px-8 py-2'>Download</button>
            </div>
            <div className="img w-full h-fit mt-4 ">
                <img className="w-full object-contain"  src={img && img.src.large2x}  alt="" />
            </div>
            <h1 className='p-4 font-bold'>{img.photographer}</h1>
        </div>
        :"No img"
    )
}

export default SingleImg