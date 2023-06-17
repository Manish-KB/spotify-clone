import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
function Sidebar() {
return(
    <div className='sidebar'>
    <img className='sidebar_logo' src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"></img>
    
    <SidebarOption title="Home" Icon={HomeIcon}/>
    <SidebarOption title="Search" Icon={SearchOutlinedIcon}/>
    <SidebarOption title="Library" Icon={LibraryMusicOutlinedIcon}/>
    <strong className='sidebar_title'>Your Library</strong>
    <hr/>
    </div>
)
}
export default Sidebar