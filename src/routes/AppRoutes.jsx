import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'
import About from '../components/About'
import Search from '../components/search/Search'
import NotFound from '../components/NotFound'
import SingleImg from '../components/SingleImg'
// import GridBox from '../components/GridBox';


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/media/:id" element={<SingleImg />} />
        <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default AppRoutes