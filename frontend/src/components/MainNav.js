import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const Navigate = useNavigate();
  
  useEffect(()=>{
    if(value===0)Navigate("/");
    else if(value===1)Navigate("/movies");
    else if(value===2)Navigate("/series");
    else if(value===3)Navigate("/search");
  },[value,Navigate]);

  return (
    <Box sx={{ width: 500,
        position:'fixed',
        bottom:0,
        zIndex:100,
        
     }}
     >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
            backgroundColor:"black",
            color:"white",
        }}
      >
        <BottomNavigationAction 
        label="Trending" 
        icon={<WhatshotIcon />}
        sx={{ color: "white" }} 
        />

        <BottomNavigationAction 
        label="Movies" 
        icon={<MovieIcon />}
        sx={{ color: "white" }} 
        />

        <BottomNavigationAction 
        label="TV Shows" 
        icon={<TvIcon />} 
        sx={{ color: "white" }} 
        />

<BottomNavigationAction 
        label="Search" 
        icon={<SearchIcon />} 
        sx={{ color: "white" }} 
        />

      </BottomNavigation>
    </Box>
  );
}
