import React from 'react'
import H2 from '../../components/headings/H2'
import PSm from '../../components/paragraphs/P_Sm'
import { Link } from 'react-router-dom'
const Minor = () => {
  return (
    <div className='p-4'>
        <div className='border-b'>
        <H2>Add a Minor</H2>
        <br />
        <PSm styles={' '}>Select the academic, Program to which you wish add a minor </PSm>
        <br />
        <PSm styles={'text-textcol2 '}>No Active Academic Programs</PSm>
        </div>
        <br />
        <PSm>You are not eligible to add a minor at this time</PSm>
        <br />
        <PSm>You may add a minor when you are ready to and have already applied to graduate</PSm>
        <br />
        <PSm>If you wish to add a minor after the application to graduate (without late fee) deadline date,please email
            <Link to={'/'} className='text-color3'>gradinfo@torontomu.ca</Link>
        </PSm>
    </div>
  )
}

export default Minor