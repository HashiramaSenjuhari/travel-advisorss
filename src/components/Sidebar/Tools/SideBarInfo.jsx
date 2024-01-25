import FastfoodIcon from '@mui/icons-material/Fastfood';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import HelpIcon from '@mui/icons-material/Help';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import SettingsIcon from '@mui/icons-material/Settings';
export const Basic = [
  {
    id:1,
    name:'Place',
    icon:<BeachAccessIcon/>,
    to:'/place/*'
  },
  {
    id:2,
    name:'Food',
    icon:<FastfoodIcon/>,
    to:'/food/popularFood'
  },
  {
    id:3,
    name:'Favorite',
    icon:<FavoriteBorderIcon/>,
    to:'/fav'
  },
]

export const Help = [
  {
    id:4,
    name:'Help',
    icon:<HelpIcon/>,
    to:'/Help'
  },
  {
    id:5,
    name:'Report',
    icon:<ReportGmailerrorredIcon/>,
    to:'/Report'
  },
  {
    id:6,
    name:'Setting',
    icon:<SettingsIcon/>,
    to:'/Setting'
  },
]