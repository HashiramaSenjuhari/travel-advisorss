import React, { useState } from 'react'

const UserDetail = ({userEvent,userEventName,update}) => {
  const [edit,setEdit] = useState(true)
  const handleEdit = () =>{
    setEdit(!edit)
  }
  return (
    <>
        <div className='w-[92%] h-[20%] rounded-xl border-slate-100 border-2 flex items-center pl-5 gap-0'>
      <div className=' w-[30%] text-justify'>
        <h2 className=' font-semibold text-slate-600'>{userEvent}</h2>
      </div>
      <div className=' w-2/4 text-justify font-semibold text-slate-800'>
        <input type="text" value={userEventName} onChange={(e) =>update(e.target.value)} disabled={edit} className=' bg-transparent w-full py-3 outline-none focus:border'/>
      </div>
      {
        edit?     <button key={userEventName} className='p-1 ring ring-purple-200 border px-4 rounded-lg text-slate-600 font-semibold ml-8 hover:bg-purple-400 hover:text-white transition-all' onClick={handleEdit}>Edit</button>:
        <button key={userEventName} className='p-1 ring ring-purple-200 border px-4 rounded-lg text-slate-600 font-semibold ml-8 hover:bg-purple-500 hover:text-white transition-all' onClick={handleEdit}>Save</button>
      }
    </div>
    </>
  )
}

export default UserDetail