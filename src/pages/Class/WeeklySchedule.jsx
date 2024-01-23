import React from 'react'
import Schedule from '../../components/Schedule'
import PSm from '../../components/paragraphs/P_Sm'
import PMd from '../../components/paragraphs/P_Md'
const WeeklySchedule = () => {
  return (
    <div className='p-4 max-w-6xl'>
        <div className='border-b'>
    <PSm >Nehash Sayantharajah</PSm>
    <br />
    <PMd styles={'text-color3'}>My Class Schedule</PMd>
    </div>
    <div className='flex py-6 justify-around'>
        <PSm>Select Display Options</PSm>
        <label htmlFor=""><input type="radio" />list view</label>
        <label htmlFor=""><input type="radio" />Weekly schedule view</label>
    </div>
    <Schedule/>
    </div>
  )
}

export default WeeklySchedule