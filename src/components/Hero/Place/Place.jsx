import React from 'react'
import HeroSkeleton from '../Boilerplate/HeroSkeleton'
import { placeButton } from '../ButtonDetail'

const Place = () => {
  return (
    <div className='w-full h-full bg-white'>
      <HeroSkeleton EventName={'Travel'} details={placeButton} key={'Travel'}/>
    </div>
  )
}

export default Place