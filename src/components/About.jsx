import React from 'react'

const About = () => {
  return (
    <div className=' bg-[#e8eddf]/[.5] w-full h-screen flex flex-col items-center justify-center overflow-hidden'>
      <img className='w-56 mb-8 object-cover' src="https://cdn-icons-png.flaticon.com/512/14032/14032652.png" alt="" />
      <p className='font-black lg:mt-4 lg:text-4xl'>Hello amigos! Astha Lodhi this side.</p>
      <p className='font-black lg:mt-4 lg:text-4xl'>Thanks for visiting.❤️</p>
      <div className="flex items-center justify-center mt-6 gap-8">

    <a href="https://github.com/WebWithAstha/gallery-app-react">
      <img className='w-14 mb-8 object-cover cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/270/270798.png" alt="" />
    </a>
    <a href="https://www.linkedin.com/in/astha-lodhi-266692278/">
      <img className='w-14 mb-8 object-cover cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/2504/2504923.png" alt="" />
    </a>
      </div>


    
    </div>
  )
}

export default About