import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({buttonName,link,id}) => {
  return (
    <Link to={link} key={id}>
        <button className='p-3 px-6 bg-stone-800 font-semibold  text-sm text-slate-200 rounded-3xl shadow-md '>{buttonName}</button>
    </Link>
  )
}

export default Button