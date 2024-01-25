import React, { lazy, useState } from 'react'
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { Box, Button, Stack } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Cards = ({img,rating,state,country,Area,id,PlaceName}) => {
  const [liked,setLiked] = useState(false)
  const handleLikeFunction = (id) =>{
    setLiked(!liked)
    if(!liked){
      console.log(id)
      localStorage.setItem(`favKey ${id}`,id)
    }
    else{
      console.log(`unliked ${id}`)
      localStorage.removeItem(`favKey ${id}`,1)
    }
  }
  return (
      <Card sx={{ minHeight: '280px', width: 240, borderRadius:'10px' }}>
        <CardCover>
          <img
            src={img?img:''}
            srcSet={img?img:''}
            onLoad={lazy}
            alt=""
          />
        </CardCover>
        <CardCover
          sx={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0) 300px)',
          }}
        />
        <CardContent sx={{ justifyContent: 'flex-end' }}>
          <Box sx={{
          }}>
          <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Typography level="title-sm" textColor="#fff" sx={{fontSize:'20px', mb:'12px'}}>
            {PlaceName?PlaceName:'Unknown'}
            
          </Typography>

          <Typography sx={{color:"white", fontSize:'14px',fontWeight:'500'}} startDecorator={<GradeIcon sx={{color:'gold', fontSize:'large',}} />}>
            {rating}
          </Typography>
          </Box>
          
          <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <Stack>
            <Typography level="title-sm" textColor="#fff" sx={{fontSize:'12px'}}>
            {Area?Area:'Unknown'}
            
          </Typography>
      
          <Typography
          sx={{
            display:'flex',
            fontSize:'12px'
          }}
            startDecorator={<LocationOnRoundedIcon sx={{fontSize:'12px'}}/>}
            textColor="neutral.300"
          >
            {state?state:'Unknown'}, {country?country:'Unknown'}
          </Typography>
            </Stack>
          <IconButton onClick={() =>{handleLikeFunction(id)} } sx={{
              color:liked?'red':'white',
              
            }}>
              {liked?<FavoriteIcon/>:<FavoriteBorderIcon/>}
            </IconButton>
          </Box>
          </Box>
        </CardContent>
      </Card>
  )
}

export default Cards