import React from 'react'
import { Outlet } from 'react-router-dom'
import video from "../video/video.mp4"

const Routerlayout = () => {
  return (
    <div className='w-[100vw] h-[100vh] relative'>
      <video src={video} loop autoPlay muted className='w-full h-full object-cover absolute top-0 left-0'></video>
      <div className='login absolute top-0 left-[50%] translate-x-[-50%]'>
        <Outlet />
      </div>
    </div>
  )
}

export default Routerlayout
