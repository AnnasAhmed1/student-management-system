import React from 'react'
import PSm from '../../components/paragraphs/P_Sm'
import ContractsTable from '../../components/ContractsTable'
const Probation = () => {
  return (
    <div className='p-4'>
        <PSm styles={'text-textcol2 '}> Select a term</PSm>
        <ContractsTable/>
    </div>
  )
}

export default Probation