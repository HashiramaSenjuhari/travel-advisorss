import { Box, Button, IconButton, Paper, Tooltip } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { StyledBadge } from './StyledBadge';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box className='w-full h-[95.5%]'>
      <div className='w-full h-full flex justify-end'>
        <div className='w-2/4 flex items-center pl-5 justify-around'>
          <div className='flex w-fit bg-white pl-2 p-1 rounded-2xl border items-center'>
            <SearchIcon sx={{
              color: 'grey'
            }} />
            <input className='py-2  w-72 pl-2 outline-none font-semibold text-stone-700' type="text" placeholder='Search' />
          </div>
            <Link to={'/profile'}>
            <IconButton>
            <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
              <Avatar>H</Avatar>
              </StyledBadge>
            </IconButton>
            </Link>
        </div>
      </div>
    </Box>
  )
}

export default Header