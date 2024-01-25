import { Box, Stack } from '@mui/material'
import React from 'react'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Header from './components/Header/Header'
import { Route ,Routes } from 'react-router-dom'
import Place from './components/Hero/Place/Place.jsx'
import Food from './components/Hero/Food/Food.jsx'
import Favorite from './components/Hero/Favorite.jsx'
import Help from './components/Help/Help.jsx'
import Report from './components/Help/Report.jsx'
import Setting from './components/Help/Setting.jsx'
import Profile from './Profile/Profile.jsx'

const App = () => {
  return (
    <Box sx={{
      width:'100%',
      height:'100vh',
      bgcolor:'grey',
      display:'flex',
    }}>
      <Stack sx={{
        width:'18%',
        height:'100%',
        bgcolor:'white'
      }}>
        <Sidebar/>
      </Stack>
      <Box sx={{
        width:'100%',
        height:'100%',
        bgcolor:'gold'
      }}>
        <Stack sx={{
          width:'100%',
          bgcolor:'white',
          height:'11.5%'
        }}>
          <Header/>
        </Stack>
        <Stack className='scrollbar' sx={{
          width:'100%',
          bgcolor:'blue',
          height:'88.5%',
          overflowY:'scroll'
        }}>
          <Routes>
            <Route path='/*' element={<Place/>}/>
            <Route path='/food/*' element={<Food/>}/>
            <Route path='/fav' element={<Favorite/>}/>

            <Route path='/help' element={<Help/>}/>
            <Route path='/report' element={<Report/>}/>
            <Route path='/setting' element={<Setting/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Routes>
        </Stack>
      </Box>
    </Box>
  )
}

export default App