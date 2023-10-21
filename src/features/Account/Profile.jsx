import React from 'react'
import { useGetUserProfileQuery } from '../auth/authSlice'
import {useSelector} from 'react-redux'
import {selectToken} from '../auth/authSlice'

function Profile(){
  const token = useSelector(selectToken)
  console.log(token)
  return (
    <>
    <div>Profile</div>
    </>
  )
}

export default Profile