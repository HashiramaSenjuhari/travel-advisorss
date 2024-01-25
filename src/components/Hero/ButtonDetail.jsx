import Popular from '../Hero/Place/Popular'
import NearMe from './Place/NearMe'
import MostVisited from './Place/MostVisited'
import PopularFood from './Food/Popular'
import MostVisitedFood from './Food/MostVisited'
import NearmeFood from './Food/Nearme'



export const placeButton = [
  {
    id:1,
    name:'Popular',
    link:'/place/*',
    element:<Popular/>
  },
  {
    id:2,
    name:'Near me',
    link:'/place/nearme',
    element:<NearMe/>
  },
  {
    id:3,
    name:'Most visited',
    link:'/place/mostvisited',
    element:<MostVisited/>
  },
]
export const FoodButton = [
  {
    id:4,
    name:'Popular',
    link:'popularFood',
    element:<PopularFood/>
  },
  {
    id:5,
    name:'Near me',
    link:'nearmeFood',
    element:<NearmeFood/>
  },
  {
    id:6,
    name:'Most visited',
    link:'mostvisitedFood',
    element:<MostVisitedFood/>
  },
]