import React from 'react'
import './SongRow.css'
function SongRow({ track }) {
    return (
        <div className='songRow'>
            <img src={track.album.images[0].url} className='songRow_Album'></img>

            <div className='songRow_Info'>
                <h3>{track.name}</h3>

                <p>  {track.artists.map(artist => artist.name).join(",")} {track.album.name} </p>
            </div>

        </div>
    )
}

export default SongRow