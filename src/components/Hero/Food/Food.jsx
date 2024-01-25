import React from 'react'
import HeroSkeleton from '../Boilerplate/HeroSkeleton'
import { FoodButton } from '../ButtonDetail'

const Food = () => {
  return (
    <div className='w-full h-full bg-white'>
      <HeroSkeleton details={FoodButton} EventName={'Food'} key={'Food'} />
    </div>
  )
}

export default Food