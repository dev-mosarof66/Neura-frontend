import React, { useContext, useEffect } from 'react'
import Context from '../../context/context'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'

const Profile = () => {
  const { User } = useContext(Context)
  const navigate = useNavigate()



  useEffect(() => {
    if (!User) {
      toast.error('You Are not logged in. Please login first')
      navigate('/login')
    }


  }, [])
  return (
    <div className='w-full h-screen gradient-bg'>Profile</div>
  )
}

export default Profile