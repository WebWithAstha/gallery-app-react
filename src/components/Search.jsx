import React, { useEffect, useState } from 'react'
import VerticalNav from './partials/VerticalNav'
import HomeRightSection from './HomeRightSection'
import HorizontalNav from './partials/HorizontalNav'
import { useParams } from 'react-router-dom'
import Axios from '../utils/Axios'
import LoadingImg from './LoadingImg'
import Filter from './Filter'

const Search = () => {
    const { query } = useParams()

    const [images, setimages] = useState([])
    const [page, setpage] = useState(1)

    const getSearchedImages = async () => {
        const { data } = await Axios.get(`/search?query=${query}&page=${page}&per_page=15`)
        setimages(data.photos)
    }

    useEffect(() => {
        getSearchedImages()
    }, [query,page])




    return (
        <div className='w-full pb-20 text-[#333533] min-h-screen relative z-[1] bg-[#cfdbd5]'>
            <img className='w-full h-full fixed top-0 left-0 object-cover brightness-75 contrast-125' src="https://plus.unsplash.com/premium_photo-1706430433638-b9f3183a496e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="flex w-full h-full relative">
                <VerticalNav />
                <div className="right flex-1 pr-10">
                    <HorizontalNav />


                    {images && images.length >0 ?
                    <>
                    <Filter/>
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
                        <button onClick={e => page > 1 ? setpage(page - 1) : console.log(page)} className='bg-[#e8eddf] px-6 py-1.5 rounded-lg uppercase font-medium'>prev </button>
                        <button onClick={e => page > 0 ? setpage(page + 1) : console.log(page)} className='bg-[#e8eddf] px-6 py-1.5 rounded-lg uppercase font-medium'>next </button>
                    </div>

                    </>
                        :<LoadingImg />}
                </div>







            </div>


        </div >
    )
}

export default Search