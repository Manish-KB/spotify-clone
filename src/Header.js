import React from 'react'
import "./Header.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useDataLayerValue} from './DataLayer';



function Header() {
    const [{ user, token }, dispatch] = useDataLayerValue();
    console.log(user);
  return (
    <div className='header'>
      <div className='header_left'>
       <SearchOutlinedIcon />
       <input placeholder='Search for Songs,Artists, Playlists...' type="text" />
        </div>  
        <div className='header_right'>
        <Avatar src="{user?.images[0]?.url}" alt="{user?.display_name}" />
        <h4>{user?.display_name}</h4>
        </div>

    </div>
  )
}

export default Header

