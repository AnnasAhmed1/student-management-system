import React from 'react'
import H2 from '../../components/headings/H2'
import PSm from '../../components/paragraphs/P_Sm'
const Graduation = () => {
  return (
    <div className='p-4'>
        <div className='border-b'>
        <H2>Submit An Application For Graduation</H2>
        <br />
        <PSm styles={'text-textcol1 '}>Nehash Ethan</PSm>
        <br />
        <PSm styles={'text-textcol2 '}>No Active Academic Programs</PSm>
        </div>
        <br />
        <PSm>No active Academic. Programs were found. Please see your Academic advisor for more assistance.</PSm>
    </div>
  )
}

export default Graduation