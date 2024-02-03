import React from 'react'
import PSm from '../../components/paragraphs/P_Sm'


const Cart = () => {
  return (
    <div className='p-4'>
        <PSm >Nehash Sayantharajah</PSm>
        <br />
        <PSm styles={'text-color3'}>Add Classes</PSm>
        <div className='py-4 max-w-lg  border-y'>
            <p className='text-sm px-4 max-w-md'> You are not eligible to enroll for the current term. Please contact your department for assistance</p>
        </div>
      
    </div>
  )
}

export default Cart