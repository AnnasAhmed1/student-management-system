import React from 'react'
import H2 from '../../components/headings/H2'
import AcademicTable from '../../components/AcademicTable'

const CourseHistory = () => {
  return (
    <div className='p-4'>
        <H2 styles={'py-2'}>Course History</H2>
        <AcademicTable/>
    </div>
  )
}

export default CourseHistory