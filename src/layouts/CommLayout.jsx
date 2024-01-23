import React from 'react'
import Navbar from '../components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Communication from '../pages/Communication/Communication'
import PSm from '../components/paragraphs/P_Sm'

const CommLayout = () => {
  return (
    <div>
   <Navbar pageTitle={'My Communications'} />
    <div className='w-full bg-color1 border '>
        <div className='flex justify-between  items-center w-[95%] mx-auto'>
          <PSm>Nehash Sayantharaja</PSm>
       
        </div>
      </div>
    <Routes>
    <Route index element={<Communication/>} />
    </Routes>

    </div>
  )
}

export default CommLayout