import React from 'react'
import { nearMeFoodCardInfo } from './FoodInfo'
import Cards from '../Cards'

const NearmeFood = () => {
  return (
    <div className='w-full h-full flex flex-col flex-wrap justify-center gap-x-3 pl-4 overflow-x-auto no-scrollbar'>
      {nearMeFoodCardInfo?.map(detail => (
      <Cards img={detail.img} state={detail.state} Area={detail.area} rating={detail.rating} country={detail.country} key={detail.area} PlaceName={detail.placename}/>
      ))}
    </div>
  )
}

export default NearmeFood