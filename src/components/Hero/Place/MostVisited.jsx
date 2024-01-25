import React from 'react'
import { mostVistedPlaceCardInfo } from './PlaceInfo'
import Cards from '../Cards'

const MostVisited = () => {
  return (
    <div className='w-full h-full flex flex-col flex-wrap justify-center gap-x-3 pl-4 overflow-x-auto no-scrollbar'>
      {mostVistedPlaceCardInfo?.map(detail => (
      <Cards img={detail.img} state={detail.state} Area={detail.area} rating={detail.rating} country={detail.country} key={detail.area} PlaceName={detail.placename}/>
      ))}
    </div>
  )
}

export default MostVisited