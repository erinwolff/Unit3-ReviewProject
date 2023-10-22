import React from 'react'
import { useGetUserProfileQuery } from '../Auth/authSlice'
import { useSelector } from 'react-redux'
import { selectToken } from '../Auth/authSlice'
import CreatePosts from '../Posts/createPosts'

function Profile() {
  const { data, isLoading, isError } = useGetUserProfileQuery();
  
  const token = useSelector(selectToken)
  console.log(token)

  if (isLoading) {
    return <div>Loading....</div>
  }

  if (isError) {
    return <div>Something went wrong ... </div>
  }

  return (
    <>
      <div>
        <h1>Welcome, {data.data.username}!!!!</h1>
        <h2>User's Data:</h2>
        <p>UserID: {data.data._id}</p>
        <p>Username: {data.data.username}</p>
        {
          data.data.posts.length === 0 ?
            <p>You don't have any posts.</p>
            : data.data.posts.map(post => {
              return <div key={post._id}>
                <h3>{post.title}</h3>
                <h4>{post.description}</h4>
              </div>
            })
        }
        <div>Create New Post: <CreatePosts/></div>
      </div>
    </>
  )
}

export default Profile