import React, { useEffect, useState } from 'react'
import Cards from './Cards'

const Favorite = () => {
  useEffect(() =>{
    console.log(localStorage.getItem('favKey'))
  },[])
  return (
    <div className='w-full h-full bg-white'>
      <div className='w-full h-[55%] rounded-xl'>
        <div className='w-full h-[17%] border-b flex pl-3 '>
          <header className='font-semibold text-[24px]'>Favorites</header>
        </div>
        <div className='w-full h-[83%] border'>
          {Cards.length>0?<p></p>:<><p></p></>}
        </div>
        
      </div>
      <div className='h-[45%] border'>

      </div>
    </div>
  )
}

export default Favorite