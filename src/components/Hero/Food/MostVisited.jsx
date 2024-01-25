import React from 'react'
import { mostVistedFoodCardInfo } from './FoodInfo'
import Cards from '../Cards'

const MostVisitedFood = () => {
  return (
    <div className='w-full h-full flex flex-col flex-wrap justify-center gap-x-3 pl-4 overflow-x-auto no-scrollbar'>
      {mostVistedFoodCardInfo?.map(detail => (
      <Cards img={detail.img} state={detail.state} Area={detail.area} rating={detail.rating} country={detail.country} key={detail.area} PlaceName={detail.placename}/>
      ))}
    </div>
  )
}

export default MostVisitedFood