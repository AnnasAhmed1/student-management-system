import React from 'react'
import H2 from '../../components/headings/H2'
import PSm from '../../components/paragraphs/P_Sm'
import { AccountInfo } from './Data'
import AccountTable from '../../components/AccountTable'
const Account = () => {
  return (
    <div className='p-2'>
       <H2>Account Summary</H2>
       <div className='max-w-md flex justify-between'>
       {AccountInfo.map((info,index)=>(
        <div className='ps-4'>
        <PSm styles={'ps-4 py-2'}>ID: {info.id}</PSm>
        <PSm styles={''}>Total: {info.total}</PSm>
        </div>
       ))}
       <button><PSm styles={'text-color3 border'}>Academic Information</PSm></button>
       </div>
       <div className='flex w-full justify-end'>
        <button><PSm styles={'text-color3 border'}>Account Details Help?</PSm></button>
       </div>
       <AccountTable  />
        
        </div>
  )
}

export default Account