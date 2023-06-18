import React from 'react'
import "./Footer.css"
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';


function Footer() {
    return (
        <div className='footer'>
            <div className='footer_left'>
                <img src='https://upload.wikimedia.org/wikipedia/en/3/37/Treat_You_Better_%28Official_Single_Cover%29_by_Shawn_Mendes.png' alt='' className='footer_albumLogo' />
                <div className="footer_songInfo">
                    <h4>Song</h4>
                    <p>Artist</p>
                </div>


            </div>
            <div className='footer_center'>
                <div className='center_icons'>
                    <ShuffleIcon className='footer_icon' />
                    <SkipPreviousIcon className='footer_icon' />
                    <div className="play_btn_container">
                    <PlayCircleFilledOutlinedIcon className="footer_icon play_btn" fontSize="large" />
                    </div>
                    <SkipNextIcon className='footer_icon' />
                    <RepeatRoundedIcon className='footer_icon' />
                </div>
            </div>

            <div className='footer_right'>
                <QueueMusicIcon className='footer_icon' />
                <Box sx={{ width: 200 }}>
                    <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                        <VolumeDown />
                        {/* <Slider aria-label="Volume" value="50" onChange="20" color="secondary"/> */}
                        {/* <Slider aria-label="Volume" value="50"   /> */}
                        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                        <VolumeUp />
                    </Stack>

                </Box>
            </div>

        </div>
    )
}
export default Footer







