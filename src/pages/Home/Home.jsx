import React from 'react'

import Cards from '../../components/Cards'
import {cardsData} from './Data'

const Home = () => {
    
  return (
    
    <div className='bg-gray-100'>
     
        
        
        <div className= ' py-32 max-w-4xl gap-4 mx-auto grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  '>
       { cardsData.map((card, index) => (
            
            <Cards styles={card.style} link={card.link} heading={card.heading} img={card.img} notification={card.notification} />
    
 
        ))} </div>
        </div>
  )
}

export default Home