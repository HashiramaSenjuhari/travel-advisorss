import React from 'react'
import { popularFoodCardInfo } from './FoodInfo'
import Cards from '../Cards'

const PopularFood = () => {
  return (
    <div className='w-full h-full justify-center flex flex-col flex-wrap gap-x-3 pl-4 overflow-x-auto no-scrollbar' style={{flexFlow: Cards.length > 4 ? 'wrap column' : 'unset column',}}>
    {popularFoodCardInfo?.map((detail,index) => (
    <Cards img={detail.img} state={detail.state} Area={detail.area} rating={detail.rating} country={detail.country} key={index} id={detail.id} PlaceName={detail.placename}/>
    ))}
  </div>

  )
}

export default PopularFood