import React from 'react'
import TermTable from '../../components/TermTable'

import { termData } from './Data' 
const Grades = () => {
  return (
    <div>
        {termData.map((terms,index)=>(<TermTable link={terms.link} term={terms.term} status={terms.status} />))}
        </div>
  )
}

export default Grades