import React from 'react'
import Navbar from '../components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import PSm from '../components/paragraphs/P_Sm'
const RootLayout = () => {
  return (
    <div>
    <Navbar/>
    <div className='w-full bg-gray-200 border '>
        <div className='flex justify-between  items-center w-[95%] mx-auto'>
          <button className='border border-colorNav rounded-lg p-1'><PSm >Student Homepage</PSm></button>
          <PSm>1 of 2 </PSm>
        </div>
      </div>
    <Routes>
    <Route index element={<Home />} />
    </Routes>

    </div>
  )
}

export default RootLayout