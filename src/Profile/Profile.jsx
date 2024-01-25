import { Button, IconButton, Stack } from '@mui/material'
import React, { lazy, useState } from 'react'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import User from '../assets/user.png'
import floating from '../assets/floating.svg'
import moments from '../assets/moments.svg'
import UserDetail from './UserDetail';

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null)
  const [firstName, setFirstName] = useState('Hari')
  const [lastName, setLastName] = useState('prasath')
  const [email, setEmail] = useState('truebillionhari@gmail.com')
  const [phone, setPhone] = useState('123456789')

  const user1Information = [
    {
      'First Name': firstName,
      'Last Name': lastName,
      'Email': email,
      'phone': phone

    }
  ]
  const handleProfileImage = () => {
    const file = event.target.files[0]
    setProfileImage(file)
    const reader = new FileReader()
    reader.onload = () => {
      setProfileImage(reader.result)
    }
    reader.readAsDataURL(file)
  }
  return (
    <div className='w-full h-full  bg-white flex flex-row-reverse'>
      <Stack className='border' sx={{
        width: '75%',
        height: '100%',
      }}>
        <div className=' w-full h-full flex pt-14 flex-col gap-y-4 items-center'>
          <div className='h-[45%] w-[98%] flex flex-col gap-y-1 items-center'>
            {user1Information.map(detail => (
              <>
                <UserDetail userEvent={'First Name'} userEventName={detail['First Name']} update={setFirstName} key={'firstname'} />
                <UserDetail userEvent={'Last Name'} userEventName={detail['Last Name']} update={setLastName} key={'lastname'} />
                <UserDetail userEvent={'Email'} userEventName={detail.Email} update={setEmail} key={'email'}/>
                <UserDetail userEvent={'Phone'} userEventName={detail.phone} update={setPhone} key={phone}/>
              </>
            ))}
          </div>

          {/* <div className='w-[92%] h-[45%] bg-white rounded-2xl border flex'>
            <img src={moments} onLoad={lazy} alt="" className='h-full w-2/4 object-cover' />
            <img src={floating} onLoad={lazy} alt="" className='h-full w-2/4 object-cover' />
          </div> */}
        </div>
      </Stack>
      <Stack className='border-t' sx={{
        width: '25%',
        height: '100%',
      }}>
        <div className='w-full h-[25%] '>

        </div>
        <div className='h-[75%] relative bg-stone-800'>
          <div className='-top-24 relative left-20 w-[50%] h-[33%] rounded-full overflow-hidden'>
            {profileImage ? <img src={profileImage} alt="" className='w-full h-full object-cover' /> : <img src={User} alt="" className='w-full h-full' />}
          </div>
          <IconButton sx={{
            position: 'absolute',
            left: '65%',
            top: '1%',
            bgcolor: 'white',
            ":hover": {
              bgcolor: 'white'
            },
            color: 'black',
          }}>
            <PhotoCameraIcon />
            <input type="file" accept='image/*' className='absolute w-10 h-10 rounded-full opacity-0 cursor-pointer inline-block' onChange={handleProfileImage} />
          </IconButton>
          <div className=' w-full h-[67%]  top-20 left-0 absolute'>
            <div className='flex justify-center flex-col items-center gap-y-4 pt-3'>
              <h2 className='f font-semibold text-[24px] antialiased text-white'>HariBillionaire</h2>
              <h2 className=' text-[14px] antialiased font-semibold text-slate-50'>truebilllionhari@gmail.com</h2>
            </div>
          </div>
          <div className='w-full flex justify-around  mt-40'>


          </div>
        </div>
      </Stack>
    </div>
  )
}

export default Profile