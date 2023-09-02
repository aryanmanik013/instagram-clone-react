import React from 'react'
import './VideoHeader.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'

const VideoHeader = () => {
  return (
    <div className='video__Header'>
        <ArrowBackIcon/>

        <h3>Reels</h3>
        <CameraAltOutlinedIcon/>
    </div>
  )
}

export default VideoHeader
