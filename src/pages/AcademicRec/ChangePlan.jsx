import React from 'react'
import H2 from '../../components/headings/H2'
import PSm from '../../components/paragraphs/P_Sm'
const ChangePlan = () => {
  return (
    <div className='p-4'>
      <div className='border-b'>
        <H2>Change Plan/Major</H2>
        <br />
        <PSm styles={''}>Select the academic program in which you want to change your plan/major by clicking on its description </PSm>
        <br />
        <PSm styles={'text-textcol2'}>No Active Academic Programs</PSm>
      </div>
      <br />
      <PSm>You are not eligible to change your Plan/Major at the time </PSm>
      <br />
      <PSm>Please see your Program Department for assistance.</PSm>

    </div>
  )
}

export default ChangePlan