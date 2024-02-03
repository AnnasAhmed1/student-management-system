import React from 'react'
import { Link } from 'react-router-dom';
import H3 from './headings/H3';
import PSm from './paragraphs/P_Sm';
// import { Link } from 'react-router-dom'
const Cards = (props) => {
    
  return (
    
    <Link to={props.link}>
    <div className='w-[90%] mx-auto sm:w-full max-w-md py-2 flex flex-col cursor-pointer hover:border-color3 text-center items-center rounded-lg justify-between border h-60 hover:scale-105 transition-all bg-color2 '>
        <H3 styles={'text-color3'}>{props.heading}</H3>
        
        <img src={props.img} className={`${props.styles}`} alt="" />
        <PSm styles={'text-textcol'}>{props.notification}</PSm>
       
    </div></Link>
 
   
  )
}

export default Cards