import React from 'react'
import "./Body.css"
import Header from './Header'
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';
function Body({ spotify }) {

    const [{ discover_weekly }, dispatch] = useDataLayerValue();
    console.log("Discver:..", discover_weekly)
    return (
        <div className='body'>
            <Header spotify={spotify} />
            <div className='body_info'>
                <img src={discover_weekly?.images[0].url} alt=""></img>
                <div className='body_infoText'>
                    <p>Playlist</p>
                    <h1>Discover weekly</h1>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className='body_songs'>
                <div className='body_icons'>
                    <PlayCircleFilledOutlinedIcon fontSize='large' className='body_play_large' />
                    <FavoriteBorderIcon fontSize='large' />
                    <MoreHorizIcon fontSize='large' />
                   </div>

                    {discover_weekly?.tracks.items.map(item =>
                        <SongRow track={item.track} />
                    )}
                
            </div>
        </div>
    )
}
export default Body