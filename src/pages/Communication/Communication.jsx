import React from 'react'
import CommTable from '../../components/CommTable'
import PSm from '../../components/paragraphs/P_Sm'
const Communication = () => {
  return (
    <div className='p-4'>
        <PSm styles={'text-textcol2'}>Communication list</PSm>
        <CommTable/>
    </div>
  )
}

export default Communication