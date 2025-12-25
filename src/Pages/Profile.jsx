import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()
  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center p-5'>
        <h1 className='text-white text-4xl'>This page is under Development</h1>
        <button onClick={() => navigate('/')} className='bg-white'>Go Back</button>
    </div>
  )
}

export default Profile