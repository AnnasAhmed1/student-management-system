import React from 'react'
import PSm from '../../components/paragraphs/P_Sm'
import ClassForm from '../../components/ClassForm'
const ClassSearch = () => {
  return (
    <div className='p-4'> 
    <div className='border-b'>
    <PSm >Nehash Sayantharajah</PSm>
    <br />
    <PSm styles={'text-color3'}>Search For Classes</PSm>
    
    </div>
    <ClassForm/>
    </div>
  )
}

export default ClassSearch