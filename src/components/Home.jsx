import React from 'react'
import Nav from './navComponents/HorizontalNav'
import VerticalNav from './navComponents/VerticalNav'
import HomeRightSection from './HomeRightSection'
import axios from 'axios'

const Home = () => {
  const api_key = 'CejIshlhqvkfmI5RFME6eSJ1BvBzR8NV79ZxvxAHNgx8gL9E4F44Sh3o'

  return (
    <div className='w-full pb-20 text-[#333533] min-h-screen relative z-[1] bg-[#cfdbd5]'>
      <img className='w-full h-full fixed top-0 left-0 object-cover' src="https://plus.unsplash.com/premium_photo-1706430433638-b9f3183a496e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      {/* <img className='w-full h-full fixed top-0 left-0 object-cover' src="https://plus.unsplash.com/premium_photo-1706430433571-51d217d6ab6a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
      <div className="flex w-full h-full relative">
        <VerticalNav/>
        <HomeRightSection/>



        
        
      </div>


    </div >
  )
}

export default Home