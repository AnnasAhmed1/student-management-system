import React from 'react'
import H1 from '../../components/headings/H1'
import PSm from '../../components/paragraphs/P_Sm'
import { NameData,Notes } from './Data'
const NameUpdate = () => {
  return (
    <div className='p-4'><H1>Confirm Your Chosen Name</H1>
    <div className='my-4'>
        {NameData.map((data,index)=>(
       
       <div>
       <PSm>{data.main}</PSm>
        <br/>
        <PSm>{data.nametext}</PSm>
        <br />
        <PSm>First Name: {data.name}</PSm>
        <br />
            <label className='flex gap-2' htmlFor="confirm">
        <input type="radio" name='confirm' /><PSm>I confirm the name displayed above is correct.</PSm></label>
        <br />
        <label className='flex gap-2' htmlFor="update">
        <input type="radio" name='update' /><PSm>I wish to update the name.</PSm></label>
        <br />
        </div>
        
        ))}
    <div>
        <PSm>Notes:</PSm>
        <ul className='list-disc px-4' >
    {Notes.map((note,index)=>(
        <li><PSm>{note.text}</PSm></li>

    ))}
    </ul >
    </div>
    </div>
    <button className='px-6 py-1 border rounded-lg text-color3 border-color3'>Save</button>
    
    
    </div>
    
  )
}

export default NameUpdate