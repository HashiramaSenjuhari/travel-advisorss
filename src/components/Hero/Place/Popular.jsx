import React from 'react'
import Cards from '../Cards'
import { popularPlaceCardInfo } from './PlaceInfo'

const Popular = () => {
  return (
    <div className='w-full h-full justify-center flex flex-col flex-wrap gap-x-3 pl-4 overflow-x-auto no-scrollbar' style={{flexFlow: Cards.length > 4 ? 'wrap column' : 'unset column',}}>
      {popularPlaceCardInfo?.map((detail,index) => (
      <Cards img={detail.img} state={detail.state} Area={detail.area} rating={detail.rating} country={detail.country} key={index} id={detail.id} PlaceName={detail.placename}/>
      ))}
    </div>
  )
}

export default Popular