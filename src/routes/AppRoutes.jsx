import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home';
import About from '../components/About';
import NotFound from '../components/NotFound';
import Search from '../components/Search';
// import GridBox from '../components/GridBox';


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes