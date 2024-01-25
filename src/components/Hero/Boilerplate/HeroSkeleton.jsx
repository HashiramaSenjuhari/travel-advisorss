import React from 'react'
import Button from '../tool/Button'
import { Route, Routes } from 'react-router-dom'

const HeroSkeleton = ({EventName,details}) => {
  return (
    <div className='w-full h-[60%] flex flex-col shadow-md shadow-slate-200' key={EventName}>
    <div className='w-full h-[24%] gap-y-1 flex items-start pl-3 flex-col border-b '>
      <h1 className='font-semibold text-[24px]'>{EventName}</h1>
      <div className='flex gap-x-2'>
        {details.map(detail =>(
          <Button buttonName={detail.name} link={detail.link} key={detail.id}/>
        ))}
      </div>
    </div>
    <div className='w-full h-[76%]'>
      <Routes>
        {details.map(detail => (
        <Route path={detail.link} element={detail.element} key={detail.link}/>
        ))}
      </Routes>
    </div>
  </div>
  )
}

export default HeroSkeleton